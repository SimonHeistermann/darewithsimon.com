import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import { log } from "console";


const app = express();
app.set("trust proxy", 1);
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: "Zu viele Anfragen, bitte warte kurz." },
});
app.use("/newsletter", limiter);

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: "Zu viele Anfragen, bitte warte kurz." },
});
app.use("/contact", contactLimiter);

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_API_URL = "https://api.brevo.com/v3/contacts";
const BREVO_BLOCKED_API_URL = "https://api.brevo.com/v3/smtp/blockedContacts";

const LIST_ID_UNCONFIRMED_DE = 7;
const LIST_ID_UNCONFIRMED_EN = 11;

app.post("/newsletter", async (req, res) => {
  const { email, consentAccepted, language } = req.body;

  if (!email || !consentAccepted) {
    return res.status(400).json({ message: "Email und Zustimmung sind erforderlich." });
  }

  const listId = language === "de" ? LIST_ID_UNCONFIRMED_DE : LIST_ID_UNCONFIRMED_EN;

  try {
    
    await fetch(`${BREVO_BLOCKED_API_URL}/${encodeURIComponent(email)}`, {
      method: "DELETE",
      headers: {
        "api-key": BREVO_API_KEY!,
        Accept: "application/json",
      },
    });

    await fetch(`${BREVO_API_URL}/${encodeURIComponent(email)}`, {
      method: "PUT",
      headers: {
        "api-key": BREVO_API_KEY!,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        emailBlacklisted: false,
      }),
    });
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY!,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        emailBlacklisted: false,
        smsBlacklisted: false,
        listIds: [listId],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json() as { message?: string };
      return res.status(500).json({ message: errorData?.message || "Fehler bei Brevo API" });
    }

    res.status(200).json({ message: "Kontakt wurde zur Liste hinzugefügt." });
  } catch (error: unknown) {
    const err = error as { message?: string };
    res.status(500).json({ message: err?.message || "Serverfehler" });
  }
});

app.listen(port, () => {
  console.log(`Backend läuft auf http://localhost:${port}`);
});

app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Alle Felder sind erforderlich." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Kontaktformular" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `Neue Anfrage von ${name} – ${subject}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <p><strong>Nachricht:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Nachricht erfolgreich versendet." });
  } catch (error: any) {
    console.error("Mail Error:", error);
    res.status(500).json({ message: "Fehler beim Versenden der Nachricht." });
  }
});
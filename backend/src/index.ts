import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rate Limiter für den /newsletter-Endpunkt
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minuten
  max: 5, // Max. 5 Anfragen pro IP
  message: { message: "Zu viele Anfragen, bitte warte kurz." },
});
app.use("/newsletter", limiter);

// Brevo-Konstanten
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_API_URL = "https://api.brevo.com/v3/contacts";
const TEMPLATE_ID_DE = 1234;
const TEMPLATE_ID_EN = 5678;

app.post("/newsletter", async (req, res) => {
  const { email, consentAccepted, language } = req.body;

  if (!email || !consentAccepted) {
    return res.status(400).json({ message: "Email und Zustimmung sind erforderlich." });
  }

  const templateId = language === "de" ? TEMPLATE_ID_DE : TEMPLATE_ID_EN;

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY!,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [], // Optional
        updateEnabled: true,
        emailBlacklisted: false,
        smsBlacklisted: false,
        templateId,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json() as { message?: string };
      return res.status(500).json({ message: errorData?.message || "Fehler bei Brevo API" });
    }

    res.status(200).json({ message: "Double Opt-in E-Mail wurde versendet." });
  } catch (error: unknown) {
    const err = error as { message?: string };
    res.status(500).json({ message: err?.message || "Serverfehler" });
  }
});

app.listen(port, () => {
  console.log(`Backend läuft auf http://localhost:${port}`);
});
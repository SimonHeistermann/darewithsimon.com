import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-soft border border-border p-8 sm:p-12">
            <h1 className="text-4xl font-bold text-foreground mb-8 text-gradient">
              Datenschutzerklärung
            </h1>
            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-8">
                <h2>1. Datenschutz auf einen Blick</h2>
                <p>
                  Diese Datenschutzerklärung informiert Sie darüber, wie ich personenbezogene Daten erhebe, verwende und schütze, wenn Sie meine Website besuchen.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Verantwortlicher</h2>
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p>
                  Simon Heistermann<br />
                  Firma: Simon Heistermann<br />
                  [Straße und Hausnummer]<br />
                  [PLZ] [Ort]<br />
                  Deutschland
                </p>
                <p>
                  <strong>E-Mail:</strong>{" "}
                  <a
                    href="mailto:[deine@email.de]"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    [deine@email.de]
                  </a>
                </p>
              </section>

              <section className="mb-8">
                <h2>3. Erhebung und Speicherung personenbezogener Daten</h2>
                <p>Ich verarbeite personenbezogene Daten nur, wenn Sie diese aktiv übermitteln, z. B. über das Kontaktformular oder das Newsletterformular.</p>
                <ul>
                  <li>Name, E-Mail-Adresse und ggf. Nachricht (Kontaktformular)</li>
                  <li>Name, E-Mail-Adresse (Newsletter-Anmeldung)</li>
                  <li>Zugriffs- und Nutzungsdaten (automatisch durch Server oder Drittanbieter)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Zweck der Datenverarbeitung</h2>
                <p>
                  Die Verarbeitung erfolgt zur:
                </p>
                <ul>
                  <li>Bearbeitung Ihrer Anfrage</li>
                  <li>Versendung meines Newsletters</li>
                  <li>Optimierung der Website</li>
                  <li>Sicherstellung eines sicheren Betriebs</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Rechtsgrundlage</h2>
                <p>
                  Die Datenverarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. a, b und f DSGVO.
                </p>
              </section>

              <section className="mb-8">
                <h2>6. Weitergabe an Dritte</h2>
                <p>
                  Eine Weitergabe erfolgt nur, wenn dies gesetzlich erlaubt ist oder Sie eingewilligt haben.
                  Dienstleister wie Hostinganbieter oder Newsletter-Tools erhalten ggf. Zugriff im Rahmen eines Auftragsverarbeitungsvertrags.
                </p>
              </section>

              <section className="mb-8">
                <h2>7. Newsletter</h2>
                <p>
                  Wenn Sie sich für den Newsletter anmelden, verwenden wir Ihre E-Mail-Adresse und ggf. Ihren Namen, um Ihnen regelmäßig Informationen zu schicken. Die Anmeldung erfolgt im Double-Opt-In-Verfahren.
                </p>
                <p>
                  Sie können sich jederzeit abmelden. Ihre Daten werden dann umgehend gelöscht.
                </p>
              </section>

              <section className="mb-8">
                <h2>8. Kontaktformular</h2>
                <p>
                  Wenn Sie mir per Formular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung und für den Fall von Anschlussfragen gespeichert.
                </p>
              </section>

              <section className="mb-8">
                <h2>9. Einbindung von Diensten und Inhalten Dritter</h2>
                <p>
                  Auf dieser Website sind Inhalte Dritter eingebunden, z. B. YouTube-Videos, Instagram-Posts, TikToks, die durch externe Server geladen werden. Dabei kann Ihre IP-Adresse an den jeweiligen Dienst übermittelt werden.
                </p>
                <p>Folgende Drittanbieter können Daten verarbeiten:</p>
                <ul>
                  <li>Google Ireland Ltd. (YouTube)</li>
                  <li>LinkedIn Ireland Unlimited Company</li>
                  <li>Instagram (Meta Platforms Ireland Ltd.)</li>
                  <li>TikTok Technology Limited</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>10. Cookies und Tracking</h2>
                <p>
                  Diese Website verwendet selbst keine Cookies. Drittanbieter (z. B. YouTube) können jedoch Cookies setzen. Beim Einbetten von YouTube-Videos erfolgt dies datenschutzfreundlich über die „nocookie“-Variante.
                </p>
              </section>

              <section className="mb-8">
                <h2>11. Ihre Rechte</h2>
                <ul>
                  <li>Auskunft über gespeicherte Daten</li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                  <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruch gegen Verarbeitung (Art. 21 DSGVO)</li>
                </ul>
                <p>
                  Bitte kontaktieren Sie mich dafür über die oben angegebene E-Mail-Adresse.
                </p>
              </section>

              <section className="mb-8">
                <h2>12. Beschwerderecht</h2>
                <p>
                  Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
                </p>
              </section>

              <section className="mb-8">
                <h2>13. Aktualität und Änderung dieser Datenschutzerklärung</h2>
                <p>
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand:{" "}
                  {new Date().toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
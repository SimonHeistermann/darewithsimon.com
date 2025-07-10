import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-soft border border-border p-8 sm:p-12">
            <h1 className="text-4xl font-bold text-foreground mb-8 text-gradient">
              Impressum
            </h1>
            <div className="prose prose-lg max-w-none text-foreground">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Angaben gemäß § 5 TMG
                  </h2>
                  <div className="space-y-2">
                    <p className="font-medium">Simon Heistermann</p>
                    <p>Firma: Simon Heistermann</p>
                    <p>Frontend-Entwickler & Content Creator</p>
                    <p>[Straße und Hausnummer]</p>
                    <p>[PLZ] [Ort]</p>
                    <p>Deutschland</p>
                  </div>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Kontakt
                    </h2>
                    <div className="space-y-2">
                      <p>
                        <strong>E-Mail:</strong>{' '}
                        <a
                          href="mailto:[deine@email.de]"
                          className="text-primary hover:text-primary/80 underline"
                          rel="noopener noreferrer"
                        >
                          [deine@email.de]
                        </a>
                      </p>
                      <p>
                        <strong>Telefon:</strong>{' '}
                        <a
                          href="tel:+49XXXXXXXXX"
                          className="text-primary hover:text-primary/80 underline"
                          rel="noopener noreferrer"
                        >
                          +49 XXX XXX XXXX
                        </a>
                      </p>
                    </div>
                </section>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Umsatzsteuer-ID
                  </h2>
                  <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    <strong>DE[deine vollständige USt-ID]</strong>
                  </p>
                </section>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Redaktionell verantwortlich
                  </h2>
                  <p>
                    Simon Heistermann<br />
                    [Adresse wie oben]
                  </p>
                </section>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    EU-Streitschlichtung
                  </h2>
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a 
                      href="https://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline ml-1"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p className="mt-2">
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                </section>
                <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
                </section>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Haftung für Inhalte
                  </h2>
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte 
                    fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                    rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className="mt-4">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                    allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                    erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                    Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </section>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Haftung für Links
                  </h2>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                    Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                    mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                    Verlinkung nicht erkennbar.
                  </p>
                  <p className="mt-4">
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                    Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
                    Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </section>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Urheberrecht
                  </h2>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                    Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                    nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                  <p className="mt-4">
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                    Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                    gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                    bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                    werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </section>
                <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                        Stand: {new Date().toLocaleDateString('de-DE', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}
                    </p>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";

export default function PrivacyPolicy() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-soft border border-border p-8 sm:p-12">
            <h1 className="text-4xl font-bold text-foreground mb-8 text-gradient">
              {t.privacy.title}
            </h1>
            <div className="prose prose-lg max-w-none text-foreground">

              {/* Table of Contents */}
              {t.privacy.contents && (
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{t.privacy.contents.title}</h2>
                  <ol className="list-decimal list-inside space-y-1">
                    {t.privacy.contents.items.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ol>
                </section>
              )}

              {/* 1. Controller */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.responsible.title}</h2>
                <p>{t.privacy.responsible.description}</p>
                <p className="mt-2">
                  {t.privacy.responsible.contact}<br />
                  {t.privacy.responsible.address}<br />
                  {t.privacy.responsible.city}, {t.privacy.responsible.country}
                </p>
                <p className="mt-2">
                  <strong>{t.privacy.responsible.email}</strong>{" "}
                  <a
                    href="mailto:simon@heistermann-solutions.de"
                    className="text-primary hover:text-primary/80 underline"
                    rel="noopener noreferrer"
                  >
                    simon@heistermann-solutions.de
                  </a>
                </p>
              </section>

              {/* 2. DPO */}
              {t.privacy.dpo && (
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{t.privacy.dpo.title}</h2>
                  <p>{t.privacy.dpo.description}</p>
                </section>
              )}

              {/* 3. Data We Collect */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.dataCollection.title}</h2>
                <p>{t.privacy.dataCollection.description}</p>

                {t.privacy.dataCollection.subsections && (
                  <>
                    <h3 className="text-xl font-semibold mt-6 mb-3">{t.privacy.dataCollection.subsections.contactForm.title}</h3>
                    <p>{t.privacy.dataCollection.subsections.contactForm.description}</p>
                    <ul className="list-disc list-inside mt-2">
                      {t.privacy.dataCollection.subsections.contactForm.items.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-3">{t.privacy.dataCollection.subsections.newsletter.title}</h3>
                    <p>{t.privacy.dataCollection.subsections.newsletter.description}</p>
                    <ul className="list-disc list-inside mt-2">
                      {t.privacy.dataCollection.subsections.newsletter.items.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-3">{t.privacy.dataCollection.subsections.technical.title}</h3>
                    <p>{t.privacy.dataCollection.subsections.technical.description}</p>
                    <ul className="list-disc list-inside mt-2">
                      {t.privacy.dataCollection.subsections.technical.items.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </section>

              {/* 4. Purposes and Legal Basis */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.purpose.title}</h2>
                <p>{t.privacy.purpose.description}</p>
                <ul className="list-disc list-inside mt-2">
                  {t.privacy.purpose.items.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* 5. Third-Party Processors */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.thirdParties.title}</h2>
                <p>{t.privacy.thirdParties.description}</p>
                {t.privacy.thirdPartyProcessors && (
                  <div className="mt-4 space-y-4">
                    {t.privacy.thirdPartyProcessors.items.map((processor: { name: string; location: string; purpose: string; data: string }, idx: number) => (
                      <div key={idx} className="pl-4 border-l-2 border-primary/20">
                        <p className="font-semibold">{processor.name}</p>
                        <p className="text-sm text-muted-foreground">{processor.location}</p>
                        <p className="mt-1">{processor.purpose}</p>
                        <p className="text-sm">{language === 'de' ? 'Verarbeitete Daten' : 'Data processed'}: {processor.data}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* 6. International Data Transfers */}
              {t.privacy.internationalTransfers && (
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{t.privacy.internationalTransfers.title}</h2>
                  <p>{t.privacy.internationalTransfers.description}</p>
                  <ul className="list-disc list-inside mt-2">
                    {t.privacy.internationalTransfers.items.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* 7. Cookies */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.cookies.title}</h2>
                <p>{t.privacy.cookies.description}</p>
              </section>

              {/* 8. Retention */}
              {t.privacy.retention && (
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{t.privacy.retention.title}</h2>
                  <p>{t.privacy.retention.description}</p>
                  <ul className="list-disc list-inside mt-2">
                    {t.privacy.retention.items.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* 9. Your Rights */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.rights.title}</h2>
                <ul className="list-disc list-inside space-y-2">
                  {t.privacy.rights.items.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4">{t.privacy.rights.contact}</p>
              </section>

              {/* 10. Supervisory Authority */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.complaint.title}</h2>
                <p>{t.privacy.complaint.description}</p>
              </section>

              {/* 11. Automated Decision-Making */}
              {t.privacy.automatedDecisions && (
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{t.privacy.automatedDecisions.title}</h2>
                  <p>{t.privacy.automatedDecisions.description}</p>
                </section>
              )}

              {/* 12. Obligation to Provide Data */}
              {t.privacy.obligation && (
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{t.privacy.obligation.title}</h2>
                  <p>{t.privacy.obligation.description}</p>
                </section>
              )}

              {/* 13. Changes */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.updates.title}</h2>
                <p>{t.privacy.updates.description}</p>
              </section>

              {/* Third-party services (social links) */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.thirdPartyServices.title}</h2>
                <p>{t.privacy.thirdPartyServices.description}</p>
                <p className="mt-2">{t.privacy.thirdPartyServices.providers}</p>
                <ul className="list-disc list-inside">
                  {t.privacy.thirdPartyServices.providersList.map((provider: string, idx: number) => (
                    <li key={idx}>{provider}</li>
                  ))}
                </ul>
              </section>

              {/* Terms link */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.terms.title}</h2>
                <p>
                  {t.privacy.terms.description}{' '}
                  <a
                    href={language === 'de' ? '/agb' : '/terms'}
                    className="text-primary hover:text-primary/80 underline"
                    rel="noopener noreferrer"
                  >
                    {t.privacy.terms.link}
                  </a>.
                </p>
              </section>

              {/* 14. Severability */}
              {t.privacy.severability && (
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{t.privacy.severability.title}</h2>
                  <p>{t.privacy.severability.description}</p>
                </section>
              )}

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  {language === 'de' ? 'Zuletzt aktualisiert:' : 'Last updated:'} {language === 'de' ? 'März 2026' : 'March 2026'}
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

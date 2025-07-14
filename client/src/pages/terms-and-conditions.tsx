import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";

export default function TermsConditions() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-soft border border-border p-8 sm:p-12">
            <h1 className="text-4xl font-bold text-foreground mb-8 text-gradient">
              {t.terms.title}
            </h1>
            <div className="prose prose-lg max-w-none text-foreground">
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.general.title}
                </h2>
                <p className="mb-4">{t.terms.general.paragraph1}</p>
                <p className="mb-4">{t.terms.general.paragraph2}</p>
                <p>{t.terms.general.paragraph3}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.services.title}
                </h2>
                <p className="mb-4">{t.terms.services.paragraph1}</p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>{t.terms.services.list.item1}</li>
                  <li>{t.terms.services.list.item2}</li>
                  <li>{t.terms.services.list.item3}</li>
                  <li>{t.terms.services.list.item4}</li>
                  <li>{t.terms.services.list.item5}</li>
                  <li>{t.terms.services.list.item6}</li>
                  <li>{t.terms.services.list.item7}</li>
                  <li>{t.terms.services.list.item8}</li>
                </ul>
                <p>{t.terms.services.paragraph2}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.contractConclusion.title}
                </h2>
                <p className="mb-4">{t.terms.contractConclusion.paragraph1}</p>
                <p className="mb-4">{t.terms.contractConclusion.paragraph2}</p>
                <p>{t.terms.contractConclusion.paragraph3}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.prices.title}
                </h2>
                <p className="mb-4">{t.terms.prices.paragraph1}</p>
                <p className="mb-4">{t.terms.prices.paragraph2}</p>
                <p>{t.terms.prices.paragraph3}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.paymentTerms.title}
                </h2>
                <p className="mb-4">{t.terms.paymentTerms.paragraph1}</p>
                <p className="mb-4">{t.terms.paymentTerms.paragraph2}</p>
                <p>{t.terms.paymentTerms.paragraph3}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.performance.title}
                </h2>
                <p className="mb-4">{t.terms.performance.paragraph1}</p>
                <p className="mb-4">{t.terms.performance.paragraph2}</p>
                <p>{t.terms.performance.paragraph3}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.contentCreation.title}
                </h2>
                <p className="mb-4">{t.terms.contentCreation.paragraph1}</p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>{t.terms.contentCreation.list.item1}</li>
                  <li>{t.terms.contentCreation.list.item2}</li>
                  <li>{t.terms.contentCreation.list.item3}</li>
                  <li>{t.terms.contentCreation.list.item4}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.intellectualProperty.title}
                </h2>
                <p className="mb-4">{t.terms.intellectualProperty.paragraph1}</p>
                <p className="mb-4">{t.terms.intellectualProperty.paragraph2}</p>
                <p>{t.terms.intellectualProperty.paragraph3}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.liability.title}
                </h2>
                <p className="mb-4">{t.terms.liability.paragraph1}</p>
                <p className="mb-4">{t.terms.liability.paragraph2}</p>
                <p className="mb-4">{t.terms.liability.paragraph3}</p>
                <p>{t.terms.liability.paragraph4}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.websiteUsage.title}
                </h2>
                <p className="mb-4">{t.terms.websiteUsage.paragraph1}</p>
                <p className="mb-4">{t.terms.websiteUsage.paragraph2}</p>
                <p>{t.terms.websiteUsage.paragraph3}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.blogContent.title}
                </h2>
                <p className="mb-4">{t.terms.blogContent.paragraph1}</p>
                <p>{t.terms.blogContent.paragraph2}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.newsletter.title}
                </h2>
                <p className="mb-4">{t.terms.newsletter.paragraph1}</p>
                <p>{t.terms.newsletter.paragraph2}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.dataProtection.title}
                </h2>
                <p>
                  {t.terms.dataProtection.paragraph1}
                  <a
                    href={language === 'de' ? '/datenschutz' : '/privacy'}
                    className="text-primary hover:text-primary/80 underline"
                    rel="noopener noreferrer"
                  >
                    {t.terms.dataProtection.privacyPolicyLink}
                  </a>
                  {t.terms.dataProtection.paragraph2}
                </p>
              </section>

              <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t.terms.imprint.title}
                  </h2>
                  <p>
                    {t.terms.imprint.paragraph1}
                    <a
                      href={language === 'de' ? '/impressum' : '/imprint'}
                      className="text-primary hover:text-primary/80 underline"
                      rel="noopener noreferrer"
                    >
                      {t.terms.imprint.imprintLink}
                    </a>
                    {t.terms.imprint.paragraph2}
                  </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.termination.title}
                </h2>
                <p className="mb-4">{t.terms.termination.paragraph1}</p>
                <p>{t.terms.termination.paragraph2}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.applicableLaw.title}
                </h2>
                <p className="mb-4">{t.terms.applicableLaw.paragraph1}</p>
                <p>{t.terms.applicableLaw.paragraph2}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.severability.title}
                </h2>
                <p>{t.terms.severability.paragraph1}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.terms.changes.title}
                </h2>
                <p className="mb-4">{t.terms.changes.paragraph1}</p>
                <p>{t.terms.changes.paragraph2}</p>
              </section>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  {t.terms.lastUpdated} {new Date().toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', { 
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
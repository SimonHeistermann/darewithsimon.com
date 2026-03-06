import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";

export default function LegalNotice() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-soft border border-border p-8 sm:p-12">
            <h1 className="text-4xl font-bold text-foreground mb-8 text-gradient">
              {t.legal.title}
            </h1>
            <div className="prose prose-lg max-w-none text-foreground">

              <section className="mb-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
                <h2 className="text-2xl font-semibold text-amber-800 mb-4">
                  {t.legal.trainingProject.title}
                </h2>
                <p className="text-amber-900">
                  {t.legal.trainingProject.description}
                </p>
                <p className="mt-2 text-amber-900">
                  {t.legal.trainingProject.contact}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.legal.provider.title}
                </h2>
                <div className="space-y-1">
                  <p className="font-medium">{t.legal.provider.name}</p>
                  <p>{t.legal.provider.address}</p>
                  <p>{t.legal.provider.city}</p>
                  <p>{t.legal.provider.country}</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.legal.contact.title}
                </h2>
                <div className="space-y-2">
                  <p>
                    <strong>{t.legal.contact.email}</strong>{' '}
                    <a
                      href="mailto:simon@heistermann-solutions.de"
                      className="text-primary hover:text-primary/80 underline"
                      rel="noopener noreferrer"
                    >
                      simon@heistermann-solutions.de
                    </a>
                  </p>
                  <p>
                    {t.legal.contact.privacyNote}
                    <a
                      href={language === 'de' ? '/datenschutz' : '/privacy'}
                      className="text-primary hover:text-primary/80 underline"
                      rel="noopener noreferrer"
                    >
                      {t.legal.contact.privacyPolicy}
                    </a>.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.legal.terms.title}
                </h2>
                <p>
                  {t.legal.terms.description}{' '}
                  <a
                    href={language === 'de' ? '/agb' : '/terms'}
                    className="text-primary hover:text-primary/80 underline"
                    rel="noopener noreferrer"
                  >
                    {t.legal.terms.link}
                  </a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.legal.vatId.title}
                </h2>
                <p>
                  {t.legal.vatId.description}<br />
                  <strong>{t.legal.vatId.number}</strong>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.legal.editorialResponsibility.title}
                </h2>
                <p>
                  {t.legal.editorialResponsibility.description}<br />
                  {t.legal.provider.name}<br />
                  {t.legal.editorialResponsibility.address}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.legal.euDispute.title}
                </h2>
                <p>
                  {t.legal.euDispute.description}
                  <a
                    href={t.legal.euDispute.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline ml-1"
                  >
                    {t.legal.euDispute.link}
                  </a>
                </p>
                <p className="mt-2">
                  {t.legal.euDispute.email}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.legal.contentLiability.title}
                </h2>
                <p>
                  {t.legal.contentLiability.paragraph1}
                </p>
                <p className="mt-4">
                  {t.legal.contentLiability.paragraph2}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.legal.linkLiability.title}
                </h2>
                <p>
                  {t.legal.linkLiability.paragraph1}
                </p>
                <p className="mt-4">
                  {t.legal.linkLiability.paragraph2}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {t.legal.copyright.title}
                </h2>
                <p>
                  {t.legal.copyright.paragraph1}
                </p>
                <p className="mt-4">
                  {t.legal.copyright.paragraph2}
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  {t.legal.lastUpdated} {language === 'de' ? 'März 2026' : 'March 2026'}
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

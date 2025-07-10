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
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.overview.title}</h2>
                <p>{t.privacy.overview.description}</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.responsible.title}</h2>
                <p>{t.privacy.responsible.description}</p>
                <p>
                    {t.privacy.responsible.contact}<br/>
                    {t.privacy.responsible.company}<br/>
                    {t.privacy.responsible.address}<br/>
                    {t.privacy.responsible.city}<br/>
                    {t.privacy.responsible.country}
                </p>
                <p>
                  <strong>{t.privacy.responsible.email}</strong>{" "}
                  <a
                    href="mailto:buisness@darewithsimon.com"
                    className="text-primary hover:text-primary/80 underline"
                    rel="noopener noreferrer"
                  >
                    buisness@darewithsimon.com
                  </a>
                </p>
                <p>
                  {t.privacy.responsible.imprintLink}
                  <a
                    href={language === "de" ? "/impressum" : "/legal-notice"}
                    className="text-primary hover:text-primary/80 underline"
                    rel="noopener noreferrer"
                  >
                    {t.privacy.responsible.imprint}
                  </a>.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.dataCollection.title}</h2>
                <p>{t.privacy.dataCollection.description}</p>
                <ul className="list-disc list-inside">
                  {t.privacy.dataCollection.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.purpose.title}</h2>
                <p>{t.privacy.purpose.description}</p>
                <ul className="list-disc list-inside">
                  {t.privacy.purpose.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.legalBasis.title}</h2>
                <p>{t.privacy.legalBasis.description}</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.thirdParties.title}</h2>
                <p>{t.privacy.thirdParties.description}</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.newsletter.title}</h2>
                <p>{t.privacy.newsletter.description}</p>
                <p>{t.privacy.newsletter.unsubscribe}</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.contactForm.title}</h2>
                <p>{t.privacy.contactForm.description}</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.thirdPartyServices.title}</h2>
                <p>{t.privacy.thirdPartyServices.description}</p>
                <p>{t.privacy.thirdPartyServices.providers}</p>
                <ul className="list-disc list-inside">
                  {t.privacy.thirdPartyServices.providersList.map((provider, idx) => (
                    <li key={idx}>{provider}</li>
                  ))}
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.cookies.title}</h2>
                <p>{t.privacy.cookies.description}</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.rights.title}</h2>
                <ul className="list-disc list-inside">
                  {t.privacy.rights.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t.privacy.rights.contact}</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.complaint.title}</h2>
                <p>{t.privacy.complaint.description}</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t.privacy.updates.title}</h2>
                <p>
                  {t.privacy.updates.description}{" "}
                  {new Date().toLocaleDateString(language === "de" ? "de-DE" : "en-US", {
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

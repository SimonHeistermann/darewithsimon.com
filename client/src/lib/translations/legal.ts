// Legal translations (Privacy Policy, Terms, Legal Notice)
export const legalTranslations = {
    en: {
      privacy: {
        title: "Privacy Policy",
        contents: {
          title: "Contents",
          items: [
            "Controller",
            "Data Protection Officer",
            "Data We Collect",
            "Purposes and Legal Basis",
            "Third-Party Processors",
            "International Data Transfers",
            "Cookies and Similar Technologies",
            "Retention Periods",
            "Your Rights",
            "Supervisory Authority",
            "Automated Decision-Making",
            "Obligation to Provide Data",
            "Changes to This Policy",
            "Severability"
          ]
        },
        overview: {
          title: "1. Controller",
          description: "The controller responsible for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is:"
        },
        responsible: {
          title: "1. Controller",
          description: "The controller responsible for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is:",
          contact: "Simon Maximilian Heistermann",
          company: "",
          address: "Mutter-Teresa-Weg 6",
          city: "46325 Borken",
          country: "Germany",
          email: "Email:",
          imprintLink: "More information can be found in the ",
          imprint: "Legal Notice"
        },
        dpo: {
          title: "2. Data Protection Officer",
          description: "We are not legally required to appoint a data protection officer pursuant to § 38 of the German Federal Data Protection Act (BDSG). For any data protection inquiries, please contact us directly at simon@heistermann-solutions.de."
        },
        dataCollection: {
          title: "3. Data We Collect",
          description: "We process personal data that you provide to us or that is automatically collected when you use our website.",
          subsections: {
            contactForm: {
              title: "3.1 Contact Form Data",
              description: "When you submit a contact form, we collect the following information:",
              items: [
                "Full name and email address",
                "Subject of inquiry (Project, Collaboration, Question, Other)",
                "Your message",
                "Consent confirmation (privacy policy and terms acceptance)"
              ]
            },
            newsletter: {
              title: "3.2 Newsletter Registration",
              description: "When you sign up for the newsletter, we collect:",
              items: [
                "Email address",
                "Consent confirmation",
                "Language preference"
              ]
            },
            technical: {
              title: "3.3 Technical Data",
              description: "When you visit our website, the following data is automatically collected by our hosting provider:",
              items: [
                "IP address",
                "Browser type and version",
                "Operating system",
                "Date, time, and duration of access",
                "Referring URL",
                "Pages visited"
              ]
            }
          }
        },
        purpose: {
          title: "4. Purposes and Legal Basis",
          description: "We process your personal data for the following purposes and on the following legal bases:",
          items: [
            "Contact form processing — Art. 6(1)(b) GDPR (pre-contractual measures at your request)",
            "Newsletter delivery — Art. 6(1)(a) GDPR (your consent via double opt-in)",
            "Email notifications — Art. 6(1)(f) GDPR (legitimate interest in effective communication)",
            "Website hosting & security — Art. 6(1)(f) GDPR (legitimate interest in operating a secure website)"
          ]
        },
        legalBasis: {
          title: "4. Purposes and Legal Basis",
          description: "We process your personal data for the following purposes and on the following legal bases:"
        },
        thirdParties: {
          title: "5. Third-Party Processors",
          description: "We use the following third-party service providers to operate our website. Each processor has entered into a Data Processing Agreement (DPA) with us in accordance with Art. 28 GDPR."
        },
        thirdPartyProcessors: {
          items: [
            {
              name: "Render Services, Inc.",
              location: "San Francisco, California, USA",
              purpose: "Backend hosting and API server.",
              data: "Technical access data (IP address, request logs), contact form data in transit."
            },
            {
              name: "Brevo (Sendinblue)",
              location: "Paris, France / Berlin, Germany",
              purpose: "Newsletter management and email marketing with double opt-in confirmation.",
              data: "Email address, language preference, subscription status."
            },
            {
              name: "KAS Server (All-Inkl)",
              location: "Germany",
              purpose: "SMTP email delivery for contact form notifications.",
              data: "Email content, sender/recipient addresses, delivery metadata."
            }
          ]
        },
        newsletter: {
          title: "7. Newsletter",
          description: "If you sign up for the newsletter, we use your email address to send you regular information. Registration is done using the double opt-in process via Brevo.",
          unsubscribe: "You can unsubscribe at any time. Your data will then be deleted from our newsletter lists."
        },
        contactForm: {
          title: "8. Contact Form",
          description: "If you send inquiries via the contact form, your information (name, email, subject, message) will be transmitted to our backend server and forwarded via email. We do not store contact form submissions in a database — they are delivered as email notifications only."
        },
        internationalTransfers: {
          title: "6. International Data Transfers",
          description: "Our backend hosting provider Render is based in the United States. Data transfers to the US are conducted on the following legal bases:",
          items: [
            "Standard Contractual Clauses (SCCs) pursuant to Art. 46(2)(c) GDPR.",
            "Brevo processes data primarily within the EU (France/Germany). No routine international transfer occurs for newsletter data.",
            "KAS Server (All-Inkl) is based in Germany. No international data transfer occurs for email delivery."
          ]
        },
        thirdPartyServices: {
          title: "9. Integration of Third-Party Services and Content",
          description: "This website may include third-party content (e.g. embedded social media links). External links are provided for convenience; clicking them takes you to third-party websites governed by their own privacy policies.",
          providers: "Social media profiles linked from this website:",
          providersList: [
            "LinkedIn (LinkedIn Ireland Unlimited Company)",
            "Instagram (Meta Platforms Ireland Ltd.)"
          ]
        },
        cookies: {
          title: "7. Cookies and Similar Technologies",
          description: "This website does not use cookies. No cookie consent banner is required or displayed. We use your browser's localStorage to store your language preference (English/German) locally on your device. This data never leaves your browser and is not transmitted to our servers. You can clear it at any time through your browser settings."
        },
        retention: {
          title: "8. Retention Periods",
          description: "We retain your personal data only as long as necessary for the purposes for which it was collected:",
          items: [
            "Contact form submissions — delivered via email only, not stored in a database; email retention per provider policy",
            "Newsletter subscription data — until you unsubscribe, then deleted from Brevo",
            "Server/access logs (Render) — per hosting provider policy (typically 30 days)",
            "localStorage data — until you clear your browser data"
          ]
        },
        rights: {
          title: "9. Your Rights",
          items: [
            "Right of access (Art. 15 GDPR) — You may request confirmation of whether we process your personal data and, if so, obtain a copy of that data.",
            "Right to rectification (Art. 16 GDPR) — You may request correction of inaccurate or incomplete data.",
            "Right to erasure (Art. 17 GDPR) — You may request deletion of your data, subject to legal retention obligations.",
            "Right to restriction (Art. 18 GDPR) — You may request restriction of processing in certain circumstances.",
            "Right to data portability (Art. 20 GDPR) — You may request your data in a structured, commonly used, machine-readable format.",
            "Right to object (Art. 21 GDPR) — You may object to processing based on legitimate interests at any time, for reasons related to your particular situation.",
            "Right to withdraw consent (Art. 7(3) GDPR) — Where processing is based on your consent, you may withdraw consent at any time without affecting the lawfulness of processing carried out before withdrawal."
          ],
          contact: "To exercise any of these rights, please contact us at simon@heistermann-solutions.de. We will respond within one month of receiving your request."
        },
        complaint: {
          title: "10. Supervisory Authority",
          description: "You have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). The competent supervisory authority is: Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Postfach 20 04 44, 40102 Düsseldorf, Germany. Website: www.ldi.nrw.de"
        },
        automatedDecisions: {
          title: "11. Automated Decision-Making",
          description: "We do not use fully automated decision-making, including profiling, within the meaning of Art. 22 GDPR."
        },
        obligation: {
          title: "12. Obligation to Provide Data",
          description: "Contact form: Providing your name, email address, and message is necessary for us to respond to your inquiry. If you do not provide this data, we cannot process your request. Newsletter: Providing your email address is necessary to receive the newsletter."
        },
        terms: {
          title: "Terms and Conditions",
          description: "For more information about our terms and conditions and usage terms, please see our",
          link: "Terms and Conditions"
        },
        updates: {
          title: "13. Changes to This Policy",
          description: "We may update this privacy policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. The \"Last updated\" date below reflects the most recent revision."
        },
        severability: {
          title: "14. Severability",
          description: "Should any provision of this privacy policy be held invalid or unenforceable, the remaining provisions shall remain in full force and effect."
        }
      },
      legal: {
        title: "Legal Notice",
        trainingProject: {
          title: "Training Project Disclaimer",
          description: "This website is an independent training/portfolio project. It is NOT a real business, service, or commercial offering. No real transactions, services, or orders are processed through this website. The contact form and newsletter features were built for educational demonstration purposes. Any resemblance to a real commercial business is for demonstration purposes only.",
          contact: "For questions about this project: simon@heistermann-solutions.de"
        },
        provider: {
          title: "Information pursuant to § 5 DDG",
          name: "Simon Maximilian Heistermann",
          company: "",
          role: "",
          address: "Mutter-Teresa-Weg 6",
          city: "46325 Borken",
          country: "Germany"
        },
        contact: {
          title: "Contact",
          email: "Email:",
          privacyNote: "Notes on data protection can be found in our ",
          privacyPolicy: "Privacy Policy"
        },
        terms: {
          title: "Terms and Conditions",
          description: "For more information about our terms and conditions, please see our",
          link: "Terms and Conditions"
        },
        vatId: {
          title: "VAT ID",
          description: "VAT identification number according to § 27a of the German Value Added Tax Act:",
          number: "DE454100405"
        },
        editorialResponsibility: {
          title: "Responsible for Content",
          description: "Responsible for content pursuant to § 18(2) MStV:",
          address: "Mutter-Teresa-Weg 6, 46325 Borken, Germany"
        },
        euDispute: {
          title: "EU Online Dispute Resolution",
          description: "The European Commission provides a platform for online dispute resolution (ODR):",
          link: "https://ec.europa.eu/consumers/odr/",
          email: "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board."
        },
        consumerDispute: {
          title: "Liability for Links",
          description: "Our website contains links to external websites of third parties, over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always responsible for the content of the linked pages."
        },
        contentLiability: {
          title: "Liability for Content",
          paragraph1: "As a service provider, we are responsible for our own content on these pages in accordance with § 7(1) DDG and general laws. According to §§ 8 to 10 DDG, however, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
          paragraph2: "Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of corresponding legal violations, we will remove this content immediately."
        },
        linkLiability: {
          title: "Liability for Links",
          paragraph1: "Our website contains links to external websites of third parties, over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always responsible for the content of the linked pages.",
          paragraph2: "A permanent content review of the linked pages is not reasonable without concrete evidence of a legal violation. If we become aware of legal violations, we will remove such links immediately."
        },
        copyright: {
          title: "Copyright",
          paragraph1: "The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator.",
          paragraph2: "Insofar as the content on this page was not created by the operator, the copyrights of third parties are respected. Should you nevertheless become aware of a copyright infringement, we kindly ask for a corresponding notice. Upon becoming aware of legal violations, we will remove such content immediately."
        },
        lastUpdated: "Last updated:"
      },
      terms: {
        title: "Terms and Conditions",
        general: {
          title: "1. Scope of Application",
          paragraph1: "These General Terms and Conditions (GTC) apply to all business relationships between Simon Maximilian Heistermann (hereinafter 'Contractor') and his clients or users (hereinafter 'Client' or 'User').",
          paragraph2: "These GTC apply exclusively. Deviating, conflicting or supplementary GTC of the Client do not become part of the contract unless their validity is expressly agreed to in writing.",
          paragraph3: "These GTC also apply to all future business between the parties, even if they are not expressly agreed upon again."
        },
        services: {
          title: "2. Services",
          paragraph1: "The Contractor provides services in the following areas:",
          list: {
            item1: "Software development and programming",
            item2: "Frontend and backend development",
            item3: "Web development and design",
            item4: "Consulting and technical support",
            item5: "Content creation and social media services",
            item6: "Collaborations and partnerships",
            item7: "Speaking engagements and presentations",
            item8: "Workshops and training"
          },
          paragraph2: "The specific scope of services is defined in separate contracts or project agreements. All services are provided to the best of knowledge and belief, but without warranty for specific results.",
          portfolioDisclaimer: "Note: This website is a portfolio demo. No real services can be booked or ordered through this site. For real services and bookings, please visit:",
          portfolioDisclaimerLink: "heistermann-solutions.de"
        },
        contractConclusion: {
          title: "3. Contract Conclusion",
          paragraph1: "Inquiries via the contact form, by email or through other communication channels do not constitute a binding offer and do not establish any right to processing or response.",
          paragraph2: "A contract is only concluded through written confirmation by the Contractor or by commencement of service provision.",
          paragraph3: "Prices and services in offers are subject to change unless expressly designated as binding."
        },
        prices: {
          title: "4. Prices and Costs",
          paragraph1: "All prices are exclusive of statutory value-added tax.",
          paragraph2: "For projects, an hourly rate or flat fee is agreed upon. Additional services are charged separately.",
          paragraph3: "Price changes are possible for long-term projects with 4 weeks' notice."
        },
        paymentTerms: {
          title: "5. Payment Terms",
          paragraph1: "Invoices are payable within 14 days of invoice date without deduction.",
          paragraph2: "In case of late payment, default interest of 9% above the base rate will be charged.",
          paragraph3: "The Contractor is entitled to demand advance payments or partial payments."
        },
        performance: {
          title: "6. Service Provision",
          paragraph1: "The Contractor provides services to the best of his knowledge and belief and according to the current state of technology.",
          paragraph2: "Deadlines are only binding if they have been confirmed in writing as binding.",
          paragraph3: "The Client shall bear the additional costs arising from change requests."
        },
        contentCreation: {
          title: "7. Content Creation and Social Media Services",
          paragraph1: "For collaborations, partnerships or content creation projects, the following special conditions apply:",
          list: {
            item1: "All content is created at own discretion and in accordance with the community guidelines of the respective platforms",
            item2: "Reach, engagement or specific reactions cannot be guaranteed",
            item3: "Changes to already published content are only possible to a limited extent",
            item4: "The Contractor reserves the right to decline collaboration requests without giving reasons"
          }
        },
        intellectualProperty: {
          title: "8. Copyright and Usage Rights",
          paragraph1: "All copyrights to the created works remain with the Contractor unless otherwise agreed.",
          paragraph2: "The Client receives the usage rights necessary for the agreed purpose.",
          paragraph3: "Transfer of usage rights to third parties requires written consent from the Contractor."
        },
        liability: {
          title: "9. Liability",
          paragraph1: "The Contractor is liable without limitation for damages arising from injury to life, body or health and for intentional or grossly negligent breaches of duty.",
          paragraph2: "For other damages, the Contractor is only liable for breach of essential contractual obligations and limited to foreseeable, contract-typical damage.",
          paragraph3: "Liability for data loss is limited to typical recovery costs.",
          paragraph4: "Any liability for indirect damages, lost profits or consequential damages is excluded to the extent legally permissible."
        },
        websiteUsage: {
          title: "10. Website Usage",
          paragraph1: "The website may only be used for permitted purposes. Any abusive use is prohibited.",
          paragraph2: "The user is obligated not to transmit or distribute harmful content.",
          paragraph3: "The Contractor reserves the right to block access to the website in case of abuse."
        },
        blogContent: {
          title: "11. Blog and Content",
          paragraph1: "Blog posts and other content on the website represent the personal opinion of the Contractor and are not to be understood as legal or professional advice.",
          paragraph2: "External links are provided without warranty. No liability is assumed for the content of linked pages."
        },
        newsletter: {
          title: "12. Newsletter",
          paragraph1: "Newsletter registration is voluntary through a double opt-in procedure. Users can unsubscribe at any time.",
          paragraph2: "Newsletter dispatch is subject to the provisions of the privacy policy."
        },
        dataProtection: {
          title: "13. Data Protection",
          paragraph1: "The protection of personal data is important to us. For details, please refer to our ",
          privacyPolicyLink: "Privacy Policy",
          paragraph2: "."
        },
        imprint: {
          title: "14. Legal Notice",
          paragraph1: "Information about the responsible person and other legally required information can be found in our ",
          imprintLink: "Legal Notice",
          paragraph2: "."
        },
        termination: {
          title: "15. Termination",
          paragraph1: "Contracts may be terminated by either party with 4 weeks' notice to the end of the month, unless otherwise agreed.",
          paragraph2: "The right to extraordinary termination for good cause remains unaffected."
        },
        applicableLaw: {
          title: "16. Applicable Law and Jurisdiction",
          paragraph1: "The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods.",
          paragraph2: "The place of jurisdiction is Borken, provided the Client is a merchant, legal entity under public law, or special fund under public law."
        },
        severability: {
          title: "17. Severability Clause",
          paragraph1: "Should individual provisions of these GTC be invalid or unenforceable, the validity of the remaining provisions shall not be affected."
        },
        changes: {
          title: "18. Changes to the GTC",
          paragraph1: "The Contractor reserves the right to change these GTC at any time.",
          paragraph2: "Changes will be communicated to clients in good time and are considered approved if no objection is raised within 4 weeks."
        },
        lastUpdated: "Last updated:"
      }
    },
    de: {
        legal: {
            title: "Impressum",
            trainingProject: {
              title: "Hinweis: Übungsprojekt",
              description: "Diese Website ist ein unabhängiges Übungs-/Portfolioprojekt. Es handelt sich NICHT um ein reales Unternehmen, eine reale Dienstleistung oder ein kommerzielles Angebot. Über diese Website werden keine echten Transaktionen, Dienstleistungen oder Bestellungen abgewickelt. Das Kontaktformular und die Newsletter-Funktionen wurden zu Bildungs- und Demonstrationszwecken entwickelt. Jede Ähnlichkeit mit einem realen kommerziellen Unternehmen dient ausschließlich Demonstrationszwecken.",
              contact: "Bei Fragen zu diesem Projekt: simon@heistermann-solutions.de"
            },
            provider: {
              title: "Angaben gemäß § 5 DDG",
              name: "Simon Maximilian Heistermann",
              company: "",
              role: "",
              address: "Mutter-Teresa-Weg 6",
              city: "46325 Borken",
              country: "Deutschland"
            },
            contact: {
              title: "Kontakt",
              email: "E-Mail:",
              privacyNote: "Hinweise zum Datenschutz finden Sie in unserer ",
              privacyPolicy: "Datenschutzerklärung"
            },
            terms: {
              title: "Allgemeine Geschäftsbedingungen",
              description: "Weitere Informationen zu unseren Geschäftsbedingungen finden Sie in unseren",
              link: "AGBs"
            },
            vatId: {
              title: "Umsatzsteuer-ID",
              description: "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:",
              number: "DE454100405"
            },
            editorialResponsibility: {
              title: "Verantwortlich für den Inhalt",
              description: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:",
              address: "Mutter-Teresa-Weg 6, 46325 Borken, Deutschland"
            },
            euDispute: {
              title: "EU-Streitschlichtung",
              description: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
              link: "https://ec.europa.eu/consumers/odr/",
              email: "Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
            },
            consumerDispute: {
              title: "Haftung für Links",
              description: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich."
            },
            contentLiability: {
              title: "Haftung für Inhalte",
              paragraph1: "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
              paragraph2: "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."
            },
            linkLiability: {
              title: "Haftung für Links",
              paragraph1: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
              paragraph2: "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."
            },
            copyright: {
              title: "Urheberrecht",
              paragraph1: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
              paragraph2: "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."
            },
            lastUpdated: "Stand:"
        },
        privacy: {
            title: "Datenschutzerklärung",
            contents: {
              title: "Inhaltsverzeichnis",
              items: [
                "Verantwortlicher",
                "Datenschutzbeauftragter",
                "Welche Daten wir erheben",
                "Zwecke und Rechtsgrundlage",
                "Drittanbieter / Auftragsverarbeiter",
                "Internationale Datenübermittlungen",
                "Cookies und ähnliche Technologien",
                "Speicherdauer",
                "Ihre Rechte",
                "Aufsichtsbehörde",
                "Automatisierte Entscheidungsfindung",
                "Pflicht zur Bereitstellung von Daten",
                "Änderungen dieser Datenschutzerklärung",
                "Salvatorische Klausel"
              ]
            },
            overview: {
              title: "1. Verantwortlicher",
              description: "Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:"
            },
            responsible: {
              title: "1. Verantwortlicher",
              description: "Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
              contact: "Simon Maximilian Heistermann",
              company: "",
              address: "Mutter-Teresa-Weg 6",
              city: "46325 Borken",
              country: "Deutschland",
              email: "E-Mail:",
              imprintLink: "Weitere Informationen finden Sie im ",
              imprint: "Impressum"
            },
            dpo: {
              title: "2. Datenschutzbeauftragter",
              description: "Wir sind gemäß § 38 BDSG nicht zur Bestellung eines Datenschutzbeauftragten verpflichtet. Bei Fragen zum Datenschutz kontaktieren Sie uns bitte direkt unter simon@heistermann-solutions.de."
            },
            dataCollection: {
              title: "3. Welche Daten wir erheben",
              description: "Wir verarbeiten personenbezogene Daten, die Sie uns zur Verfügung stellen oder die beim Besuch unserer Website automatisch erhoben werden.",
              subsections: {
                contactForm: {
                  title: "3.1 Kontaktformular-Daten",
                  description: "Wenn Sie das Kontaktformular nutzen, erheben wir folgende Daten:",
                  items: [
                    "Vollständiger Name und E-Mail-Adresse",
                    "Betreff der Anfrage (Projekt, Zusammenarbeit, Frage, Sonstiges)",
                    "Ihre Nachricht",
                    "Einwilligungsbestätigung (Datenschutzerklärung und AGB)"
                  ]
                },
                newsletter: {
                  title: "3.2 Newsletter-Anmeldung",
                  description: "Bei der Newsletter-Anmeldung erheben wir:",
                  items: [
                    "E-Mail-Adresse",
                    "Einwilligungsbestätigung",
                    "Sprachpräferenz"
                  ]
                },
                technical: {
                  title: "3.3 Technische Daten",
                  description: "Beim Besuch unserer Website werden folgende Daten automatisch durch unseren Hosting-Anbieter erhoben:",
                  items: [
                    "IP-Adresse",
                    "Browsertyp und -version",
                    "Betriebssystem",
                    "Datum, Uhrzeit und Dauer des Zugriffs",
                    "Verweisende URL",
                    "Besuchte Seiten"
                  ]
                }
              }
            },
            purpose: {
              title: "4. Zwecke und Rechtsgrundlage",
              description: "Wir verarbeiten Ihre personenbezogenen Daten zu folgenden Zwecken und auf folgenden Rechtsgrundlagen:",
              items: [
                "Kontaktformular-Bearbeitung — Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen auf Ihre Anfrage)",
                "Newsletter-Versand — Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung via Double-Opt-In)",
                "E-Mail-Benachrichtigungen — Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effektiver Kommunikation)",
                "Website-Hosting & Sicherheit — Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb einer sicheren Website)"
              ]
            },
            legalBasis: {
              title: "4. Zwecke und Rechtsgrundlage",
              description: "Wir verarbeiten Ihre personenbezogenen Daten zu folgenden Zwecken und auf folgenden Rechtsgrundlagen:"
            },
            thirdParties: {
              title: "5. Drittanbieter / Auftragsverarbeiter",
              description: "Wir nutzen folgende Drittanbieter für den Betrieb unserer Website. Jeder Auftragsverarbeiter hat mit uns einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO geschlossen."
            },
            thirdPartyProcessors: {
              items: [
                {
                  name: "Render Services, Inc.",
                  location: "San Francisco, Kalifornien, USA",
                  purpose: "Backend-Hosting und API-Server.",
                  data: "Technische Zugriffsdaten (IP-Adresse, Anfrage-Logs), Kontaktformulardaten im Transit."
                },
                {
                  name: "Brevo (Sendinblue)",
                  location: "Paris, Frankreich / Berlin, Deutschland",
                  purpose: "Newsletter-Management und E-Mail-Marketing mit Double-Opt-In-Bestätigung.",
                  data: "E-Mail-Adresse, Sprachpräferenz, Abonnementstatus."
                },
                {
                  name: "KAS Server (All-Inkl)",
                  location: "Deutschland",
                  purpose: "SMTP-E-Mail-Zustellung für Kontaktformular-Benachrichtigungen.",
                  data: "E-Mail-Inhalt, Absender-/Empfängeradressen, Zustellungs-Metadaten."
                }
              ]
            },
            newsletter: {
              title: "7. Newsletter",
              description: "Wenn Sie sich für den Newsletter anmelden, verwenden wir Ihre E-Mail-Adresse, um Ihnen regelmäßig Informationen zu schicken. Die Anmeldung erfolgt im Double-Opt-In-Verfahren über Brevo.",
              unsubscribe: "Sie können sich jederzeit abmelden. Ihre Daten werden dann aus unseren Newsletter-Listen gelöscht."
            },
            contactForm: {
              title: "8. Kontaktformular",
              description: "Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben (Name, E-Mail, Betreff, Nachricht) an unseren Backend-Server übermittelt und per E-Mail weitergeleitet. Wir speichern Kontaktformular-Eingaben nicht in einer Datenbank — sie werden ausschließlich als E-Mail-Benachrichtigungen zugestellt."
            },
            internationalTransfers: {
              title: "6. Internationale Datenübermittlungen",
              description: "Unser Backend-Hosting-Anbieter Render hat seinen Sitz in den USA. Datenübermittlungen in die USA erfolgen auf folgender Rechtsgrundlage:",
              items: [
                "Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO.",
                "Brevo verarbeitet Daten primär innerhalb der EU (Frankreich/Deutschland). Für Newsletter-Daten findet keine routinemäßige internationale Übermittlung statt.",
                "KAS Server (All-Inkl) hat seinen Sitz in Deutschland. Für die E-Mail-Zustellung findet keine internationale Datenübermittlung statt."
              ]
            },
            thirdPartyServices: {
              title: "9. Einbindung von Diensten und Inhalten Dritter",
              description: "Diese Website kann Inhalte Dritter enthalten (z.B. eingebettete Social-Media-Links). Externe Links werden als Service bereitgestellt; ein Klick führt Sie zu Websites Dritter, die eigenen Datenschutzrichtlinien unterliegen.",
              providers: "Von dieser Website verlinkte Social-Media-Profile:",
              providersList: [
                "LinkedIn (LinkedIn Ireland Unlimited Company)",
                "Instagram (Meta Platforms Ireland Ltd.)"
              ]
            },
            cookies: {
              title: "7. Cookies und ähnliche Technologien",
              description: "Diese Website verwendet keine Cookies. Ein Cookie-Consent-Banner ist weder erforderlich noch wird eines angezeigt. Wir verwenden den localStorage Ihres Browsers, um Ihre Spracheinstellung (Englisch/Deutsch) lokal auf Ihrem Gerät zu speichern. Diese Daten verlassen Ihren Browser nicht und werden nicht an unsere Server übermittelt. Sie können sie jederzeit über Ihre Browser-Einstellungen löschen."
            },
            retention: {
              title: "8. Speicherdauer",
              description: "Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Zwecke, für die sie erhoben wurden, erforderlich ist:",
              items: [
                "Kontaktformular-Eingaben — werden nur per E-Mail zugestellt, nicht in einer Datenbank gespeichert; E-Mail-Aufbewahrung gemäß Anbieter-Richtlinie",
                "Newsletter-Abonnement-Daten — bis zur Abmeldung, dann Löschung bei Brevo",
                "Server-/Zugriffsprotokolle (Render) — gemäß Hosting-Anbieter-Richtlinie (typischerweise 30 Tage)",
                "localStorage-Daten — bis Sie Ihre Browser-Daten löschen"
              ]
            },
            rights: {
              title: "9. Ihre Rechte",
              items: [
                "Auskunftsrecht (Art. 15 DSGVO) — Sie können eine Bestätigung verlangen, ob wir Ihre personenbezogenen Daten verarbeiten, und gegebenenfalls eine Kopie dieser Daten erhalten.",
                "Recht auf Berichtigung (Art. 16 DSGVO) — Sie können die Korrektur unrichtiger oder unvollständiger Daten verlangen.",
                "Recht auf Löschung (Art. 17 DSGVO) — Sie können die Löschung Ihrer Daten verlangen, vorbehaltlich gesetzlicher Aufbewahrungspflichten.",
                "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO) — Sie können unter bestimmten Umständen die Einschränkung der Verarbeitung verlangen.",
                "Recht auf Datenübertragbarkeit (Art. 20 DSGVO) — Sie können Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format anfordern.",
                "Widerspruchsrecht (Art. 21 DSGVO) — Sie können der Verarbeitung auf Grundlage berechtigter Interessen jederzeit aus Gründen widersprechen, die sich aus Ihrer besonderen Situation ergeben.",
                "Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO) — Soweit die Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit widerrufen, ohne dass die Rechtmäßigkeit der vor dem Widerruf erfolgten Verarbeitung berührt wird."
              ],
              contact: "Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter simon@heistermann-solutions.de. Wir werden innerhalb eines Monats nach Erhalt Ihrer Anfrage antworten."
            },
            complaint: {
              title: "10. Aufsichtsbehörde",
              description: "Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (Art. 77 DSGVO). Die für uns zuständige Aufsichtsbehörde ist: Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Postfach 20 04 44, 40102 Düsseldorf, Deutschland. Website: www.ldi.nrw.de"
            },
            automatedDecisions: {
              title: "11. Automatisierte Entscheidungsfindung",
              description: "Wir verwenden keine vollautomatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO."
            },
            obligation: {
              title: "12. Pflicht zur Bereitstellung von Daten",
              description: "Kontaktformular: Die Angabe Ihres Namens, Ihrer E-Mail-Adresse und Ihrer Nachricht ist erforderlich, damit wir auf Ihre Anfrage antworten können. Ohne diese Angaben können wir Ihre Anfrage nicht bearbeiten. Newsletter: Die Angabe Ihrer E-Mail-Adresse ist für den Empfang des Newsletters erforderlich."
            },
            terms: {
              title: "Allgemeine Geschäftsbedingungen",
              description: "Weitere Informationen zu unseren Geschäftsbedingungen und Nutzungsbedingungen finden Sie in unseren",
              link: "AGBs"
            },
            updates: {
              title: "13. Änderungen dieser Datenschutzerklärung",
              description: "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen in unseren Praktiken oder aus rechtlichen, regulatorischen oder betrieblichen Gründen widerzuspiegeln. Das Datum \"Zuletzt aktualisiert\" unten gibt die jüngste Überarbeitung an."
            },
            severability: {
              title: "14. Salvatorische Klausel",
              description: "Sollte eine Bestimmung dieser Datenschutzerklärung unwirksam oder undurchführbar sein, bleiben die übrigen Bestimmungen in vollem Umfang wirksam."
            }
        },
        terms: {
            title: "Allgemeine Geschäftsbedingungen",
            general: {
              title: "1. Geltungsbereich",
              paragraph1: "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen Simon Maximilian Heistermann (nachfolgend 'Auftragnehmer') und seinen Auftraggebern oder Nutzern (nachfolgend 'Auftraggeber' oder 'Nutzer').",
              paragraph2: "Diese AGB gelten ausschließlich. Abweichende, entgegenstehende oder ergänzende AGB des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.",
              paragraph3: "Diese AGB gelten auch für alle künftigen Geschäfte zwischen den Parteien, auch wenn sie nicht nochmals ausdrücklich vereinbart werden."
            },
            services: {
              title: "2. Leistungen",
              paragraph1: "Der Auftragnehmer erbringt Dienstleistungen in folgenden Bereichen:",
              list: {
                item1: "Softwareentwicklung und Programmierung",
                item2: "Frontend- und Backend-Entwicklung",
                item3: "Webentwicklung und -design",
                item4: "Beratung und technische Unterstützung",
                item5: "Content Creation und Social Media Services",
                item6: "Kooperationen und Partnerschaften",
                item7: "Speaking-Engagements und Vorträge",
                item8: "Workshops und Schulungen"
              },
              paragraph2: "Der konkrete Leistungsumfang wird in separaten Verträgen oder Projektvereinbarungen festgelegt. Alle Leistungen werden nach bestem Wissen und Gewissen erbracht, jedoch ohne Gewähr auf bestimmte Ergebnisse.",
              portfolioDisclaimer: "Hinweis: Diese Website ist eine Portfolio-Demo. Über diese Seite können keine echten Dienstleistungen gebucht oder bestellt werden. Für echte Services und Buchungen besuche:",
              portfolioDisclaimerLink: "heistermann-solutions.de"
            },
            contractConclusion: {
              title: "3. Vertragsschluss",
              paragraph1: "Anfragen über das Kontaktformular, per E-Mail oder über andere Kommunikationswege stellen noch kein verbindliches Angebot dar und begründen keinen Anspruch auf Bearbeitung oder Antwort.",
              paragraph2: "Ein Vertrag kommt erst durch schriftliche Bestätigung des Auftragnehmers oder durch Beginn der Leistungserbringung zustande.",
              paragraph3: "Preise und Leistungen in Angeboten sind freibleibend, sofern nicht ausdrücklich als verbindlich bezeichnet."
            },
            prices: {
              title: "4. Preise und Kosten",
              paragraph1: "Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.",
              paragraph2: "Bei Projekten wird ein Stundensatz oder Pauschalpreis vereinbart. Zusätzliche Leistungen werden gesondert berechnet.",
              paragraph3: "Preisänderungen sind bei Langzeitprojekten mit einer Frist von 4 Wochen möglich."
            },
            paymentTerms: {
              title: "5. Zahlungsbedingungen",
              paragraph1: "Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zu begleichen.",
              paragraph2: "Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9% über dem Basiszinssatz berechnet.",
              paragraph3: "Der Auftragnehmer ist berechtigt, Vorschüsse oder Teilzahlungen zu verlangen."
            },
            performance: {
              title: "6. Leistungserbringung",
              paragraph1: "Der Auftragnehmer erbringt seine Leistungen nach bestem Wissen und Gewissen sowie nach dem aktuellen Stand der Technik.",
              paragraph2: "Termine sind nur dann verbindlich, wenn sie schriftlich als verbindlich bestätigt wurden.",
              paragraph3: "Der Auftraggeber hat bei Änderungswünschen die entstehenden Mehrkosten zu tragen."
            },
            contentCreation: {
              title: "7. Content Creation und Social Media Services",
              paragraph1: "Bei Kooperationen, Partnerschaften oder Content Creation-Projekten gelten folgende Besonderheiten:",
              list: {
                item1: "Alle Inhalte werden nach eigenem Ermessen und im Einklang mit den Community-Richtlinien der jeweiligen Plattformen erstellt",
                item2: "Reichweite, Engagement oder bestimmte Reaktionen können nicht garantiert werden",
                item3: "Änderungen an bereits veröffentlichten Inhalten sind nur eingeschränkt möglich",
                item4: "Der Auftragnehmer behält sich vor, Kooperationsanfragen ohne Angabe von Gründen abzulehnen"
              }
            },
            intellectualProperty: {
              title: "8. Urheberrecht und Nutzungsrechte",
              paragraph1: "Alle Urheberrechte an den erstellten Werken verbleiben beim Auftragnehmer, sofern nicht anders vereinbart.",
              paragraph2: "Der Auftraggeber erhält die für den vereinbarten Zweck erforderlichen Nutzungsrechte.",
              paragraph3: "Eine Übertragung der Nutzungsrechte an Dritte bedarf der schriftlichen Zustimmung des Auftragnehmers."
            },
            liability: {
              title: "9. Haftung",
              paragraph1: "Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für vorsätzliche oder grob fahrlässige Pflichtverletzungen.",
              paragraph2: "Für sonstige Schäden haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten und beschränkt auf den vorhersehbaren, vertragstypischen Schaden.",
              paragraph3: "Die Haftung für Datenverlust ist auf den typischen Wiederherstellungsaufwand beschränkt.",
              paragraph4: "Für mittelbare Schäden, entgangenen Gewinn oder Folgeschäden wird jede Haftung ausgeschlossen, soweit gesetzlich zulässig."
            },
            websiteUsage: {
              title: "10. Nutzung der Website",
              paragraph1: "Die Website darf nur für erlaubte Zwecke genutzt werden. Jede missbräuchliche Nutzung ist untersagt.",
              paragraph2: "Der Nutzer ist verpflichtet, keine schädlichen Inhalte zu übermitteln oder zu verbreiten.",
              paragraph3: "Der Auftragnehmer behält sich vor, den Zugang zur Website bei Missbrauch zu sperren."
            },
            blogContent: {
              title: "11. Blog und Inhalte",
              paragraph1: "Blogbeiträge und andere Inhalte auf der Website stellen die persönliche Meinung des Auftragnehmers dar und sind nicht als rechtliche oder fachliche Beratung zu verstehen.",
              paragraph2: "Externe Links werden ohne Gewähr zur Verfügung gestellt. Für die Inhalte verlinkter Seiten wird keine Haftung übernommen."
            },
            newsletter: {
              title: "12. Newsletter",
              paragraph1: "Die Anmeldung zum Newsletter erfolgt freiwillig über ein Double-Opt-in-Verfahren. Der Nutzer kann sich jederzeit wieder abmelden.",
              paragraph2: "Für den Newsletter-Versand gelten die Bestimmungen der Datenschutzerklärung."
            },
            dataProtection: {
              title: "13. Datenschutz",
              paragraph1: "Der Schutz personenbezogener Daten ist uns wichtig. Einzelheiten entnehmen Sie unserer ",
              privacyPolicyLink: "Datenschutzerklärung",
              paragraph2: "."
            },
            imprint: {
              title: "14. Impressum",
              paragraph1: "Angaben zur verantwortlichen Person und weitere gesetzlich vorgeschriebene Informationen finden Sie in unserem ",
              imprintLink: "Impressum",
              paragraph2: "."
            },
            termination: {
              title: "15. Kündigung",
              paragraph1: "Verträge können von beiden Parteien mit einer Frist von 4 Wochen zum Monatsende gekündigt werden, sofern nicht anders vereinbart.",
              paragraph2: "Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt."
            },
            applicableLaw: {
              title: "16. Anwendbares Recht und Gerichtsstand",
              paragraph1: "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.",
              paragraph2: "Gerichtsstand ist Borken, soweit der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist."
            },
            severability: {
              title: "17. Salvatorische Klausel",
              paragraph1: "Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein, so wird die Wirksamkeit der übrigen Bestimmungen davon nicht berührt."
            },
            changes: {
              title: "18. Änderungen der AGB",
              paragraph1: "Der Auftragnehmer behält sich vor, diese AGB jederzeit zu ändern.",
              paragraph2: "Änderungen werden den Kunden rechtzeitig mitgeteilt und gelten als genehmigt, wenn nicht binnen 4 Wochen widersprochen wird."
            },
            lastUpdated: "Stand:"
        }
    }
};

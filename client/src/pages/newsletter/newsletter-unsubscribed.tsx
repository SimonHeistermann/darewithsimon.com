import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import LanguageSwitcher from "./../../components/language-switcher";

export default function NewsletterUnsubscribed() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
      <header 
        className="w-full px-6 py-4 flex justify-between items-center backdrop-blur-md"
        style={{
          backgroundColor: "hsl(var(--background) / 0.95)",
          borderBottom: "1px solid hsl(var(--border))",
        }}
      >
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="/icons/logo.jpg" 
            alt="Logo" 
            className="h-8 w-8 rounded-full" 
            draggable={false}
            style={{ filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))" }}
          />
          <span 
            className="font-semibold text-lg text-gradient"
            style={{ color: "hsl(var(--foreground))" }}
          >
            darewithsimon
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/">
            <Button
              className="transition-all duration-200 hover:scale-105 transform shadow-soft hover:shadow-medium"
              style={{
                backgroundColor: "hsl(var(--brand-primary))",
                color: "hsl(var(--primary-foreground))",
                borderRadius: "var(--radius)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "hsl(var(--brand-primary) / 0.9)";
                e.currentTarget.style.boxShadow = "var(--shadow-medium)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "hsl(var(--brand-primary))";
                e.currentTarget.style.boxShadow = "var(--shadow-soft)";
              }}
            >
              {t.newsletterUnsubscribed.content.backToHome}
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center px-4">
        <div 
          className="max-w-xl w-full shadow-md rounded-xl p-8 text-center space-y-6"
          style={{ 
            backgroundColor: "hsl(var(--card))",
            borderRadius: "var(--radius)",
          }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gradient">
            {t.newsletterUnsubscribed.content.title}
          </h1>
          <p 
            className="text-lg"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {t.newsletterUnsubscribed.content.description}
          </p>
          <p 
            className="font-medium"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {t.newsletterUnsubscribed.content.resubscribe}
          </p>

          <div className="flex justify-center">
            <img
              src="http://img.mailinblue.com/9577773/images/687616f024d3e_1752569584.jpg"
              alt="Simon"
              className="w-20 h-20 rounded-full shadow-soft object-cover"
            />
          </div>
          <div className="flex items-center justify-center space-x-6 pt-4">
            <a
              href="https://www.linkedin.com/in/..."
              style={{ color: "var(--muted-foreground)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--linkedin-blue)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="#"
              style={{ color: "var(--muted-foreground)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--youtube-red)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              href="#"
              style={{ color: "var(--muted-foreground)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--instagram-pink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              style={{ color: "var(--muted-foreground)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--tiktok-black)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
            >
              <FaTiktok className="text-xl" />
            </a>
          </div>
          <div>
            <Link href="/">
              <Button
                className="mt-4 w-full transform transition-all hover:scale-105"
                style={{
                  backgroundColor: "var(--brand-primary)",
                  color: "var(--primary-foreground)",
                  borderRadius: "var(--radius)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--brand-primary-dark)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--brand-primary)";
                }}
              >
                {t.newsletterUnsubscribed.content.backToHome}
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center text-gray-400">
              <p>© {new Date().getFullYear()} Dare with Simon</p>
            </div>
            <div className="text-sm text-gray-500 space-x-4">
              <a 
                href="/legal/impressum" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                {t.newsletterUnsubscribed.footer.imprint}
              </a>
              <span>•</span>
              <a 
                href="/legal/datenschutz" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                {t.newsletterUnsubscribed.footer.privacy}
              </a>
              <span>•</span>
              <a 
                href="/legal/agb" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                {t.newsletterUnsubscribed.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
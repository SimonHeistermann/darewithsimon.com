import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import LanguageSwitcher from "./../../components/language-switcher";

export default function NewsletterConfirmed() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
      {/* NAVIGATION */}
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
              {t.newsletterConfirmed.content.backToHome}
            </Button>
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div 
          className="max-w-xl w-full shadow-md rounded-xl p-8 text-center space-y-6"
          style={{ 
            backgroundColor: "hsl(var(--card))",
            borderRadius: "var(--radius)",
          }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gradient">
            {t.newsletterConfirmed.content.title}
          </h1>
          <p 
            className="text-lg"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {t.newsletterConfirmed.content.description}
          </p>
          <p 
            className="font-medium"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {t.newsletterConfirmed.content.welcome}
          </p>

          <div className="flex justify-center">
            <img
              src="http://img.mailinblue.com/9577773/images/687616f024d3e_1752569584.jpg"
              alt="Simon"
              className="w-20 h-20 rounded-full shadow-soft object-cover"
            />
          </div>

          {/* SOCIAL MEDIA LINKS */}
          <div className="flex items-center justify-center space-x-6 pt-4">
            <a
              href="https://www.linkedin.com/in/simon-maximilian-heistermann-419531250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://www.youtube.com/@darewithsimon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/darewithsimon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
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
                {t.newsletterConfirmed.content.backToHome}
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER - Im Stil der Haupt-Footer-Component */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            
            {/* Copyright */}
            <div className="text-center text-gray-400">
              <p>© {new Date().getFullYear()} Dare with Simon</p>
            </div>
            
            {/* Legal Links */}
            <div className="text-sm text-gray-500 space-x-4">
              <a 
                href="/legal/impressum" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                {t.newsletterConfirmed.footer.imprint}
              </a>
              <span>•</span>
              <a 
                href="/legal/datenschutz" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                {t.newsletterConfirmed.footer.privacy}
              </a>
              <span>•</span>
              <a 
                href="/legal/agb" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                {t.newsletterConfirmed.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
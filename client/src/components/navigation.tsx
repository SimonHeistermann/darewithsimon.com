import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import LanguageSwitcher from "./language-switcher";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = window.location.pathname === "/" || window.location.pathname === "/home";

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsMobileMenuOpen(false);
    } else {
      const baseUrl = window.location.origin;
      window.location.href = `${baseUrl}/?scrollTo=${sectionId}`;
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-medium" : "backdrop-blur-md"
      }`}
      style={{
        backgroundColor: isScrolled
          ? "hsl(var(--background) / 0.95)"
          : "hsl(var(--background) / 0.8)",
        borderBottom: `1px solid hsl(var(--border))`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <a
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/" || window.location.pathname === "/home") {
                  e.preventDefault();
                  window.location.reload();
                }
              }}
              className="flex items-center space-x-2"
            >
              <img
                src="/images/icons/logo.jpg"
                alt="Logo"
                className="h-8 w-8 rounded-full"
                draggable={false}
                style={{ filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))" }}
              />
              <span
                className="font-semibold text-lg text-gradient"
                style={{ color: "hsl(var(--foreground))" }}
              >
                DareWithSimon
              </span>
            </a>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden nav:flex items-center space-x-8">
            {[
              { label: t.nav.developer, section: "developer" },
              { label: t.nav.student, section: "student" },
              { label: t.nav.traveler, section: "traveler" },
              { label: t.nav.brand, section: "brand" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.section)}
                className="transition-all transform hover:scale-105 duration-200"
                style={{
                  color: "hsl(var(--muted-foreground))",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--brand-primary))")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
              >
                {item.label}
              </button>
            ))}

            <LanguageSwitcher />
            <Button
              onClick={() => scrollToSection("contact")}
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
              {t.nav.contact}
            </Button>
          </div>

          {/* MOBILE HEADER */}
          <div className="nav:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="transition-colors"
              style={{
                color: "hsl(var(--muted-foreground))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "hsl(var(--muted) / 0.8)";
                e.currentTarget.style.color = "hsl(var(--foreground))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "hsl(var(--muted-foreground))";
              }}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div
            className="nav:hidden backdrop-blur-md"
            style={{
              borderTop: `1px solid hsl(var(--border))`,
              backgroundColor: "hsl(var(--background) / 0.95)",
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { label: t.nav.developer, section: "developer" },
                { label: t.nav.student, section: "student" },
                { label: t.nav.traveler, section: "traveler" },
                { label: t.nav.brand, section: "brand" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.section)}
                  className="block px-3 py-2 w-full text-left rounded-md transition-all transform hover:scale-[1.05] hover:bg-[hsl(var(--muted)/0.5)] hover:text-[hsl(var(--brand-primary))]"
                  style={{
                    color: "hsl(var(--muted-foreground))",
                    borderRadius: "var(--radius)",
                  }}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 w-full text-left rounded-md font-semibold transition-all transform hover:scale-[1.05]"
                style={{
                  color: "hsl(var(--primary-foreground))",
                  backgroundColor: "hsl(var(--brand-primary))",
                  borderRadius: "var(--radius)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(var(--brand-primary) / 0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(var(--brand-primary))";
                }}
              >
                {t.nav.contact}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md shadow-medium"
          : "backdrop-blur-md"
      }`}
      style={{
        backgroundColor: isScrolled ? 'hsl(var(--background) / 0.95)' : 'hsl(var(--background) / 0.8)',
        borderBottom: `1px solid hsl(var(--border))`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span 
              className="font-semibold text-lg text-gradient"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              darewithsimon
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("developer")}
              className="transition-colors hover:scale-105 transform duration-200"
              style={{ 
                color: 'hsl(var(--muted-foreground))'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--brand-primary))'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
            >
              {t.nav.developer}
            </button>
            <button
              onClick={() => scrollToSection("student")}
              className="transition-colors hover:scale-105 transform duration-200"
              style={{ 
                color: 'hsl(var(--muted-foreground))'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--brand-primary))'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
            >
              {t.nav.student}
            </button>
            <button
              onClick={() => scrollToSection("traveler")}
              className="transition-colors hover:scale-105 transform duration-200"
              style={{ 
                color: 'hsl(var(--muted-foreground))'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--brand-primary))'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
            >
              {t.nav.traveler}
            </button>
            <button
              onClick={() => scrollToSection("brand")}
              className="transition-colors hover:scale-105 transform duration-200"
              style={{ 
                color: 'hsl(var(--muted-foreground))'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--brand-primary))'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
            >
              {t.nav.brand}
            </button>
            <LanguageSwitcher />
            <Button
              onClick={() => scrollToSection("contact")}
              className="transition-all duration-200 hover:scale-105 transform shadow-soft hover:shadow-medium"
              style={{
                backgroundColor: 'hsl(var(--brand-primary))',
                color: 'hsl(var(--primary-foreground))',
                borderRadius: 'var(--radius)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--brand-primary) / 0.9)';
                e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--brand-primary))';
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
              }}
            >
              {t.nav.contact}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="transition-colors"
              style={{
                color: 'hsl(var(--muted-foreground))'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--muted) / 0.8)';
                e.currentTarget.style.color = 'hsl(var(--foreground))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
              }}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div 
            className="md:hidden backdrop-blur-md"
            style={{
              borderTop: `1px solid hsl(var(--border))`,
              backgroundColor: 'hsl(var(--background) / 0.95)'
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("developer")}
                className="block px-3 py-2 transition-colors w-full text-left rounded-md"
                style={{ 
                  color: 'hsl(var(--muted-foreground))',
                  borderRadius: 'var(--radius)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(var(--muted) / 0.5)';
                  e.currentTarget.style.color = 'hsl(var(--brand-primary))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                }}
              >
                {t.nav.developer}
              </button>
              <button
                onClick={() => scrollToSection("student")}
                className="block px-3 py-2 transition-colors w-full text-left rounded-md"
                style={{ 
                  color: 'hsl(var(--muted-foreground))',
                  borderRadius: 'var(--radius)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(var(--muted) / 0.5)';
                  e.currentTarget.style.color = 'hsl(var(--brand-primary))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                }}
              >
                {t.nav.student}
              </button>
              <button
                onClick={() => scrollToSection("traveler")}
                className="block px-3 py-2 transition-colors w-full text-left rounded-md"
                style={{ 
                  color: 'hsl(var(--muted-foreground))',
                  borderRadius: 'var(--radius)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(var(--muted) / 0.5)';
                  e.currentTarget.style.color = 'hsl(var(--brand-primary))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                }}
              >
                {t.nav.traveler}
              </button>
              <button
                onClick={() => scrollToSection("brand")}
                className="block px-3 py-2 transition-colors w-full text-left rounded-md"
                style={{ 
                  color: 'hsl(var(--muted-foreground))',
                  borderRadius: 'var(--radius)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(var(--muted) / 0.5)';
                  e.currentTarget.style.color = 'hsl(var(--brand-primary))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                }}
              >
                {t.nav.brand}
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-2 transition-all duration-200 hover:scale-105 transform shadow-soft hover:shadow-medium"
                style={{
                  backgroundColor: 'hsl(var(--brand-primary))',
                  color: 'hsl(var(--primary-foreground))',
                  borderRadius: 'var(--radius)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(var(--brand-primary) / 0.9)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(var(--brand-primary))';
                  e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                }}
              >
                {t.nav.contact}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
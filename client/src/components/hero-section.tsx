import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Plane, GraduationCap } from "lucide-react";
import { FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const { t } = useLanguage();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Ref für das Bild, um fetchpriority manuell zu setzen
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.setAttribute("fetchpriority", "high");
    }
  }, []);

  const typingPhrases = [
    "Creative Projects",
    "Content Creation",
    "Frontend Development"
  ];

  useEffect(() => {
    const currentPhrase = typingPhrases[currentPhraseIndex];

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentPhraseIndex, typingPhrases]);

  const inspirationalQuote = "A better future starts with those who dare to believe in it.";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="pt-16 min-h-screen relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(148,179,54,0.1)] to-[rgba(230,200,90,0.1)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--brand-primary)" }}
                ></div>
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {t.hero.availableForProjects}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "var(--foreground)" }}>
                <span>{t.hero.greeting}</span>
                <br />
                <span className="text-gradient">{t.hero.name}</span>
              </h1>
              <div className="h-8 flex items-center">
                <span
                  className="text-2xl font-semibold"
                  style={{ color: "var(--brand-secondary)" }}
                >
                  {displayText}
                  <span
                    className="border-r-2 ml-1 animate-pulse"
                    style={{ borderColor: "var(--brand-primary)" }}
                  ></span>
                </span>
              </div>
              <p
                className="text-xl leading-relaxed max-w-lg"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.hero.description.split("Angular").map((part, index) =>
                  index === 0 ? (
                    part
                  ) : (
                    <span key={index}>
                      <span
                        className="font-mono"
                        style={{ color: "var(--destructive)" }}
                      >
                        Angular
                      </span>
                      {part.split("TypeScript").map((subpart, subindex) =>
                        subindex === 0 ? (
                          subpart
                        ) : (
                          <span key={subindex}>
                            <span
                              className="font-mono"
                              style={{ color: "var(--brand-secondary)" }}
                            >
                              TypeScript
                            </span>
                            {subpart}
                          </span>
                        )
                      )}
                    </span>
                  )
                )}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("developer")}
                className="transform transition-all hover:scale-105"
                style={{
                  backgroundColor: "var(--brand-primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                {t.hero.viewMyWork}
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="transition-colors"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                {t.hero.getInTouch}
              </Button>
            </div>
            <div className="flex items-center space-x-6">
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
          </div>
          <div className="relative animate-slide-up">
            <div
              className="relative w-full h-96 rounded-2xl shadow-2xl overflow-hidden"
              style={{ background: "var(--card)" }}
            >
              <img
                ref={imgRef}
                src="/images/hero_image.jpeg"
                alt="Mein professionelles Foto"
                draggable={false}
                loading="eager"
                className="absolute inset-0 w-full h-full rounded-2xl object-cover shadow-lg"
                style={{ objectPosition: "center 70%" }}
              />
            </div>
            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl rotate-12 shadow-lg flex items-center justify-center animate-float"
              style={{ background: "linear-gradient(to bottom right, var(--brand-secondary), var(--brand-accent))" }}
            >
              <Plane className="text-white text-lg" />
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl -rotate-12 shadow-lg flex items-center justify-center animate-float"
              style={{
                background: "linear-gradient(to bottom right, var(--brand-primary), var(--brand-secondary))",
                animationDelay: "2s",
              }}
            >
              <GraduationCap className="text-white" />
            </div>
          </div>
        </div>
        <div className="text-center mt-16 animate-fade-in" style={{ color: "var(--foreground)" }}>
          <blockquote className="text-lg md:text-xl font-medium italic max-w-3xl mx-auto">
            "{inspirationalQuote}"
          </blockquote>
        </div>
      </div>
    </section>
  );
}
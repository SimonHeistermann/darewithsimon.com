import { useLanguage } from "@/hooks/use-language";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Terminal } from "lucide-react";
import {
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiGit,
  SiFirebase,
  SiMaterialdesign,
} from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export default function DeveloperSection() {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollReveal();

  const techStack = [
    { icon: <SiAngular color="#dd0031" />, label: "Angular" },
    { icon: <SiTypescript color="#3178c6" />, label: "TypeScript" },
    { icon: <SiJavascript color="#f7df1e" />, label: "JavaScript" },
    { icon: <SiHtml5 color="#e34f26" />, label: "HTML5" },
    { icon: <SiCss3 color="#1572b6" />, label: "CSS3" },
    { icon: <SiSass color="#cd6799" />, label: "SCSS" },
    { icon: <Code color="#4c51bf" />, label: "REST API" },
    { icon: <SiGit color="#f05032" />, label: "Git" },
    { icon: <FaUsers color="#7c3aed" />, label: "Scrum" },
    { icon: <SiFirebase color="#ffca28" />, label: "Firebase" },
    { icon: <SiMaterialdesign color="#00bcd4" />, label: "Material Design" },
  ];

  const InfiniteSlider: React.FC = () => {
    const items = [...techStack, ...techStack];

    return (
    <div
      className="relative overflow-hidden py-10 px-2 border rounded-xl"
      style={{ backgroundColor: "var(--muted)" }}
    >
      <motion.div
        role="presentation"
        aria-hidden="true"
        className="flex gap-6 w-max"
        style={{ minWidth: "200%" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[120px] px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-transform hover:scale-105"
            style={{ backgroundColor: "var(--card)" }}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <span
              className="text-sm font-medium"
              style={{ color: "var(--foreground)" }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openPortfolio = () => {
    window.open("https://simon-heistermann.de/", "_blank");
  };

  return (
    <section
      id="developer"
      className="py-20"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 animate-reveal ${
            titleVisible ? "visible" : ""
          }`}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            {t.developer.title}
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--muted-foreground)" }}
          >
            {t.developer.subtitle}
          </p>
        </div>

        <div
          ref={servicesRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-reveal ${
            servicesVisible ? "visible" : ""
          }`}
        >
          {/* Angular */}
          <div
            className="p-6 rounded-xl border hover:shadow-lg transition-all hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, hsl(0, 84%, 97%) 0%, hsl(0, 84%, 95%) 100%)",
              borderColor: "hsl(0, 84%, 90%)",
            }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "var(--destructive)" }}
            >
              <SiAngular className="text-white text-xl" />
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              {t.developer.services.angular.title}
            </h3>
            <p style={{ color: "var(--muted-foreground)" }}>
              {t.developer.services.angular.description}
            </p>
          </div>

          {/* Responsive */}
          <div
            className="p-6 rounded-xl border hover:shadow-lg transition-all hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, hsl(200, 40%, 97%) 0%, hsl(200, 40%, 95%) 100%)",
              borderColor: "hsl(200, 40%, 90%)",
            }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "var(--brand-accent)" }}
            >
              <Smartphone className="text-white text-xl" />
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              {t.developer.services.responsive.title}
            </h3>
            <p style={{ color: "var(--muted-foreground)" }}>
              {t.developer.services.responsive.description}
            </p>
          </div>

          {/* JavaScript */}
          <div
            className="p-6 rounded-xl border hover:shadow-lg transition-all hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, hsl(160, 35%, 97%) 0%, hsl(160, 35%, 95%) 100%)",
              borderColor: "hsl(160, 35%, 90%)",
            }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "var(--brand-primary)" }}
            >
              <Terminal className="text-white text-xl" />
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              {t.developer.services.javascript.title}
            </h3>
            <p style={{ color: "var(--muted-foreground)" }}>
              {t.developer.services.javascript.description}
            </p>
          </div>
        </div>

        {/* 🔁 TECH STACK SCROLLER */}
        <div className="rounded-2xl p-8 mb-16" style={{ backgroundColor: "var(--muted)" }}>
          <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: "var(--foreground)" }}>
            {t.developer.techStack}
          </h3>
          <InfiniteSlider />
          <div className="mt-6 text-center">
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              📚 <strong>{t.developer.learningNext}</strong>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 text-white"
          style={{
            background:
              "linear-gradient(135deg, var(--brand-secondary) 0%, hsl(215, 50%, 35%) 100%)",
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">
              {t.developer.cta.title}
            </h3>
            <p className="mb-6" style={{ color: "hsl(215, 20%, 85%)" }}>
              {t.developer.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "var(--brand-primary)" }}
              >
                {t.developer.cta.startProject}
              </Button>
              <Button
                variant="outline"
                className="border-white/30 hover:bg-white/10 transition-colors"
                style={{ color: "var(--brand-primary)" }}
                onClick={openPortfolio}
              >
                {t.developer.cta.viewPortfolio}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
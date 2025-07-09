import { useLanguage } from "@/hooks/use-language";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Terminal } from "lucide-react";
import { SiAngular, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiSass, SiGit, SiFirebase, SiMaterialdesign } from "react-icons/si";
import { FaUsers } from "react-icons/fa";

export default function DeveloperSection() {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollReveal();

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
    <section id="developer" className="py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 animate-reveal ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            {t.developer.title}
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
            {t.developer.subtitle}
          </p>
        </div>
        
        <div ref={servicesRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-reveal ${servicesVisible ? 'visible' : ''}`}>
          {/* Angular Service Card */}
          <div className="p-6 rounded-xl border hover:shadow-lg transition-all hover:scale-105" 
               style={{ 
                 background: "linear-gradient(135deg, hsl(0, 84%, 97%) 0%, hsl(0, 84%, 95%) 100%)",
                 borderColor: "hsl(0, 84%, 90%)"
               }}>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" 
                 style={{ backgroundColor: "var(--destructive)" }}>
              <SiAngular className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              {t.developer.services.angular.title}
            </h3>
            <p className="mb-4" style={{ color: "var(--muted-foreground)" }}>
              {t.developer.services.angular.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded" 
                    style={{ 
                      backgroundColor: "hsl(0, 84%, 95%)", 
                      color: "hsl(0, 84%, 40%)" 
                    }}>
                Angular
              </span>
              <span className="px-2 py-1 text-xs rounded" 
                    style={{ 
                      backgroundColor: "hsl(215, 50%, 95%)", 
                      color: "hsl(215, 50%, 40%)" 
                    }}>
                TypeScript
              </span>
              <span className="px-2 py-1 text-xs rounded" 
                    style={{ 
                      backgroundColor: "var(--muted)", 
                      color: "var(--muted-foreground)" 
                    }}>
                RxJS
              </span>
            </div>
          </div>
          
          {/* Responsive Design Card */}
          <div className="p-6 rounded-xl border hover:shadow-lg transition-all hover:scale-105" 
               style={{ 
                 background: "linear-gradient(135deg, hsl(200, 40%, 97%) 0%, hsl(200, 40%, 95%) 100%)",
                 borderColor: "hsl(200, 40%, 90%)"
               }}>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" 
                 style={{ backgroundColor: "var(--brand-accent)" }}>
              <Smartphone className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              {t.developer.services.responsive.title}
            </h3>
            <p className="mb-4" style={{ color: "var(--muted-foreground)" }}>
              {t.developer.services.responsive.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded" 
                    style={{ 
                      backgroundColor: "hsl(200, 40%, 95%)", 
                      color: "hsl(200, 40%, 40%)" 
                    }}>
                HTML5
              </span>
              <span className="px-2 py-1 text-xs rounded" 
                    style={{ 
                      backgroundColor: "hsl(200, 40%, 95%)", 
                      color: "hsl(200, 40%, 40%)" 
                    }}>
                CSS3
              </span>
              <span className="px-2 py-1 text-xs rounded" 
                    style={{ 
                      backgroundColor: "hsl(200, 40%, 95%)", 
                      color: "hsl(200, 40%, 40%)" 
                    }}>
                SCSS
              </span>
            </div>
          </div>
          
          {/* JavaScript Solutions Card */}
          <div className="p-6 rounded-xl border hover:shadow-lg transition-all hover:scale-105" 
               style={{ 
                 background: "linear-gradient(135deg, hsl(160, 35%, 97%) 0%, hsl(160, 35%, 95%) 100%)",
                 borderColor: "hsl(160, 35%, 90%)"
               }}>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" 
                 style={{ backgroundColor: "var(--brand-primary)" }}>
              <Terminal className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              {t.developer.services.javascript.title}
            </h3>
            <p className="mb-4" style={{ color: "var(--muted-foreground)" }}>
              {t.developer.services.javascript.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded" 
                    style={{ 
                      backgroundColor: "hsl(160, 35%, 95%)", 
                      color: "hsl(160, 35%, 40%)" 
                    }}>
                JavaScript
              </span>
              <span className="px-2 py-1 text-xs rounded" 
                    style={{ 
                      backgroundColor: "hsl(160, 35%, 95%)", 
                      color: "hsl(160, 35%, 40%)" 
                    }}>
                ES6+
              </span>
              <span className="px-2 py-1 text-xs rounded" 
                    style={{ 
                      backgroundColor: "hsl(160, 35%, 95%)", 
                      color: "hsl(160, 35%, 40%)" 
                    }}>
                DOM APIs
              </span>
            </div>
          </div>
        </div>
        
        {/* Tech Stack */}
        <div className="rounded-2xl p-8 mb-16" style={{ backgroundColor: "var(--muted)" }}>
          <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: "var(--foreground)" }}>
            {t.developer.techStack}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" 
                 style={{ backgroundColor: "var(--card)" }}>
              <SiAngular className="text-3xl mb-2" style={{ color: "var(--destructive)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Angular</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" 
                 style={{ backgroundColor: "var(--card)" }}>
              <SiTypescript className="text-3xl mb-2" style={{ color: "var(--brand-secondary)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>TypeScript</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" 
                 style={{ backgroundColor: "var(--card)" }}>
              <SiJavascript className="text-3xl mb-2" style={{ color: "hsl(45, 100%, 50%)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>JavaScript</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" 
                 style={{ backgroundColor: "var(--card)" }}>
              <SiHtml5 className="text-3xl mb-2" style={{ color: "hsl(12, 100%, 60%)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>HTML5</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" 
                 style={{ backgroundColor: "var(--card)" }}>
              <SiCss3 className="text-3xl mb-2" style={{ color: "var(--brand-accent)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>CSS3</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" 
                 style={{ backgroundColor: "var(--card)" }}>
              <SiSass className="text-3xl mb-2" style={{ color: "hsl(330, 100%, 50%)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>SCSS</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" 
                 style={{ backgroundColor: "var(--card)" }}>
              <Code className="text-3xl mb-2" style={{ color: "var(--brand-primary)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>REST API</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" 
                 style={{ backgroundColor: "var(--card)" }}>
              <SiGit className="text-3xl mb-2" style={{ color: "hsl(16, 100%, 50%)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Git</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" 
                 style={{ backgroundColor: "var(--card)" }}>
              <FaUsers className="text-3xl mb-2" style={{ color: "hsl(270, 50%, 50%)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Scrum</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" 
                 style={{ backgroundColor: "var(--card)" }}>
              <SiFirebase className="text-3xl mb-2" style={{ color: "hsl(45, 100%, 50%)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Firebase</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" 
                 style={{ backgroundColor: "var(--card)" }}>
              <SiMaterialdesign className="text-3xl mb-2" style={{ color: "var(--brand-accent)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Material Design</span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              📚 <strong>{t.developer.learningNext}</strong>
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="rounded-2xl p-8 text-white" 
             style={{ 
               background: "linear-gradient(135deg, var(--brand-secondary) 0%, hsl(215, 50%, 35%) 100%)" 
             }}>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">{t.developer.cta.title}</h3>
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
                onClick={() => openPortfolio()}
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
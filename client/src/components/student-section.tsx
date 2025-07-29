import { useLanguage } from "@/hooks/use-language";
import { GraduationCap, University, Lightbulb, Leaf } from "lucide-react";

export default function StudentSection() {
  const { t } = useLanguage();

  return (
    <section id="student" className="py-20" style={{ background: "var(--gradient-hero)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="text-[var(--brand-primary)]" />
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "var(--brand-secondary)" }}>
                  Academic Journey
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                {t.student.title}
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {t.student.subtitle}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: "var(--brand-primary)" }}
                ></div>
                <div>
                  <h4 className="font-semibold" style={{ color: "var(--foreground)" }}>
                    {t.student.university}
                  </h4>
                  <p style={{ color: "var(--muted-foreground)" }}>{t.student.program}</p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {t.student.duration}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: "var(--border)" }}
                ></div>
                <div>
                  <h4 className="font-semibold" style={{ color: "var(--foreground)" }}>
                    {t.student.focusAreas}
                  </h4>
                  <p style={{ color: "var(--muted-foreground)" }}>{t.student.focusAreasDesc}</p>
                </div>
              </div>
            </div>
            <div
              className="p-6 rounded-xl shadow-sm border"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--card-foreground)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <h4 className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                {t.student.contentFocusTitle}
              </h4>
              <p className="mb-4" style={{ color: "var(--muted-foreground)" }}>
                {t.student.contentFocusDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="px-3 py-1 text-sm rounded-full"
                  style={{ backgroundColor: "var(--brand-primary)", color: "var(--primary-foreground)" }}
                >
                  Study Tips
                </span>
                <span
                  className="px-3 py-1 text-sm rounded-full"
                  style={{ backgroundColor: "var(--success)", color: "var(--primary-foreground)" }}
                >
                  Sustainability
                </span>
                <span
                  className="px-3 py-1 text-sm rounded-full"
                  style={{ backgroundColor: "var(--accent)", color: "var(--primary-foreground)" }}
                >
                  Entrepreneurship
                </span>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div
              className="rounded-2xl p-8 shadow-sm border"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--card-foreground)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <div className="text-center space-y-6">
                <div
                  className="w-20 h-20 rounded-full mx-auto flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--brand-primary)",
                    boxShadow: "var(--shadow-medium)",
                  }}
                >
                  <University className="text-white text-2xl" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>
                    {t.student.university}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between" style={{ color: "var(--muted-foreground)" }}>
                      <span className="text-sm">{t.student.progress}</span>
                      <span className="text-sm font-medium" style={{ color: "var(--brand-primary)" }}>
                        {t.student.justStarted}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--brand-primary)] rounded-full transition-all duration-1000 ease-in-out"
                        style={{ width: "1%" }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "var(--card)", color: "var(--card-foreground)" }}
                  >
                    <h4 className="text-sm font-semibold mb-2">{t.student.currentFocus}</h4>
                    <ul className="text-sm space-y-1" style={{ color: "var(--muted-foreground)" }}>
                      <li>• Responsible Business Practices</li>
                      <li>• Digital Innovation Management</li>
                      <li>• Sustainable Development Goals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-xl rotate-12 shadow-lg flex items-center justify-center animate-float"
              style={{ background: "linear-gradient(135deg, var(--success), hsl(160, 60%, 40%))" }}
            >
              <Leaf className="text-white" />
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl -rotate-12 shadow-lg flex items-center justify-center animate-float"
              style={{
                background: "linear-gradient(135deg, var(--accent), hsl(200, 60%, 40%))",
                animationDelay: "2s",
              }}
            >
              <Lightbulb className="text-white text-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

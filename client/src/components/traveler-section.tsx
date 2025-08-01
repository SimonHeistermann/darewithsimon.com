import { useLanguage } from "@/hooks/use-language";
import { Plane, MapPin } from "lucide-react";

export default function TravelerSection() {
  const { t } = useLanguage();

  return (
    <section id="traveler" className="py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16 animate-fade-in"
          style={{ color: "var(--foreground)" }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Plane className="text-[var(--primary)]" />
            <span
              className="text-sm font-medium uppercase tracking-wider"
              style={{ color: "var(--primary)" }}
            >
              Travel Adventures
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--foreground2)" }}>{t.traveler.title}</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--muted-foreground2)" }}>
            {t.traveler.subtitle}
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4" style={{ color: "var(--foreground2)" }}>Coming soon...</h2>
        </div>
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div
            className="md:col-span-2 lg:col-span-2 rounded-2xl overflow-hidden border shadow-sm transition-shadow cursor-pointer hover:shadow-md hover:scale-105 transform flex flex-col"
            style={{
              backgroundColor: "hsl(0, 60%, 95%)",
              borderColor: "hsl(0, 60%, 85%)",
              color: "hsl(0, 60%, 40%)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="relative h-64 md:h-80 w-full overflow-hidden">
              <img
                src="/images/japan_header.jpg"
                alt="Japan Travel"
                className="w-full h-full object-cover rounded-t-2xl"
                style={{ objectPosition: "center 70%" }}
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <span
                    className="px-2 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: "hsl(180, 50%, 98%)",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    🇯🇵 Featured
                  </span>
                  <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                    Recent Trip
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                  {t.traveler.japanTitle}
                </h3>
                <p className="mb-4" style={{ color: "var(--muted-foreground)" }}>
                  {t.traveler.japanDesc}
                </p>
              </div>
              <button
                className="font-medium transition-colors self-start"
                style={{ color: "var(--foreground)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "hsl(180, 50%, 30%)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--foreground)")}
              >
                {t.traveler.readStories}
              </button>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-gray-300 shadow-sm transition-transform hover:scale-105 hover:shadow-md cursor-pointer"
            style={{
              backgroundColor: "var(--card)",
              color: "var(--card-foreground)",
            }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "var(--primary)", color: "white" }}
            >
              <MapPin className="text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              {t.traveler.travelTips}
            </h3>
            <p className="mb-4" style={{ color: "var(--muted-foreground)" }}>
              {t.traveler.travelTipsDesc}
            </p>
            <ul className="text-sm space-y-1" style={{ color: "var(--muted-foreground)" }}>
              <li>• Budget planning strategies</li>
              <li>• Cultural etiquette guides</li>
              <li>• Hidden local spots</li>
              <li>• Travel photography tips</li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
}
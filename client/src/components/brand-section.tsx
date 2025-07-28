import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Rocket, Play, Users, ExternalLink } from "lucide-react";
import { FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

export default function BrandSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="brand" className="py-20 [background:var(--gradient-hero)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Rocket className="text-[color:var(--primary)]" />
                <span className="text-sm font-medium text-[color:var(--primary)] uppercase tracking-wider">
                  Personal Brand
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--foreground)]">
                {t.brand.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.brand.subtitle}
              </p>
            </div>
            {/* <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-[color:var(--primary)] rounded-lg flex items-center justify-center">
                    <Play className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[color:var(--foreground)]">{t.brand.contentCreation}</h4>
                    <p className="text-sm text-gray-500">Multi-platform storytelling</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{t.brand.contentCreationDesc}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("newsletter")}
                className="bg-[color:var(--primary)] text-white hover:brightness-90 transition"
              >
                {t.brand.subscribeNewsletter}
              </Button>
            </div> */}
          </div>
          <div className="space-y-6 animate-slide-up">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-[color:var(--foreground)] mb-4">
                {t.brand.connectPlatforms}
              </h3>
              <div className="space-y-4">
                <a href="https://www.linkedin.com/in/simon-maximilian-heistermann-419531250/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FaLinkedin className="text-blue-600 text-xl" />
                    <div>
                      <p className="font-medium text-[color:var(--foreground)]">LinkedIn</p>
                      <p className="text-sm text-gray-600">Professional updates & insights</p>
                    </div>
                  </div>
                  <ExternalLink className="text-gray-400" size={16} />
                </a>
                {/* <a href="https://www.youtube.com/@darewithsimon" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FaYoutube className="text-red-600 text-xl" />
                    <div>
                      <p className="font-medium text-[color:var(--foreground)]">YouTube</p>
                      <p className="text-sm text-gray-600">Travel vlogs & programming tutorials</p>
                    </div>
                  </div>
                  <ExternalLink className="text-gray-400" size={16} />
                </a> */}
                <a href="https://www.instagram.com/darewithsimon/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FaInstagram className="text-pink-600 text-xl" />
                    <div>
                      <p className="font-medium text-[color:var(--foreground)]">Instagram</p>
                      <p className="text-sm text-gray-600">Daily life & behind the scenes</p>
                    </div>
                  </div>
                  <ExternalLink className="text-gray-400" size={16} />
                </a>
                {/* <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FaTiktok className="text-gray-800 text-xl" />
                    <div>
                      <p className="font-medium text-[color:var(--foreground)]">TikTok</p>
                      <p className="text-sm text-gray-600">Quick tips & entertaining content</p>
                    </div>
                  </div>
                  <ExternalLink className="text-gray-400" size={16} />
                </a> */}
              </div>
            </div>
            <div className="bg-[color:var(--muted)] rounded-2xl p-6">
              <h3 className="font-semibold text-[color:var(--foreground)] mb-4">{t.brand.latestContent}</h3>
              <div className="space-y-3">
                {[
                  { title: "Coming soon", meta: "", link: "#" },
                ].map((item, idx, link) => (
                  <a key={idx} href={item.link} className="flex justify-between items-center bg-white hover:bg-gray-100 transition p-3 rounded-lg cursor-pointer">
                    <div>
                      <p className="text-sm font-medium text-[color:var(--foreground)]">{item.title}</p>
                      <p className="text-xs text-gray-600">{item.meta}</p>
                    </div>
                    <ExternalLink className="text-gray-400" size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
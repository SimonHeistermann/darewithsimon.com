import { useLanguage } from "@/hooks/use-language";
import { FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const isHomePage = window.location.pathname === "/" || window.location.pathname === "/home";
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      const baseUrl = window.location.origin;
      window.location.href = `${baseUrl}/?scrollTo=${sectionId}`;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a
              href="/"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (window.location.pathname === "/" || window.location.pathname === "/home") {
                  e.preventDefault();
                  window.location.reload();
                }
              }}
              className="flex items-center space-x-2 mb-4"
            >
              <img
                src="/icons/logo.jpg"
                alt="Logo"
                className="h-8 w-8 rounded-full"
                draggable={false}
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' }}
              />
              <span className="font-semibold text-lg">darewithsimon</span>
            </a>
            <p className="text-gray-400 mb-4 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/simon-maximilian-heistermann-419531250/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://www.youtube.com/@darewithsimon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/darewithsimon/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" rel="noopener noreferrer" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <FaTiktok />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection("developer")} className="hover:text-white transition-colors text-left">
                  {t.footer.links.developerServices}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("student")} className="hover:text-white transition-colors text-left">
                  {t.footer.links.studentJourney}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("traveler")} className="hover:text-white transition-colors text-left">
                  {t.footer.links.travelStories}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("brand")} className="hover:text-white transition-colors text-left">
                  {t.footer.links.studyPacker}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.connect}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors text-left">
                  {t.footer.links.workTogether}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("newsletter")} className="hover:text-white transition-colors text-left">
                  {t.footer.links.newsletter}
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.links.portfolio}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.links.blog}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t.footer.copyright}</p>
          <div className="mt-4 text-sm text-gray-500 space-x-4">
            <a href="/impressum" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {t.footer.links.legal.imprint}
            </a>
            <a href="/datenschutz" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {t.footer.links.legal.privacy}
            </a>
            <a href="/agb" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {t.footer.links.legal.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
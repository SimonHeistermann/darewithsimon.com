import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import DeveloperSection from "@/components/developer-section";
import StudentSection from "@/components/student-section";
import TravelerSection from "@/components/traveler-section";
import BrandSection from "@/components/brand-section";
import NewsletterSection from "@/components/newsletter-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get("scrollTo");
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <DeveloperSection />
      <StudentSection />
      <TravelerSection />
      <BrandSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Code, Users, Coffee, Mail, Download, FileText, ArrowUp } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import ContactForm from "@/components/contact-form";

export default function ContactSection() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCVDownload = () => {
    toast({
      title: "CV Download",
      description: "CV wird heruntergeladen...",
    });
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Simon_Heistermann_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: "var(--background2)" }}>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-2 rounded-full bg-[var(--brand-primary)] text-white shadow-md hover:bg-[hsl(160,35%,35%)] transition-colors z-50"
            aria-label="Scroll to top"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--foreground2)]">
                {t.contact.title}
              </h2>
              <p className="text-lgleading-relaxed" style={{ color: "var(--muted-foreground2)" }}>
                {t.contact.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Code className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[color:var(--foreground2)] mb-1">{t.contact.services.webDev.title}</h3>
                  <p style={{ color: "var(--muted-foreground2)" }}>{t.contact.services.webDev.description}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[color:var(--foreground2)] mb-1">{t.contact.services.collaborations.title}</h3>
                  <p style={{ color: "var(--muted-foreground2)" }}>{t.contact.services.collaborations.description}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Coffee className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[color:var(--foreground2)] mb-1">{t.contact.services.sayHi.title}</h3>
                  <p style={{ color: "var(--muted-foreground2)" }}>{t.contact.services.sayHi.description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-6">
                <a
                  href="https://www.linkedin.com/in/simon-maximilian-heistermann-419531250/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-[#0077b5]"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="mailto:business@darewithsimon.com"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-red-600"
                >
                  <Mail className="text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/darewithsimon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-pink-500"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                {/* <button
                  onClick={handleCVDownload}
                  className="text-gray-400 transition-colors hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-full p-1 flex items-center justify-center"
                  aria-label="Download CV"
                >
                  <div className="relative flex items-center justify-center">
                    <FileText className="text-2xl" />
                    <Download className="absolute -bottom-1 -right-1 w-3 h-3 text-green-600" />
                  </div>
                </button> */}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl animate-slide-up">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
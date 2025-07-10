import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Code, Users, Coffee, Mail } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Message sent! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      contactMutation.mutate(formData);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-2 rounded-full bg-[var(--brand-primary)] text-white shadow-md hover:bg-[hsl(160,35%,35%)] transition-colors"
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {t.contact.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Code className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.contact.services.webDev.title}</h3>
                  <p className="text-gray-600">{t.contact.services.webDev.description}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.contact.services.collaborations.title}</h3>
                  <p className="text-gray-600">{t.contact.services.collaborations.description}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Coffee className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.contact.services.sayHi.title}</h3>
                  <p className="text-gray-600">{t.contact.services.sayHi.description}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/simon-maximilian-heistermann-419531250/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--linkedin-blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")} 
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="mailto:buisness@darewithsimon.com"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--destructive)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                <Mail className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/darewithsimon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--instagram-pink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl animate-slide-up">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder={t.contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.email}
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder={t.contact.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.subject}
                </label>
                <Select onValueChange={(value) => handleInputChange("subject", value)} value={formData.subject}>
                  <SelectTrigger>
                    <SelectValue placeholder={t.contact.form.selectTopic} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="project">{t.contact.form.topics.project}</SelectItem>
                    <SelectItem value="collaboration">{t.contact.form.topics.collaboration}</SelectItem>
                    <SelectItem value="question">{t.contact.form.topics.question}</SelectItem>
                    <SelectItem value="other">{t.contact.form.topics.other}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder={t.contact.form.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                />
              </div> 
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-[var(--brand-primary)] text-white hover:bg-[hsl(160,35%,35%)] disabled:opacity-50 transition-colors"
              >
                {contactMutation.isPending ? "Sending..." : t.contact.form.sendMessage}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
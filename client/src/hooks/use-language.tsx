import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, TranslationsType } from "@/lib/translations/index";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationsType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

function getLanguageFromURL(): Language | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  const token = params.get("token");
  if (token && (lang === "en" || lang === "de")) {
    return lang as Language;
  }
  return null;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("en");
  useEffect(() => {
    const urlLang = getLanguageFromURL();
    if (urlLang) {
      setLanguageState(urlLang);
      return;
    }
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage === "en" || savedLanguage === "de") {
      setLanguageState(savedLanguage);
    }
  }, []);
  
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url.toString());
    }
  };
  
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";

type Language = "en" | "de";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const languages: Language[] = ["en", "de"];

  const activeIndex = languages.indexOf(language);

  return (
    <div className="relative flex w-fit rounded-full bg-[var(--muted)] p-1">
      <motion.div
        className="h-7 w-14 rounded-full bg-[var(--brand-primary)] absolute z-0"
        initial={false}
        animate={{
          transform: `translateX(${activeIndex * 100}%)`,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
      <div className="relative z-10 flex">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`text-xs px-3 py-1 h-7 w-14 rounded-full transition-colors duration-200 ${
              language === lang ? "text-white" : "text-[var(--foreground)]"
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

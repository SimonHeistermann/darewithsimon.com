import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-[var(--muted)] rounded-full p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={`text-xs px-3 py-1 h-7 rounded-full transition-colors ${
          language === "en"
            ? "bg-[var(--brand-primary)] text-white"
            : "text-[var(--foreground)] hover:bg-[var(--muted-foreground)/10] hover:text-[var(--foreground)]"
        }`}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("de")}
        className={`text-xs px-3 py-1 h-7 rounded-full transition-colors ${
          language === "de"
            ? "bg-[var(--brand-primary)] text-white"
            : "text-[var(--foreground)] hover:bg-[var(--muted-foreground)/10] hover:text-[var(--foreground)]"
        }`}
      >
        DE
      </Button>
    </div>
  );
}
import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Sparkles, BookOpen, Globe, TrendingUp } from "lucide-react";
import clsx from "clsx";
import { validateNewsletterForm } from "@/lib/validators";

export default function NewsletterSection() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; agreed?: string }>({});
  const [shake, setShake] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: (email: string) => apiRequest("POST", "/api/newsletter", { email }),
    onSuccess: () => {
      toast({ title: t.newsletter.successTitle, description: t.newsletter.successDescription });
      resetForm();
    },
    onError: (error: any) => {
      toast({
        title: t.newsletter.errorTitle,
        description: error.message || t.newsletter.errorDescription,
        variant: "destructive"
      });      
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateNewsletterForm(email, agreed, language);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      mutate(email);
    } else {
      triggerShake();
    }
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const resetForm = () => {
    setEmail("");
    setAgreed(false);
    setErrors({});
  };

  const isFormValid = email.trim() !== "" && agreed;

  const categoryIcons = [<Sparkles size={16} />, <BookOpen size={16} />, <Globe size={16} />, <TrendingUp size={16} />];

  return (
    <section id="newsletter" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <Header t={t} />
          <FormBlock
            email={email}
            agreed={agreed}
            errors={errors}
            isPending={isPending}
            shake={shake}
            onSubmit={handleSubmit}
            setEmail={setEmail}
            setAgreed={setAgreed}
            isFormValid={isFormValid}
            t={t}
          />
          <Categories t={t} categoryIcons={categoryIcons} />
        </div>
      </div>
    </section>
  );
}

function Header({ t }: any) {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl sm:text-4xl font-bold">{t.newsletter.title}</h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.newsletter.subtitle}</p>
    </div>
  );
}

function FormBlock({
  email,
  agreed,
  errors,
  isPending,
  shake,
  onSubmit,
  setEmail,
  setAgreed,
  isFormValid,
  t,
}: any) {
  return (
    <div
      className={clsx(
        "bg-gray-800 p-8 rounded-2xl max-w-md mx-auto transition-all",
        { "animate-shake border border-red-500": shake }
      )}
    >
      <form className="space-y-4" onSubmit={onSubmit} noValidate>
        <div className="space-y-1 text-left">
          <Input
            id="newsletter-email"
            type="email"
            placeholder={t.newsletter.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent"
            aria-invalid={!!errors.email}
            aria-describedby="newsletter-email-error"
          />
          {errors.email && (
            <p id="newsletter-email-error" className="text-sm text-red-400">
              {errors.email}
            </p>
          )}
        </div>
        <div className="flex items-start gap-2 text-left">
          <input
            id="privacy"
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mt-1 accent-[var(--brand-primary)]"
            aria-invalid={!!errors.agreed}
            aria-describedby="privacy-error"
          />
          <label htmlFor="privacy" className="text-sm text-gray-300">
            {t.newsletter.privacyText}
            <a
              href="/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary hover:text-primary/80"
            >
              {t.newsletter.privacyPolicy}
            </a>{" "}
            {t.newsletter.agreeSuffix ?? ""}
          </label>
        </div>
        {errors.agreed && (
          <p id="privacy-error" className="text-sm text-red-400 text-left">
            {errors.agreed}
          </p>
        )}
        <Button
          type="submit"
          disabled={!isFormValid || isPending}
          className={clsx(
            "w-full text-white transition-colors",
            isPending || !isFormValid
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[var(--brand-primary)] hover:bg-[hsl(160,35%,35%)]"
          )}
        >
          {isPending ? t.newsletter.sending : t.newsletter.subscribeNow}
        </Button>
        <p className="text-xs text-gray-400">{t.newsletter.noSpam}</p>
      </form>
    </div>
  );
}

function Categories({ t, categoryIcons }: any) {
  return (
    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
      {t.newsletter.categories.map((category: string, index: number) => (
        <span key={index} className="flex items-center gap-1">
          {categoryIcons[index] ?? null}
          <span>{category}</span>
        </span>
      ))}
    </div>
  );
}
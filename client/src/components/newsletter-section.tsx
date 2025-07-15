import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Sparkles, BookOpen, Globe, TrendingUp } from "lucide-react";
import clsx from "clsx";
import { validateNewsletterForm } from "@/lib/validators";

export default function NewsletterSection() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; consent?: string }>({});
  const [shake, setShake] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const { mutate, isPending } = useMutation({
    mutationFn: (data: { email: string; consentAccepted: boolean }) =>
      fetch(`${BACKEND_URL}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, language }),
      }).then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json.message || "Unbekannter Fehler");
        return json;
      }),
    onSuccess: () => {
      toast({
        title: t.newsletter.successTitle,
        description: t.newsletter.successDescription,
      });
      resetForm();
    },
    onError: (error: any) => {
      toast({
        title: t.newsletter.errorTitle,
        description: error.message || t.newsletter.errorDescription,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateNewsletterForm(email, consentAccepted, language);
    setErrors(validation);
    
    if (Object.keys(validation).length === 0) {
      mutate({ email, consentAccepted });
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
    setConsentAccepted(false);
    setErrors({});
  };

  const isFormValid = email.trim() !== "" && consentAccepted;

  const categoryIcons = [<Sparkles size={16} />, <BookOpen size={16} />, <Globe size={16} />, <TrendingUp size={16} />];

  return (
    <section id="newsletter" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <Header t={t} />
          <FormBlock
            email={email}
            consentAccepted={consentAccepted}
            errors={errors}
            isPending={isPending}
            shake={shake}
            onSubmit={handleSubmit}
            setEmail={setEmail}
            setConsentAccepted={setConsentAccepted}
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
  consentAccepted,
  errors,
  isPending,
  shake,
  onSubmit,
  setEmail,
  setConsentAccepted,
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
        <div className="space-y-1 text-left">
          <div className="flex items-start gap-3">
            <input
              id="newsletter-consent"
              type="checkbox"
              checked={consentAccepted}
              onChange={(e) => setConsentAccepted(e.target.checked)}
              className="mt-1 accent-[var(--brand-primary)] min-w-[16px] h-4"
              aria-invalid={!!errors.consent}
              aria-describedby="newsletter-consent-error"
            />
            <label htmlFor="newsletter-consent" className="text-sm text-gray-300 leading-relaxed">
              {t.newsletter.consent.text}{" "}
              <a
                href="/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[var(--brand-primary)] hover:text-[var(--brand-primary)]/80"
              >
                {t.newsletter.consent.privacyPolicy}
              </a>{" "}
              {t.newsletter.consent.and}{" "}
              <a
                href="/legal/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[var(--brand-primary)] hover:text-[var(--brand-primary)]/80"
              >
                {t.newsletter.consent.terms}
              </a>{""}
              {t.newsletter.consent.suffix}
            </label>
          </div>
          {errors.consent && (
            <p id="newsletter-consent-error" className="text-sm text-red-400">
              {errors.consent}
            </p>
          )}
        </div>
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
        <div className="space-y-2">
          <p className="text-xs text-gray-400">{t.newsletter.noSpam}</p>
          <p className="text-xs text-gray-400">{t.newsletter.doubleOptInInfo}</p>
        </div>
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
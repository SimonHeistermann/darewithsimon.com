import { translations } from "@/lib/translations";

type Language = keyof typeof translations;

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validateNewsletterForm(email: string, consentAccepted: boolean, language: Language) {
  const errors: { email?: string; consent?: string } = {};
  const t = translations[language].newsletter?.validation;
  if (!email.trim()) {
    errors.email = t?.emailRequired;
  } else if (!isValidEmail(email)) {
    errors.email = t?.emailInvalid;
  }
  if (!consentAccepted) {
    errors.consent = t?.consentRequired;
  }
  return errors;
}
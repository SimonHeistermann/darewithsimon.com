import { translations } from "@/lib/translations";

type Language = keyof typeof translations;

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validateNewsletterForm(email: string, agreed: boolean, language: Language) {
  const errors: { email?: string; agreed?: string } = {};
  const t = translations[language].newsletter?.validation;
  if (!email.trim()) {
    errors.email = t?.emailRequired;
  } else if (!isValidEmail(email)) {
    errors.email = t?.emailInvalid;
  }
  if (!agreed) {
    errors.agreed = t?.agreeRequired;
  }
  return errors;
}
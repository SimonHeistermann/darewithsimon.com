import { translations } from "@/lib/translations/index";

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

export function validateContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
  consentAccepted: boolean;
}, language: Language) {
  const errors: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    consent?: string;
  } = {};
  
  const t = translations[language].contactForm?.validation;
  if (!formData.name.trim()) {
    errors.name = t?.nameRequired;
  } else if (formData.name.trim().length < 2) {
    errors.name = t?.nameMinLength;
  }
  if (!formData.email.trim()) {
    errors.email = t?.emailRequired;
  } else if (!isValidEmail(formData.email)) {
    errors.email = t?.emailInvalid;
  }
  if (!formData.subject.trim()) {
    errors.subject = t?.subjectRequired;
  }
  if (!formData.message.trim()) {
    errors.message = t?.messageRequired;
  } else if (formData.message.trim().length < 10) {
    errors.message = t?.messageMinLength;
  } else if (formData.message.trim().length > 1000) {
    errors.message = t?.messageMaxLength;
  }
  if (!formData.consentAccepted) {
    errors.consent = t?.consentRequired;
  }
  return errors;
}
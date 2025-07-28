"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import { validateContactForm } from "@/lib/validators";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  consentAccepted: boolean;
  honeypot?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  consent?: string;
}

interface ShakeStates {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
  consent: boolean;
}

export default function ContactForm() {
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    consentAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [shakeStates, setShakeStates] = useState<ShakeStates>({
    name: false,
    email: false,
    subject: false,
    message: false,
    consent: false,
  });

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const triggerFieldShake = (field: keyof ShakeStates) => {
    setShakeStates(prev => ({ ...prev, [field]: true }));
    setTimeout(() => {
      setShakeStates(prev => ({ ...prev, [field]: false }));
    }, 500);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      consentAccepted: false,
    });
    setErrors({});
    setShakeStates({
      name: false,
      email: false,
      subject: false,
      message: false,
      consent: false,
    });
  };

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await fetch(`${BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.message || "Unknown error");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: t.contact.successTitle || "Erfolgreich gesendet!",
        description: t.contact.successDescription || "Ihre Nachricht wurde versendet. Ich melde mich bald bei Ihnen!",
      });
      resetForm();
    },
    onError: (error: any) => {
      toast({
        title: t.contact.errorTitle || "Fehler",
        description: error.message || t.contact.errorDescription || "Nachricht konnte nicht gesendet werden.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot && formData.honeypot.trim() !== "") {
      toast({
        title: t.contact.successTitle || "Erfolgreich gesendet!",
        description: t.contact.successDescription || "Ihre Nachricht wurde versendet. Ich melde mich bald bei Ihnen!",
      });
      resetForm();
      return;
    }

    const validation = validateContactForm(formData, language);
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      contactMutation.mutate(formData);
    } else {
      Object.keys(validation).forEach(field => {
        if (field === "consent") {
          triggerFieldShake("consent");
        } else {
          triggerFieldShake(field as keyof ShakeStates);
        }
      });
    }
  };

  const getFieldClasses = (fieldName: keyof ShakeStates, hasError: boolean) => {
    return clsx(
      "transition-colors",
      hasError && "border-red-500 focus:border-red-500 focus:ring-red-500",
      shakeStates[fieldName] && "animate-shake"
    );
  };

  const getConsentContainerClasses = () => {
    return clsx(
      "flex items-start gap-3",
      shakeStates.consent && "animate-shake"
    );
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== "" &&
    formData.consentAccepted;

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
            {t.contact.form.name} *
          </label>
          <Input
            id="contact-name"
            type="text"
            value={formData.name}
            placeholder={t.contact.form.namePlaceholder}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={getFieldClasses("name", !!errors.name)}
            required
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>
        <div className="space-y-1">
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
            {t.contact.form.email} *
          </label>
          <Input
            id="contact-email"
            type="email"
            value={formData.email}
            placeholder={t.contact.form.emailPlaceholder}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={getFieldClasses("email", !!errors.email)}
            required
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {t.contact.form.subject} *
        </label>
        <Select
          onValueChange={(value) => handleInputChange("subject", value)}
          value={formData.subject}
        >
          <SelectTrigger className={getFieldClasses("subject", !!errors.subject)}>
            <SelectValue placeholder={t.contact.form.selectTopic} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="project">{t.contact.form.topics.project}</SelectItem>
            <SelectItem value="collaboration">{t.contact.form.topics.collaboration}</SelectItem>
            <SelectItem value="question">{t.contact.form.topics.question}</SelectItem>
            <SelectItem value="other">{t.contact.form.topics.other}</SelectItem>
          </SelectContent>
        </Select>
        {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
      </div>
      <div className="space-y-1">
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">
          {t.contact.form.message} *
        </label>
        <Textarea
          id="contact-message"
          rows={4}
          value={formData.message}
          placeholder={t.contact.form.messagePlaceholder}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className={getFieldClasses("message", !!errors.message)}
          required
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
      </div>
      <div className="space-y-1">
        <div className={getConsentContainerClasses()}>
          <input
            id="contact-consent"
            type="checkbox"
            checked={formData.consentAccepted}
            onChange={(e) => handleInputChange("consentAccepted", e.target.checked)}
            className="mt-1 accent-[var(--brand-primary)]"
            required
          />
          <label htmlFor="contact-consent" className="text-sm text-gray-700 leading-relaxed">
            {t.contact.consent?.text}{" "}
            <a href="/legal/privacy-policy" target="_blank" className="underline text-[var(--brand-primary)]">
              {t.contact.consent?.privacyPolicy}
            </a>{" "}
            {t.contact.consent?.and}{" "}
            <a href="/legal/terms-and-conditions" target="_blank" className="underline text-[var(--brand-primary)]">
              {t.contact.consent?.terms}
            </a>{" "}
            {t.contact.consent?.suffix}
          </label>
        </div>
        {errors.consent && <p className="text-sm text-red-500">{errors.consent}</p>}
      </div>
      <Button
        type="submit"
        disabled={!isFormValid || contactMutation.isPending}
        className={clsx(
          "w-full text-white",
          contactMutation.isPending || !isFormValid
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[var(--brand-primary)] hover:bg-[hsl(160,35%,35%)]"
        )}
      >
        {contactMutation.isPending
          ? t.contact.form.sending || "Wird gesendet..."
          : t.contact.form.sendMessage || "Nachricht senden"}
      </Button>

      <div className="text-center">
        <p className="text-xs text-gray-500">* {t.contact.form.requiredFields}</p>
      </div>
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={(e) => handleInputChange("honeypot", e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
    </form>
  );
}
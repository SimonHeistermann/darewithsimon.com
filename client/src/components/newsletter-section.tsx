import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Sparkles, BookOpen, Globe, TrendingUp } from "lucide-react"; // optional Icons

export default function NewsletterSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Successfully subscribed to newsletter!",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  const categoryIcons = [
    <Sparkles size={16} />,
    <BookOpen size={16} />,
    <Globe size={16} />,
    <TrendingUp size={16} />,
  ];

  return (
    <section id="newsletter" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">{t.newsletter.title}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t.newsletter.subtitle}
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-2xl max-w-md mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder={t.newsletter.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={newsletterMutation.isPending}
                className="w-full bg-[var(--brand-primary)] text-white hover:bg-[hsl(160,35%,35%)] disabled:opacity-50"
              >
                {newsletterMutation.isPending ? "Subscribing..." : t.newsletter.subscribeNow}
              </Button>
              <p className="text-xs text-gray-400">
                {t.newsletter.noSpam}
              </p>
            </form>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            {t.newsletter.categories.map((category, index) => (
              <span key={index} className="flex items-center gap-1">
                {categoryIcons[index] ?? null}
                <span>{category}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
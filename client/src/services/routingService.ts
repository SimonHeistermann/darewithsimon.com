import Home from "@/pages/home";
import LegalNotice from "@/pages/legal-notice";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsConditions from "@/pages/terms-and-conditions";
import NewsletterConfirmed from "@/pages/newsletter/newsletter-confirmed";
import NewsletterUnsubscribed from "@/pages/newsletter/newsletter-unsubscribed";

export interface RouteConfig {
  paths: string[];
  component: React.ComponentType<any>;
}

export interface RouteMatch {
  route: RouteConfig;
  exactMatch?: boolean;
  fuzzyMatch?: boolean;
  suggestedPath?: string;
}

export interface NotFoundProps {
  currentPath?: string;
  suggestions?: string[];
}

export const ROUTES: Record<string, RouteConfig> = {
  HOME: {
    paths: ["/", "/home", "/start"],
    component: Home,
  },
  NEWSLETTER_CONFIRMED: {
    paths: [
      "/newsletter/confirmed",
      "/newsletter/bestaetigt",
      "/newsletter/bestätigt",
      "/newsletter/success",
      "/newsletter/erfolgreich",
      "/newsletter/danke",
      "/newsletter/thank-you",
      "/newsletter/anmeldung-erfolgreich",
      "/newsletter/registration-success",
      "/newsletter/willkommen",
      "/newsletter/welcome",
      "/bestätigung/newsletter",
      "/bestaetigung/newsletter",
      "/confirmation/newsletter",
      "/success/newsletter",
      "/danke/newsletter",
      "/thank-you/newsletter",
      "/newsletter/confirmed/:token"
    ],
    component: NewsletterConfirmed,
  },
  NEWSLETTER_UNSUBSCRIBED: {
    paths: [
      "/newsletter/unsubscribed",
      "/newsletter/abgemeldet",
      "/newsletter/unsubscribe",
      "/newsletter/abmelden",
      "/newsletter/cancelled",
      "/newsletter/abbruch",
      "/newsletter/goodbye",
      "/newsletter/tschuess",
      "/newsletter/tschüss",
      "/newsletter/auf-wiedersehen",
      "/newsletter/farewell",
      "/newsletter/leave",
      "/newsletter/verlassen",
      "/newsletter/opt-out",
      "/newsletter/austragen",
      "/abmeldung/newsletter",
      "/unsubscribe/newsletter",
      "/goodbye/newsletter",
      "/farewell/newsletter",
      "/opt-out/newsletter",
      "/newsletter/unsubscribed/:token"
    ],
    component: NewsletterUnsubscribed,
  },
  LEGAL_NOTICE: {
    paths: [
      "/legal/impressum",
      "/legal/imprint",
      "/legal/legal-notice",
      "/rechtlich/impressum",
      "/rechtlich/imprint",
      "/rechtlich/legal-notice",
      "/rechtlich/rechtliches",
      "/rechtlich/rechtliche-hinweise",
      "/legal-notice",
      "/impressum",
      "/imprint",
      "/rechtliches",
      "/rechtliche-hinweise",
      "/legal",
      "/legal/impressum/:token"
    ],
    component: LegalNotice,
  },
  PRIVACY_POLICY: {
    paths: [
      "/legal/privacy-policy",
      "/legal/datenschutz",
      "/legal/datenschutzerklärung",
      "/legal/datenschutzerklaerung",
      "/legal/privacy",
      "/legal/dsgvo",
      "/legal/gdpr",
      "/rechtlich/privacy-policy",
      "/rechtlich/datenschutz",
      "/rechtlich/datenschutzerklärung",
      "/rechtlich/datenschutzerklaerung",
      "/rechtlich/privacy",
      "/rechtlich/privatsphäre",
      "/rechtlich/privatsphaere",
      "/rechtlich/dsgvo",
      "/rechtlich/gdpr",
      "/privacy-policy",
      "/datenschutz",
      "/datenschutzerklärung",
      "/datenschutzerklaerung",
      "/privacy",
      "/privatsphäre",
      "/privatsphaere",
      "/dsgvo",
      "/gdpr",
      "/legal/privacy-policy/:token",
    ],
    component: PrivacyPolicy,
  },
  TERMS_CONDITIONS: {
    paths: [
      "/legal/terms-conditions",
      "/legal/terms",
      "/legal/agb",
      "/legal/terms-and-conditions",
      "/legal/terms-of-service",
      "/legal/tos",
      "/rechtlich/terms-conditions",
      "/rechtlich/terms",
      "/rechtlich/agb",
      "/rechtlich/allgemeine-geschäftsbedingungen",
      "/rechtlich/allgemeine-geschaeftsbedingungen",
      "/rechtlich/geschäftsbedingungen",
      "/rechtlich/geschaeftsbedingungen",
      "/rechtlich/terms-and-conditions",
      "/rechtlich/terms-of-service",
      "/rechtlich/tos",
      "/rechtlich/nutzungsbedingungen",
      "/rechtlich/bedingungen",
      "/rechtlich/gtc",
      "/terms-conditions",
      "/terms",
      "/agb",
      "/allgemeine-geschäftsbedingungen",
      "/allgemeine-geschaeftsbedingungen",
      "/geschäftsbedingungen",
      "/geschaeftsbedingungen",
      "/terms-and-conditions",
      "/terms-of-service",
      "/tos",
      "/nutzungsbedingungen",
      "/bedingungen",
      "/gtc",
      "/legal/terms-conditions/:token",
    ],
    component: TermsConditions,
  }
};

function replaceUmlautsAndEszett(text: string): string {
  const replacements: Record<string, string> = {
    "ä": "ae", "ö": "oe", "ü": "ue", "ß": "ss"
  };
  return text.replace(/[äöüß]/g, c => replacements[c] || c);
}

function cleanPathSlashes(path: string): string {
  return path.replace(/^\/+|\/+$/g, "");
}

function normalizeSpaces(text: string): string {
  return text.replace(/\s+/g, "-");
}

export function normalizeRoute(path: string): string {
  const cleanPath = path.split("?")[0];
  return replaceUmlautsAndEszett(
    normalizeSpaces(
      cleanPathSlashes(
        cleanPath.toLowerCase().trim()
      )
    )
  );
}

function stripToken(path: string): string {
  return path.replace(/\/[^/]+$/, "");
}

function pathMatchesWithParams(input: string, routePath: string): boolean {
  const inputSegments = normalizeRoute(input).split("/");
  const routeSegments = normalizeRoute(routePath).split("/");
  if (inputSegments.length !== routeSegments.length) {
    return false;
  }
  for (let i = 0; i < routeSegments.length; i++) {
    if (routeSegments[i].startsWith(":")) {
      continue;
    }
    if (routeSegments[i] !== inputSegments[i]) {
      return false;
    }
  }
  return true;
}


function findExactRouteMatch(normalizedPath: string): RouteMatch | null {
  for (const route of Object.values(ROUTES)) {
    for (const path of route.paths) {
      if (pathMatchesWithParams(normalizedPath, path)) {
        return { route, exactMatch: true };
      }
    }
  }
  return null;
}

function findFuzzyRouteMatch(normalizedPath: string): RouteMatch | null {
  for (const route of Object.values(ROUTES)) {
    for (const path of route.paths) {
      const routeNorm = normalizeRoute(stripToken(path));
      if (isSimilarPath(normalizedPath, routeNorm)) {
        return { route, fuzzyMatch: true, suggestedPath: path };
      }
    }
  }
  return null;
}

export function findMatchingRoute(currentPath: string): RouteMatch | null {
  const normalizedPath = normalizeRoute(currentPath);
  return findExactRouteMatch(normalizedPath) || findFuzzyRouteMatch(normalizedPath);
}

function hasValidLengthDifference(a: string, b: string): boolean {
  return Math.abs(a.length - b.length) <= 3;
}

function calculateMinRequiredLength(a: string, b: string): number {
  return Math.min(a.length, b.length) * 0.7;
}

function isSimilarPath(a: string, b: string): boolean {
  if (!hasValidLengthDifference(a, b)) return false;
  return longestCommonSubstring(a, b).length >= calculateMinRequiredLength(a, b);
}

function longestCommonSubstring(a: string, b: string): string {
  let longest = "";
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j <= a.length; j++) {
      const substr = a.slice(i, j);
      if (b.includes(substr) && substr.length > longest.length) {
        longest = substr;
      }
    }
  }
  return longest;
}

function getDefaultSuggestions(): string[] {
  return ["/", "/legal/impressum", "/legal/datenschutz", "/legal/agb"];
}

export function getRouteSuggestions(currentPath: string): string[] {
  const match = findMatchingRoute(currentPath);
  return match?.suggestedPath ? [match.suggestedPath] : getDefaultSuggestions();
}

function getLegacyRouteMapping(): Record<string, string> {
  return {
    "/impressum": "/legal/impressum",
    "/datenschutz": "/legal/datenschutz",
    "/agb": "/legal/agb",
    "/privacy-policy": "/legal/privacy-policy",
    "/terms-conditions": "/legal/terms-conditions",
    "/legal-notice": "/legal/impressum",
    "/newsletter-confirmed": "/newsletter/confirmed",
    "/newsletter-success": "/newsletter/confirmed",
    "/newsletter-bestaetigt": "/newsletter/confirmed",
    "/newsletter-bestätigt": "/newsletter/confirmed",
    "/anmeldung-erfolgreich": "/newsletter/confirmed",
    "/bestätigung": "/newsletter/confirmed",
    "/bestaetigung": "/newsletter/confirmed",
    "/newsletter-unsubscribed": "/newsletter/unsubscribed",
    "/newsletter-abgemeldet": "/newsletter/unsubscribed",
    "/abgemeldet": "/newsletter/unsubscribed",
    "/unsubscribed": "/newsletter/unsubscribed",
    "/abmeldung": "/newsletter/unsubscribed",
    "/unsubscribe": "/newsletter/unsubscribed"
  };
}

function handleFuzzyMatchRedirect(currentPath: string): string | null {
  const match = findMatchingRoute(currentPath);
  if (match?.fuzzyMatch && match.suggestedPath) {
    console.log(`Fuzzy redirect: "${currentPath}" → "${match.suggestedPath}"`);
    return match.suggestedPath;
  }
  return null;
}

function handleLegacyRedirect(currentPath: string): string | null {
  const legacy = getLegacyRouteMapping();
  const normalized = normalizeRoute(currentPath);
  return legacy[`/${normalized}`] || null;
}

export function shouldRedirect(currentPath: string): string | null {
  return handleFuzzyMatchRedirect(currentPath) || handleLegacyRedirect(currentPath);
}
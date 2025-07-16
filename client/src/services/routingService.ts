import Home from "@/pages/home";
import LegalNotice from "@/pages/legal-notice";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsConditions from "@/pages/terms-and-conditions";
import NewsletterConfirmed from "@/pages/newsletter/newsletter-confirmed";

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
      "/thank-you/newsletter"
    ],
    component: NewsletterConfirmed,
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
      "/legal"
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
      "/gdpr"
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
      "/gtc"
    ],
    component: TermsConditions,
  }
};

function replaceUmlautsAndEszett(text: string): string {
  const replacements: Record<string, string> = { 
    'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss' 
  };
  return text.replace(/[äöüß]/g, (char: string) => replacements[char] || char);
}

function cleanPathSlashes(path: string): string {
  return path.replace(/^\/+|\/+$/g, '');
}

function normalizeSpaces(text: string): string {
  return text.replace(/\s+/g, '-');
}

export function normalizeRoute(path: string): string {
  return replaceUmlautsAndEszett(
    normalizeSpaces(
      cleanPathSlashes(
        path.toLowerCase().trim()
      )
    )
  );
}

function findExactRouteMatch(normalizedPath: string): RouteMatch | null {
  for (const [routeName, route] of Object.entries(ROUTES)) {
    for (const path of route.paths) {
      if (normalizeRoute(path) === normalizedPath) {
        return { route, exactMatch: true };
      }
    }
  }
  return null;
}

function findFuzzyRouteMatch(normalizedPath: string): RouteMatch | null {
  for (const [routeName, route] of Object.entries(ROUTES)) {
    for (const path of route.paths) {
      const normalizedRoutePath = normalizeRoute(path);
      if (isSimilarPath(normalizedPath, normalizedRoutePath)) {
        return { route, fuzzyMatch: true, suggestedPath: path };
      }
    }
  }
  return null;
}

export function findMatchingRoute(currentPath: string): RouteMatch | null {
  const normalizedPath = normalizeRoute(currentPath);
  const exactMatch = findExactRouteMatch(normalizedPath);
  if (exactMatch) return exactMatch;
  
  return findFuzzyRouteMatch(normalizedPath);
}

function hasValidLengthDifference(path1: string, path2: string): boolean {
  return Math.abs(path1.length - path2.length) <= 3;
}

function calculateMinRequiredLength(path1: string, path2: string): number {
  return Math.min(path1.length, path2.length) * 0.7;
}

function isSimilarPath(path1: string, path2: string): boolean {
  if (!hasValidLengthDifference(path1, path2)) return false;
  const commonSubstring = longestCommonSubstring(path1, path2);
  const minRequiredLength = calculateMinRequiredLength(path1, path2);
  return commonSubstring.length >= minRequiredLength;
}

function checkAndUpdateLongestSubstring(
  substr: string, 
  str2: string, 
  currentLongest: string
): string {
  if (str2.includes(substr) && substr.length > currentLongest.length) {
    return substr;
  }
  return currentLongest;
}

function longestCommonSubstring(str1: string, str2: string): string {
  let longest = '';
  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j <= str1.length; j++) {
      const substr = str1.slice(i, j);
      longest = checkAndUpdateLongestSubstring(substr, str2, longest);
    }
  }
  return longest;
}

function getDefaultSuggestions(): string[] {
  return ["/", "/legal/impressum", "/legal/datenschutz", "/legal/agb"];
}

export function getRouteSuggestions(currentPath: string): string[] {
  const matchResult = findMatchingRoute(currentPath);
  if (matchResult && matchResult.suggestedPath) {
    return [matchResult.suggestedPath];
  }
  return getDefaultSuggestions();
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
    "/bestaetigung": "/newsletter/confirmed"
  };
}

function handleFuzzyMatchRedirect(currentPath: string): string | null {
  const matchResult = findMatchingRoute(currentPath);
  
  if (matchResult && matchResult.fuzzyMatch && matchResult.suggestedPath) {
    console.log(`Weiterleitung von "${currentPath}" zu "${matchResult.suggestedPath}"`);
    return matchResult.suggestedPath;
  }
  return null;
}

function handleLegacyRedirect(currentPath: string): string | null {
  const legacyRoutes = getLegacyRouteMapping();
  const normalizedPath = normalizeRoute(currentPath);
  const newPath = legacyRoutes[`/${normalizedPath}`];
  if (newPath) {
    console.log(`Legacy-Weiterleitung von "${currentPath}" zu "${newPath}"`);
    return newPath;
  }
  return null;
}

export function shouldRedirect(currentPath: string): string | null {
  const fuzzyRedirect = handleFuzzyMatchRedirect(currentPath);
  if (fuzzyRedirect) return fuzzyRedirect;
  return handleLegacyRedirect(currentPath);
}
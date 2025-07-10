import Home from "@/pages/home";
import LegalNotice from "@/pages/legal-notice";
import PrivacyPolicy from "@/pages/privacy-policy";

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
  LEGAL_NOTICE: {
    paths: [
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
  }
};

export function normalizeRoute(path: string): string {
  return path
    .toLowerCase()
    .trim()
    .replace(/^\/+|\/+$/g, '') 
    .replace(/\s+/g, '-') 
    .replace(/[äöüß]/g, (char: string) => {
      const replacements: Record<string, string> = { 'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss' };
      return replacements[char] || char;
    });
}

export function findMatchingRoute(currentPath: string): RouteMatch | null {
  const normalizedPath = normalizeRoute(currentPath);
  for (const [routeName, route] of Object.entries(ROUTES)) {
    for (const path of route.paths) {
      if (normalizeRoute(path) === normalizedPath) {
        return { route, exactMatch: true };
      }
    }
  }
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

function isSimilarPath(path1: string, path2: string): boolean {
  if (Math.abs(path1.length - path2.length) > 3) return false;
  const commonSubstring = longestCommonSubstring(path1, path2);
  return commonSubstring.length >= Math.min(path1.length, path2.length) * 0.7;
}

function longestCommonSubstring(str1: string, str2: string): string {
  let longest = '';
  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j <= str1.length; j++) {
      const substr = str1.slice(i, j);
      if (str2.includes(substr) && substr.length > longest.length) {
        longest = substr;
      }
    }
  }
  return longest;
}

export function getRouteSuggestions(currentPath: string): string[] {
  const matchResult = findMatchingRoute(currentPath);
  if (matchResult && matchResult.suggestedPath) {
    return [matchResult.suggestedPath];
  }
  return ["/", "/impressum", "/datenschutz"];
}

export function shouldRedirect(currentPath: string): string | null {
  const matchResult = findMatchingRoute(currentPath);
  if (matchResult && matchResult.fuzzyMatch && matchResult.suggestedPath) {
    console.log(`Weiterleitung von "${currentPath}" zu "${matchResult.suggestedPath}"`);
    return matchResult.suggestedPath;
  }
  return null;
}
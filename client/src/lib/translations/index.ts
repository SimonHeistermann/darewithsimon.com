import { commonTranslations } from "./common";
import { formTranslations } from "./forms";
import { legalTranslations } from "./legal";
import { pageTranslations } from "./pages";

const mergedEn = {
  ...commonTranslations.en,
  ...formTranslations.en,
  ...legalTranslations.en,
  ...pageTranslations.en,
};

export type TranslationsType = typeof mergedEn;

function deepMerge(...objects: any[]): any {
  const result: any = {};
  for (const obj of objects) {
    for (const key in obj) {
      if (
        obj[key] &&
        typeof obj[key] === "object" &&
        !Array.isArray(obj[key])
      ) {
        result[key] = deepMerge(result[key] || {}, obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

export const translations: Record<"en" | "de", TranslationsType> = {
  en: deepMerge(
    commonTranslations.en,
    formTranslations.en,
    legalTranslations.en,
    pageTranslations.en
  ),
  de: deepMerge(
    commonTranslations.de,
    formTranslations.de,
    legalTranslations.de,
    pageTranslations.de
  )
};
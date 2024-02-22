import { defaultLang, translations, type TRANSLATIONS_TYPE } from "./ui";

export function getLangFromUrl(url: URL) {
  const [_, lang] = url.pathname.split("/");
  if (lang in translations) return lang as TRANSLATIONS_TYPE;
  return defaultLang;
}

export function useTranslations(lang: TRANSLATIONS_TYPE) {
  return translations[lang] || translations[defaultLang];
}

export const showDefaultLang = false;

export function useTranslatedPath(lang: TRANSLATIONS_TYPE) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

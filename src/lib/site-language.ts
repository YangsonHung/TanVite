import { useState } from "react";

export type SiteLanguage = "en" | "zh-CN";

const STORAGE_KEY = "tanvite-site-language";

function isSiteLanguage(value: string | null): value is SiteLanguage {
  return value === "en" || value === "zh-CN";
}

function getInitialLanguage(): SiteLanguage {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isSiteLanguage(stored)) {
    return stored;
  }

  return window.navigator.language.toLowerCase().startsWith("zh") ? "zh-CN" : "en";
}

export function useSiteLanguage() {
  const [language, setLanguageState] = useState<SiteLanguage>(getInitialLanguage);

  function setLanguage(nextLanguage: SiteLanguage) {
    setLanguageState(nextLanguage);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    }
  }

  return {
    language,
    setLanguage,
  };
}

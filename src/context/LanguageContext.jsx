import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import hi from "../locales/hi";

const STORAGE_KEY = "lang";
const LanguageContext = createContext({ lang: "en", isHi: false, setLang: () => {}, t: (s) => s });

const initialLang = () => {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "hi" || fromUrl === "en") return fromUrl;
    return localStorage.getItem(STORAGE_KEY) === "hi" ? "hi" : "en";
  } catch {
    return "en";
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);
  const isHi = lang === "hi";

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  // English text is the translation key; untranslated strings fall back to English.
  const t = useCallback(
    (text) => {
      if (!isHi || typeof text !== "string") return text;
      const translated = hi[text];
      if (translated === undefined && import.meta.env.DEV) console.debug("[i18n] missing hi:", text);
      return translated ?? text;
    },
    [isHi]
  );

  const value = useMemo(() => ({ lang, isHi, setLang, t }), [lang, isHi, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

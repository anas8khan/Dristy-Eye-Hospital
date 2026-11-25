import React from "react";
import { useLanguage } from "../../context/LanguageContext";

// Pill switch styled like the Afroj Charitable Trust site.
const LanguageToggle = ({ className = "", variant = "dark" }) => {
  const { lang, setLang } = useLanguage();
  const base =
    variant === "dark"
      ? "bg-white/10 text-slate-300"
      : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300";

  return (
    <div role="group" aria-label="Language" className={`inline-flex shrink-0 rounded-full p-0.5 ${base} ${className}`}>
      {[
        { code: "en", label: "EN" },
        { code: "hi", label: "हिंदी" },
      ].map((opt) => {
        const active = lang === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            lang={opt.code}
            aria-pressed={active}
            onClick={() => setLang(opt.code)}
            className={`rounded-full px-3 py-1 text-xs font-bold transition ${
              active ? "bg-leaf text-white shadow" : "hover:text-primary-600 dark:hover:text-white"
            } ${variant === "dark" && !active ? "hover:!text-white" : ""}`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;

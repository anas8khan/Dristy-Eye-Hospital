import React from "react";
import { useLanguage } from "../../context/LanguageContext";

// Pill switch; kept large so first-time users notice they can read the site in Hindi.
const LanguageToggle = ({ className = "", variant = "dark" }) => {
  const { lang, setLang } = useLanguage();
  const base =
    variant === "dark"
      ? "bg-white/15 text-primary-50 ring-1 ring-white/20"
      : "bg-cream-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";

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
            className={`rounded-full px-3.5 py-1 text-sm font-bold transition ${
              active ? "bg-sun-400 text-ink shadow" : "hover:text-primary-700 dark:hover:text-white"
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

import React, { useEffect } from "react";
import eye from "../assets/eye-logo.png";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

const Loading = () => {
  const { t } = useLanguage();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-cream-100 bg-dots dark:bg-slate-950"
    >
      <div className="relative grid h-28 w-28 place-items-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-sun-300/40" />
        <span className="absolute inset-0 animate-spin rounded-full border-[3px] border-primary-100 border-t-primary-600" />
        <img className="h-20 w-20 rounded-full bg-white p-2 shadow-soft" src={eye} alt="Dristy Eye Hospital Logo" />
      </div>
      <div className="text-center">
        <h1 className="font-display text-3xl font-extrabold text-ink sm:text-5xl">{t("Dristy Eye Hospital")}</h1>
        <p className="mt-2 text-base font-semibold text-leaf-700 sm:text-lg dark:text-leaf-300">{t("Your vision, our priority")}</p>
      </div>
    </motion.div>
  );
};

export default Loading;

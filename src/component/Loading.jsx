import React, { useEffect } from "react";
import eye from "../assets/eye-logo.png";
import { useLanguage } from "../context/LanguageContext";

const Loading = () => {
  const { t } = useLanguage();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-navy via-primary-900 to-primary-700">
      <div className="relative grid h-28 w-28 place-items-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/10" />
        <span className="absolute inset-0 rounded-full border-2 border-white/20 border-t-leaf animate-spin" />
        <img className="h-20 w-20 rounded-full bg-white p-2" src={eye} alt="Dristy Eye Hospital Logo" />
      </div>
      <div className="text-center text-white">
        <h1 className="font-display text-3xl font-extrabold !text-white sm:text-5xl">{t("Dristy Eye Hospital")}</h1>
        <p className="mt-3 text-base font-medium text-leaf-300 sm:text-lg">{t("Your vision, our priority")}</p>
      </div>
    </div>
  );
};

export default Loading;

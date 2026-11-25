import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdArrowRoundUp } from "react-icons/io";
import { contact } from "../siteConfig";
import { useLanguage } from "../context/LanguageContext";

const BackToTop = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on Whatsapp"
        className="group fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-lift transition hover:pr-5"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[6rem] sm:inline">
          {t("Whatsapp")}
        </span>
      </a>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-24 right-5 z-50 grid h-11 w-11 place-items-center rounded-full bg-primary-600 text-lg text-white shadow-lift transition-all duration-300 hover:bg-primary-700 ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <IoMdArrowRoundUp />
      </button>
    </>
  );
};

export default BackToTop;

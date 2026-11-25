import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";
import { contact } from "../siteConfig";
import { openDonation } from "./ui/donate";

// Sticky bottom action bar on phones: the primary actions always one tap away.
const MobileActionBar = () => {
  const { t } = useLanguage();
  const item =
    "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[0.7rem] font-semibold text-slate-600 transition active:scale-95 dark:text-slate-300";

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-slate-200 bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgba(11,22,64,.25)] backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-950/95"
    >
      <a href={contact.phoneHref} className={item}>
        <FaPhoneAlt className="text-lg text-primary-600 dark:text-primary-300" />
        {t("Call")}
      </a>
      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className={item}>
        <FaWhatsapp className="text-xl text-[#25D366]" />
        {t("Whatsapp")}
      </a>
      <Link to="/appointment" className={item}>
        <HiOutlineCalendarDays className="text-xl text-primary-600 dark:text-primary-300" />
        {t("Appointment")}
      </Link>
      <button type="button" onClick={openDonation} className={`${item} !text-white`}>
        <span className="flex w-full flex-col items-center gap-1 rounded-xl bg-leaf px-2 py-1.5 shadow-[0_6px_16px_-6px_rgba(34,184,58,.7)]">
          <FaHeart className="animate-heartbeat text-base" />
          {t("Donate")}
        </span>
      </button>
    </nav>
  );
};

export default MobileActionBar;

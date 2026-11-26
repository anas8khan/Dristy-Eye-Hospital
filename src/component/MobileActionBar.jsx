import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";
import { contact } from "../siteConfig";
import { openDonation } from "./ui/donate";

// Sticky bottom action bar on phones: the primary actions always one tap away, with large labels.
const MobileActionBar = () => {
  const { t } = useLanguage();
  const item =
    "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[0.8rem] font-bold text-ink transition active:scale-95 dark:text-slate-200";

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 flex items-end border-t border-cream-200 bg-white/95 px-1.5 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_28px_-14px_rgba(19,32,74,.35)] backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-950/95"
    >
      <a href={contact.phoneHref} className={item}>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf-50 text-lg text-leaf-700 dark:bg-leaf-700/20 dark:text-leaf-300">
          <FaPhoneAlt />
        </span>
        {t("Call")}
      </a>
      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className={item}>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#25D366]/10 text-xl text-[#1da851]">
          <FaWhatsapp />
        </span>
        {t("Whatsapp")}
      </a>
      <Link to="/appointment" className={`${item} -mt-5`}>
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-600 text-2xl text-white shadow-[0_12px_24px_-8px_rgba(29,63,209,.7)] ring-4 ring-white dark:ring-slate-950">
          <HiOutlineCalendarDays />
        </span>
        {t("Appointment")}
      </Link>
      <button type="button" onClick={openDonation} className={item}>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-sun-100 text-base text-red-600 dark:bg-sun-500/20">
          <FaHeart className="animate-heartbeat" />
        </span>
        {t("Donate")}
      </button>
    </nav>
  );
};

export default MobileActionBar;

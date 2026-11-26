import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { HiHome } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// Inner-page header with breadcrumb. Props kept compatible with the previous version.
// Light, warm header: title on the left, the page photo framed on the right.
const BackgroundWrapper = ({ title1, title2, img }) => {
  const { t } = useLanguage();
  return (
    <section className="relative isolate overflow-hidden border-b border-cream-200 bg-cream-100 dark:border-slate-800 dark:bg-slate-900">
      <div className="absolute inset-0 -z-10 bg-dots opacity-60" />
      <div className="absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-sun-200/60 blur-3xl dark:bg-sun-500/10" />

      <div className="container-x grid items-center gap-8 py-10 md:grid-cols-[1.3fr_1fr] md:py-14">
        <div>
          <motion.nav
            aria-label="Breadcrumb"
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-600 shadow-soft dark:bg-slate-800 dark:text-slate-300"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/" className="flex items-center gap-1.5 transition hover:text-primary-700" aria-label={`Navigate to ${title1}`}>
              <HiHome className="text-primary-600" />
              {t(title1)}
            </Link>
            <IoIosArrowForward className="text-slate-400" />
            <span className="max-w-[14rem] truncate text-sun-700 dark:text-sun-300">{t(title2)}</span>
          </motion.nav>
          <motion.h1
            className="max-w-3xl font-display text-[2.1rem] font-extrabold capitalize leading-[1.12] text-ink sm:text-5xl md:text-[3.4rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {t(title2)}
          </motion.h1>
          <motion.span
            aria-hidden="true"
            className="mt-5 flex gap-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <span className="h-1.5 w-12 rounded-full bg-primary-600" />
            <span className="h-1.5 w-6 rounded-full bg-leaf-500" />
            <span className="h-1.5 w-3 rounded-full bg-sun-400" />
          </motion.span>
        </div>

        {img && (
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[2rem] bg-sun-300/70 dark:bg-sun-500/20" />
            <img
              src={img}
              alt=""
              aria-hidden="true"
              className="relative h-56 w-full rounded-[2rem] border-4 border-white object-cover shadow-lift lg:h-64 dark:border-slate-800"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BackgroundWrapper;

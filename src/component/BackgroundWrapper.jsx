import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// Inner-page header with breadcrumb. Props kept compatible with the previous version.
const BackgroundWrapper = ({ title1, title2, img }) => {
  const { t } = useLanguage();
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {img && (
        <img
          src={img}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-primary-800/40" />
      <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-primary-500/30 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 -z-10 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />

      <motion.div
        className="container-x py-16 md:py-24"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-300">
          <Link to="/" className="transition hover:text-white" aria-label={`Navigate to ${title1}`}>
            {t(title1)}
          </Link>
          <IoIosArrowForward className="text-slate-500" />
          <span className="text-leaf-300">{t(title2)}</span>
        </nav>
        <h1 className="max-w-4xl font-display text-3xl font-extrabold capitalize leading-tight text-white sm:text-4xl md:text-5xl">
          {t(title2)}
        </h1>
      </motion.div>
    </section>
  );
};

export default BackgroundWrapper;

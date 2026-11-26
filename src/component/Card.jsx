import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";

// Treatment/service card
const Card = ({ data }) => {
  const { t } = useLanguage();
  if (!data) return null;

  return (
    <Link to={data.link} className="card card-hover group flex h-full flex-col p-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-100 dark:bg-slate-800">
        <img
          src={data.image}
          alt={t(data.title)}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <h3 className="text-xl font-bold leading-snug transition group-hover:text-primary-700 dark:group-hover:text-primary-300">
          {t(data.title)}
        </h3>
        <p className="mt-2 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">{t(data.description)}</p>
        <span className="mt-4 inline-flex items-center gap-2 self-start rounded-xl bg-primary-50 px-3.5 py-2 text-sm font-bold text-primary-700 transition group-hover:bg-primary-600 group-hover:text-white dark:bg-slate-800 dark:text-primary-300">
          {t("View More")}
          <HiArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
};

export default Card;

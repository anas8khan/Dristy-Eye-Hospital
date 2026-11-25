import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";

// Treatment/service card
const Card = ({ data }) => {
  const { t } = useLanguage();
  if (!data) return null;

  return (
    <Link
      to={data.link}
      className="card card-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={data.image}
          alt={t(data.title)}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold transition group-hover:text-primary-600 dark:group-hover:text-primary-300">
          {t(data.title)}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{t(data.description)}</p>
        <span className="mt-4 grid h-9 w-9 place-items-center rounded-full bg-primary-50 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white dark:bg-slate-800 dark:text-primary-300" aria-hidden="true">
          <HiArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
};

export default Card;

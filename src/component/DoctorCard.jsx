import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import ImageWithFallback from "./ui/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";

const DoctorCard = ({ data }) => {
  const { t } = useLanguage();
  return (
    <Link to={`/doctor-profile/${data.name}`} className="card card-hover group flex h-full flex-col p-3 text-center">
      <div className="relative aspect-[4/4.4] overflow-hidden rounded-2xl bg-gradient-to-b from-sun-100 via-cream-100 to-primary-50 dark:from-slate-800 dark:to-slate-900">
        <ImageWithFallback
          src={data.image}
          alt={data.displayName || data.name}
          name={data.displayName || data.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col items-center px-2 pb-2 pt-4">
        <h3 className="text-lg font-bold leading-snug transition group-hover:text-primary-700 dark:group-hover:text-primary-300">
          {data.displayName || data.name}
        </h3>
        {data.specialization && (
          <p className="mt-2 rounded-full bg-leaf-50 px-3 py-0.5 text-sm font-semibold text-leaf-700 dark:bg-leaf-700/20 dark:text-leaf-300">
            {data.specialization}
          </p>
        )}
        {data.qualification && <p className="mt-2 text-sm text-slate-500">{data.qualification}</p>}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-primary-700 dark:text-primary-300">
          {t("View Profile")}
          <HiArrowRight className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default DoctorCard;

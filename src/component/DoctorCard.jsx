import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import ImageWithFallback from "./ui/ImageWithFallback";

const DoctorCard = ({ data }) => {
  return (
    <Link
      to={`/doctor-profile/${data.name}`}
      className="card card-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-primary-50 to-primary-100 dark:from-slate-800 dark:to-slate-900">
        <ImageWithFallback
          src={data.image}
          alt={data.displayName || data.name}
          name={data.displayName || data.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 items-start justify-between gap-3 p-5">
        <div>
          <h3 className="text-lg font-bold transition group-hover:text-primary-600 dark:group-hover:text-primary-300">
            {data.displayName || data.name}
          </h3>
          {data.specialization && (
            <p className="mt-1 text-sm font-medium text-leaf-600 dark:text-leaf-400">{data.specialization}</p>
          )}
          {data.qualification && <p className="mt-1 text-xs text-slate-500">{data.qualification}</p>}
        </div>
        <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-50 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white dark:bg-slate-800 dark:text-primary-300">
          <HiArrowRight />
        </span>
      </div>
    </Link>
  );
};

export default DoctorCard;

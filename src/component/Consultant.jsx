import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { HiArrowRight, HiOutlineEye } from "react-icons/hi2";
import Reveal from "./ui/Reveal";
import { contact } from "../siteConfig";
import { useLanguage } from "../context/LanguageContext";

const Consultant = () => {
  const { t } = useLanguage();
  return (
    <section className="container-x py-12 md:py-16">
      <Reveal variant="zoom" className="relative overflow-hidden rounded-[2rem] bg-sun-400 px-6 py-10 shadow-warm md:px-12 md:py-12">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-sun-200/70 blur-2xl" />
        <HiOutlineEye className="absolute -bottom-10 -left-6 text-[11rem] text-sun-500/40" aria-hidden="true" />

        <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <h2 className="max-w-xl font-display text-[1.75rem] font-extrabold leading-tight !text-ink sm:text-3xl lg:text-4xl">
            {t("Are You Looking For Eye Care Consultation?")}
          </h2>

          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link to="/appointment" className="btn-primary !px-7 !py-4">
              {t("Book Appointment")} <HiArrowRight />
            </Link>
            <a href={contact.emergencyHref} className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-soft transition hover:-translate-y-0.5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-red-600 text-lg text-white">
                <FiPhoneCall className="animate-pulse" />
              </span>
              <span className="text-left">
                <span className="block text-sm font-semibold text-slate-600">{t("For Emergency Services")}</span>
                <span className="block whitespace-nowrap text-lg font-extrabold text-ink">{contact.emergency}</span>
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Consultant;

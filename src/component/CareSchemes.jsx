import React from "react";
import { Link } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { FaBuildingColumns, FaShieldHeart } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { partnerships } from "../partnerships";
import { useLanguage } from "../context/LanguageContext";

const icons = [
  { icon: <FaBuildingColumns />, cls: "bg-primary-600 text-white" },
  { icon: <FaShieldHeart />, cls: "bg-leaf-600 text-white" },
  { icon: <FaHandshake />, cls: "bg-sun-400 text-ink" },
];

// Government schemes and CSR support behind free/affordable treatment.
const CareSchemes = () => {
  const { t } = useLanguage();
  return (
    <section className="section section-cream">
      <div className="container-x">
        <SectionHeading eyebrow={t("Free & Affordable Care")} title={t("Partnerships for a Cause")} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {partnerships.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="card card-hover flex flex-col p-6">
              <span className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl shadow-soft ${icons[i].cls}`}>{icons[i].icon}</span>
              <h3 className="mt-5 text-xl font-bold leading-snug">{t(p.name)}</h3>
              <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">{t(p.details)}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Link to="/appointment" className="btn-primary !px-7 !py-4">
            {t("Book Your Surgery")} <HiArrowRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default CareSchemes;

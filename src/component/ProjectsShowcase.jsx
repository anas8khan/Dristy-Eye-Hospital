import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { useProjects } from "../localizedData";
import { useLanguage } from "../context/LanguageContext";

// Community programmes run by the hospital (data from the project pages).
const ProjectsShowcase = () => {
  const projects = useProjects();
  const { t } = useLanguage();
  return (
    <section className="section section-cream">
      <div className="container-x">
        <SectionHeading eyebrow={t("Our Projects")} title={t("Care Beyond the Hospital")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <Link to={`/projects/${p.name}`} className="card card-hover group flex h-full flex-col p-3">
                <div className={`overflow-hidden rounded-2xl bg-cream-100 dark:bg-slate-800 ${i < 2 ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
                  <img
                    src={p.bannerImg}
                    alt={t(p.name)}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                  <h3 className="text-xl font-bold leading-snug transition group-hover:text-primary-700 dark:group-hover:text-primary-300">{t(p.name)}</h3>
                  <p className="mt-1.5 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">{p.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary-700 dark:text-primary-300">
                    {t("View More")} <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;

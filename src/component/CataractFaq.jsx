import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { useTreatments } from "../localizedData";
import { useLanguage } from "../context/LanguageContext";

// Cataract FAQ (from the Cataract treatment page): the most common question patients have.
const CataractFaq = () => {
  const treatments = useTreatments();
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);
  const faq = treatments.find((x) => x.name === "Cataract")?.faq;
  if (!faq?.list?.length) return null;

  return (
    <section className="section bg-white dark:bg-slate-950">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <SectionHeading align="left" eyebrow={t("Cataract")} title={t("Common Questions About Cataract")} />
          <Reveal className="mt-8 hidden lg:block">
            <Link to="/treatment-details/Cataract" className="btn-outline">
              {t("View More")} <HiArrowRight />
            </Link>
          </Reveal>
        </div>
        <div className="space-y-3">
          {faq.list.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05} className={`card overflow-hidden transition ${isOpen ? "!border-sun-300" : ""}`}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className={`text-lg font-bold leading-snug ${isOpen ? "text-primary-700 dark:text-primary-300" : "text-ink dark:text-white"}`}>
                    {item.question}
                  </span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm transition ${isOpen ? "bg-sun-400 text-ink" : "bg-cream-100 text-ink dark:bg-slate-800 dark:text-slate-200"}`}>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 pb-5 text-[1.05rem] leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
          <Link to="/treatment-details/Cataract" className="btn-outline mt-2 w-full lg:hidden">
            {t("View More")} <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CataractFaq;

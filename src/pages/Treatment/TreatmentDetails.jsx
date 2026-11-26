import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import { useTreatments } from "../../localizedData";
import BackgroundWrapper from "../../component/BackgroundWrapper";
import Consultant from "../../component/Consultant";
import SectionHeading from "../../component/ui/SectionHeading";
import Reveal from "../../component/ui/Reveal";
import { useLanguage } from "../../context/LanguageContext";

const TreatmentDetails = () => {
  const { treatmentName } = useParams();
  const [openIndex, setOpenIndex] = useState(0);
  const treatmentData = useTreatments();
  const { t } = useLanguage();

  const treatment = useMemo(
    () => treatmentData.find((t) => t.name.toLowerCase() === treatmentName.toLowerCase()) || null,
    [treatmentData, treatmentName]
  );

  useEffect(() => {
    document.title = `${treatmentName} - Dristy Eye Hospital, Chouparan`;
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Dristy Eye Hospital a unit of Afroz Charitable trust is a non-profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged."
      );
    }
    setOpenIndex(0);
  }, [treatmentName]);

  if (!treatment) {
    return (
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-3xl font-bold text-red-500">{t("Treatment Details Not Found")}</h1>
        <Link to="/treatments" className="btn-primary">{t("View All Treatment")} <HiArrowRight /></Link>
      </div>
    );
  }

  return (
    <>
      <BackgroundWrapper title1={"Home"} title2={treatment.name} img={treatment.introduction.banner} />

      {/* Introduction */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <img
              src={treatment.introduction.image}
              alt={treatment.introduction.title}
              className="aspect-[4/3] w-full rounded-3xl bg-slate-100 object-cover shadow-lift dark:bg-slate-800"
            />
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <span className="eyebrow">{t(treatment.name)}</span>
            <h2 className="h-section mt-3">{treatment.introduction.title}</h2>
            <p className="lead mt-5">{treatment.introduction.content}</p>
            <Link to="/appointment" className="btn-primary mt-8">
              {t("Book Appointment")} <HiArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Symptoms */}
      <section className="section section-cream">
        <div className="container-x">
          <SectionHeading title={treatment.symptoms.title} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatment.symptoms.list.map((item, index) => (
              <Reveal key={index} delay={(index % 4) * 0.08} variant="zoom" className="group card card-hover flex flex-col items-center p-6 text-center">
                {treatment.symptoms.images?.[index] && (
                  <img
                    src={treatment.symptoms.images[index]}
                    alt={`Symptom ${index + 1}`}
                    loading="lazy"
                    className="mb-5 h-28 w-28 rounded-full object-cover ring-4 ring-primary-50 transition-transform duration-500 group-hover:scale-110 dark:ring-slate-800"
                  />
                )}
                <p className="font-semibold text-slate-800 dark:text-slate-100">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <h2 className="h-section">{treatment.prevention.title}</h2>
            <ul className="mt-8 space-y-4">
              {treatment.prevention.list.map((item, index) => (
                <Reveal as="li" key={index} delay={index * 0.07} variant="left" className="flex gap-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-leaf-100 text-xs text-leaf-700 dark:bg-leaf-700/30 dark:text-leaf-300">
                    <FaCheck />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </Reveal>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <img src={treatment.prevention.image} alt={treatment.prevention.title} loading="lazy" className="w-full rounded-3xl shadow-lift" />
          </Reveal>
        </div>
      </section>

      {/* Treatments */}
      <section className="section section-cream">
        <div className="container-x">
          <SectionHeading title={treatment.treatments.title} />
          <div className="mt-12 space-y-6">
            {treatment.treatments.list.map((item, index) => (
              <Reveal
                key={index}
                variant={index % 2 ? "right" : "left"}
                className={`card card-hover group grid items-center gap-6 overflow-hidden p-4 md:grid-cols-2 md:gap-10 md:p-6 ${
                  index % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="p-2 md:p-4">
                  <span className="font-display text-sm font-bold text-primary-600 dark:text-primary-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold">{item.name}</h3>
                  <p className="mt-3 leading-relaxed">{item.description}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-2xl bg-slate-100 object-cover transition-transform duration-500 group-hover:scale-[1.02] dark:bg-slate-800"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x max-w-4xl">
          <SectionHeading title={treatment.faq.title} />
          <div className="mt-12 space-y-3">
            {treatment.faq.list.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div key={index} className={`card overflow-hidden transition ${open ? "!border-primary-200" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className={`font-semibold ${open ? "text-primary-600 dark:text-primary-300" : "text-ink dark:text-white"}`}>
                      {faq.question}
                    </span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs transition ${open ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`}>
                      {open ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-5 pb-5 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Consultant />
    </>
  );
};

export default TreatmentDetails;

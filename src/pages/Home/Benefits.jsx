import React from "react";
import { FaUserDoctor, FaMicroscope, FaHandHoldingHeart, FaEye, FaGlasses, FaMagnifyingGlassPlus } from "react-icons/fa6";
import about from "../../assets/about.png";
import Reveal from "../../component/ui/Reveal";
import { useLanguage } from "../../context/LanguageContext";

const benefits = [
  { label: "Qualified Doctors", icon: <FaUserDoctor />, cls: "bg-primary-50 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200" },
  { label: "Modern Equipment", icon: <FaMicroscope />, cls: "bg-leaf-50 text-leaf-700 dark:bg-leaf-700/20 dark:text-leaf-300" },
  { label: "Individual Approach", icon: <FaHandHoldingHeart />, cls: "bg-sun-100 text-sun-700 dark:bg-sun-500/15 dark:text-sun-300" },
  { label: "Special Eye Exam", icon: <FaEye />, cls: "bg-primary-50 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200" },
  { label: "Contact Lens Service", icon: <FaGlasses />, cls: "bg-leaf-50 text-leaf-700 dark:bg-leaf-700/20 dark:text-leaf-300" },
  { label: "Special Retina Exam", icon: <FaMagnifyingGlassPlus />, cls: "bg-sun-100 text-sun-700 dark:bg-sun-500/15 dark:text-sun-300" },
];

const Benefits = () => {
  const { t } = useLanguage();
  return (
    <section className="section relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
        <Reveal variant="zoom" className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-6 rounded-full bg-sun-200 dark:bg-sun-500/15" />
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-200 dark:border-primary-800" />
          <img
            className="relative w-full animate-float-y transition-transform duration-500 [animation-duration:6s] hover:scale-[1.03]"
            src={about}
            style={{ animationDelay: "1s" }}
            alt="About"
            loading="lazy"
          />
        </Reveal>

        <div>
          <Reveal variant="right">
            <span className="eyebrow">{t("Why Choose Us?")}</span>
            <h2 className="h-section mt-3">{t("Benefits with Dristy Eye Hospital")}</h2>
            <p className="lead mt-4">
              {t("We pledge to make your visit at all of our locations an opportunity to provide timely and appropriate care for you and your family members.")}
            </p>
          </Reveal>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal
                as="li"
                key={b.label}
                delay={i * 0.05}
                className="card card-hover group flex flex-col items-center gap-3 p-4 text-center sm:p-5"
              >
                <span className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${b.cls}`}>
                  {b.icon}
                </span>
                <span className="font-bold leading-snug text-ink dark:text-slate-100">{t(b.label)}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

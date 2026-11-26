import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserDoctor, FaHospital, FaHeartPulse } from "react-icons/fa6";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { contact } from "../siteConfig";
import { useLanguage } from "../context/LanguageContext";

const steps = [
  { icon: <FaPhoneAlt />, title: "Call or Visit", text: "Call us or walk in at any of our three centres.", cls: "bg-leaf-600 text-white" },
  { icon: <FaUserDoctor />, title: "Eye Check-up", text: "Our specialists examine your eyes and explain the problem in simple words.", cls: "bg-primary-600 text-white" },
  { icon: <FaHospital />, title: "Treatment or Surgery", text: "Get the right treatment with modern equipment and experienced doctors.", cls: "bg-sun-400 text-ink" },
  { icon: <FaHeartPulse />, title: "Follow-up Care", text: "We stay with you after treatment so your vision stays clear.", cls: "bg-red-500 text-white" },
];

// Plain-language guide for first-time patients from villages and small towns.
const HowItWorks = () => {
  const { t } = useLanguage();
  return (
    <section className="section bg-white dark:bg-slate-950">
      <div className="container-x">
        <SectionHeading eyebrow={t("Simple Steps")} title={t("How to Get Treatment at Dristy")} />

        <ol className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <span aria-hidden="true" className="absolute left-[12%] right-[12%] top-9 hidden border-t-2 border-dashed border-primary-200 lg:block dark:border-primary-800" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.1} className="card card-hover relative flex flex-col items-center p-6 text-center">
              <span className={`relative grid h-[4.5rem] w-[4.5rem] place-items-center rounded-3xl text-2xl shadow-soft ${s.cls}`}>
                {s.icon}
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-white font-display text-sm font-extrabold text-ink shadow-soft ring-2 ring-cream-200 dark:bg-slate-800 dark:text-white">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 text-xl font-bold">{t(s.title)}</h3>
              <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">{t(s.text)}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link to="/appointment" className="btn-primary !px-7 !py-4">
            <HiOutlineCalendarDays className="text-xl" /> {t("Book Appointment")}
          </Link>
          <a href={contact.phoneHref} className="btn-leaf !px-7 !py-4">
            <FaPhoneAlt /> {contact.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;

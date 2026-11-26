import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUserMd } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import { MdOutlineMedicalServices } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";

const statsData = [
  { icon: <FaUserMd />, value: 9, label: "Expert Doctors", cls: "bg-primary-600 text-white", sub: "text-primary-100", plus: "text-sun-300" },
  { icon: <MdOutlineMedicalServices />, value: 10, label: "Services", cls: "bg-leaf-600 text-white", sub: "text-leaf-50", plus: "text-sun-200" },
  { icon: <FaStethoscope />, value: 70000, label: "Surgeries", cls: "bg-sun-400 text-ink", sub: "text-sun-800", plus: "text-primary-700" },
];

const StatsSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-12 md:py-16">
      <div className="container-x grid gap-4 sm:grid-cols-3 md:gap-6">
        {statsData.map((stat, i) => (
          <Reveal
            key={stat.label}
            variant="zoom"
            delay={i * 0.12}
            className={`group relative flex items-center gap-5 overflow-hidden rounded-[1.75rem] p-6 shadow-lift transition duration-300 hover:[translate:0_-4px] md:p-8 ${stat.cls}`}
          >
            <span className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10" aria-hidden="true" />
            <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/20 text-2xl transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 md:h-16 md:w-16 md:text-3xl">
              {stat.icon}
            </span>
            <div className="relative">
              <p className="font-display text-4xl font-extrabold leading-none md:text-5xl">
                {inView ? <CountUp start={0} end={stat.value} duration={2.5} separator="," /> : 0}
                {stat.value > 5 && <span className={stat.plus}>+</span>}
              </p>
              <p className={`mt-1.5 text-lg font-bold ${stat.sub}`}>{t(stat.label)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

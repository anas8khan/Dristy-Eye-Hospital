import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUserMd } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import { MdOutlineMedicalServices } from "react-icons/md";

const statsData = [
  { icon: <FaUserMd />, value: 9, label: "Expert Doctors" },
  { icon: <MdOutlineMedicalServices />, value: 10, label: "Services" },
  { icon: <FaStethoscope />, value: 70000, label: "Surgeries" },
];

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,63,209,.45),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(34,184,58,.25),transparent_40%)]" />
      <div className="container-x relative grid gap-6 sm:grid-cols-3">
        {statsData.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8"
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-2xl text-white shadow-lg md:h-16 md:w-16 md:text-3xl">
              {stat.icon}
            </span>
            <div>
              <p className="font-display text-3xl font-extrabold text-white md:text-4xl">
                {inView ? <CountUp start={0} end={stat.value} duration={2.5} separator="," /> : 0}
                {stat.value > 5 && <span className="text-leaf-400">+</span>}
              </p>
              <p className="mt-1 font-semibold text-slate-300">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

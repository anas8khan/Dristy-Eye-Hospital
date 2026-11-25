import React from "react";
import { NavLink } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import DoctorCard from "../../component/DoctorCard";
import SectionHeading from "../../component/ui/SectionHeading";
import Reveal from "../../component/ui/Reveal";
import { useDoctors } from "../../localizedData";
import { useLanguage } from "../../context/LanguageContext";

const Doctor = () => {
  const doctors = useDoctors();
  const { t } = useLanguage();

  return (
    <section className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-x">
        <SectionHeading eyebrow={t("Doctors")} title={t("Dristy Eye Hospital Specialist")} />

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {doctors.map((item, idx) => (
            <Reveal
              key={item.name}
              delay={(idx % 5) * 0.06}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-19.2px)]"
            >
              <DoctorCard data={item} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <NavLink to={"/doctor"} className="btn-outline">
            {t("View More")} <HiArrowRight />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Doctor;

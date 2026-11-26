import React, { useEffect } from "react";
import DoctorCard from "../component/DoctorCard";
import BackgroundWrapper from "../component/BackgroundWrapper";
import SectionHeading from "../component/ui/SectionHeading";
import Reveal from "../component/ui/Reveal";
import { useDoctors } from "../localizedData";
import img from "../assets/bgwrapper.jpg";
import { useLanguage } from "../context/LanguageContext";

const Doctor = () => {
  const doctors = useDoctors();
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Doctor - Dristy Eye Hospital, Chouparan";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged."
      );
    }
  }, []);

  return (
    <>
      <BackgroundWrapper title1={"Home"} title2={"Doctors"} img={img} />
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow={t("Doctors")} title={t("Dristy Eye Hospital Specialist")} />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {doctors?.map((item, idx) => (
              <Reveal key={item.name} delay={(idx % 4) * 0.06}>
                <DoctorCard data={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctor;

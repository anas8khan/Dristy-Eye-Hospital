import React from "react";
import nasreen from "../assets/Nasreen.png";
import shahrukh from "../assets/Shahrukh.png";
import omkar from "../assets/Onkar.png";
import talib from "../assets/Talib.png";
import roushan from "../assets/Roushan.png";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { useLanguage } from "../context/LanguageContext";

const leaders = [
  {
    name: "Nasreen Farha Khan",
    role: "Director & Member of the Board",
    description:
      "Nasreen Farha Khan is a respected Director and Member of the Board at Dristy Eye Hospital, contributing visionary leadership and strategic guidance to the organization. Her commitment to excellence and innovation drives the hospital's growth and success. Nasreen plays a pivotal role in shaping policies and initiatives that align with the hospital's mission to provide exceptional eye care to the community.",
    image: nasreen,
  },
  {
    name: "Shahrukh Khan",
    role: "Manager",
    description:
      "Shahrukh Khan is the dedicated Manager of Dristy Eye Hospital, overseeing operations with exceptional leadership and organizational skills. With a commitment to excellence, he ensures the hospital runs efficiently while maintaining the highest standards of patient care. Shahrukh plays a pivotal role in coordinating between departments, streamlining processes, and fostering a welcoming environment for patients and staff alike.",
    image: shahrukh,
  },
  {
    name: "Onkar Mishra",
    role: "Accountant",
    description:
      "Omkar Mishra is the reliable and detail-oriented Accountant at Dristy Eye Hospital, responsible for managing the hospital's financial operations. With expertise in accounting and financial management, he ensures accurate record-keeping, budgeting, and compliance. Omkar’s dedication to maintaining financial transparency plays a vital role in supporting the hospital’s mission of delivering quality eye care.",
    image: omkar,
  },
  {
    name: "Roushan Khan",
    role: "OPD Incharge",
    description:
      "Roushan Khan is the efficient and dedicated OPD Incharge at Dristy Eye Hospital, ensuring smooth operations in the Outpatient Department. With a strong focus on patient care and management, he plays a key role in organizing appointments, assisting patients, and maintaining a seamless workflow. Roushan’s commitment and attention to detail contribute significantly to delivering an excellent patient experience.",
    image: roushan,
  },
  {
    name: "Md Talib Ansari",
    role: "Sr. Optometrist & OT Incharge",
    description:
      "Md Talib Ansari is the skilled and experienced Senior Optometrist and OT Incharge at Dristy Eye Hospital. With a deep knowledge of eye care and surgical procedures, he excels in conducting precise eye examinations and ensuring smooth operations in the Operation Theatre. His expertise and dedication play a crucial role in delivering high-quality care and successful surgical outcomes for patients..",
    image: talib,
  },
];

const LeadersSection = () => {
  const { t } = useLanguage();
  return (
    <section className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-x">
        <SectionHeading eyebrow={t("Key People")} title={t("The unwavering strength and unity of our leaders.")} />
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {leaders.map((leader, i) => (
            <Reveal
              key={leader.name}
              delay={(i % 3) * 0.08}
              className="card card-hover flex w-full flex-col p-6 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={leader.image}
                  alt={t(leader.name)}
                  loading="lazy"
                  className="h-20 w-20 shrink-0 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold">{t(leader.name)}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-leaf-600 dark:text-leaf-400">{t(leader.role)}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{t(leader.description)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;

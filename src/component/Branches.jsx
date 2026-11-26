import React from "react";
import { FaClock, FaLocationDot, FaPhone, FaDiamondTurnRight } from "react-icons/fa6";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { useLanguage } from "../context/LanguageContext";

const branches = [
  {
    name: "DRISTY EYE HOSPITAL CHOUPARAN",
    timing: "9am to 5pm",
    hospitalName: "Dristy - Eye Hospital",
    address: "hospital Road, Tajpur, Vill- Tajpur, Chouparan, Dist-Hazaribagh, Jharkhand",
    phone: "+91 6546460704",
    tel: "+91 9006440240",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.1514502473765!2d85.2633946!3d24.3858069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f341dd12df49f9%3A0xfc3f8a7340ab8707!2sDRISTY%20EYE%20HOSPITAL%20CHOUPARAN!5e1!3m2!1sen!2sin!4v1734183642412!5m2!1sen!2sin",
    mapTitle: "Jharkhand Branch Map",
  },
  {
    name: "DRISTY EYE HOSPITAL VISION CENTRE (CHATRA)",
    timing: "9am to 5pm",
    hospitalName: "Dristy - Eye Hospital Vision Center",
    address: "Bypass Rd, Chatra, Jharkhand 825401",
    phone: "+91 7294040240",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.5063474366243!2d84.8763878!3d24.1912565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cac37c8330239%3A0x48ae1cc942ec2459!2sDRISTY%20EYE%20HOSPITAL%20VISION%20CENTRE%20CHATRA!5e1!3m2!1sen!2sin!4v1734184081717!5m2!1sen!2sin",
    mapTitle: "Jharkhand Branch Map",
  },
  {
    name: "DRISTY EYE HOSPITAL VISION CENTRE (KODERMA)",
    timing: "9am to 5pm",
    hospitalName: "Dristy - Eye Hospital Vision Center",
    address: "Bypass Road, Singhpur, Koderma, Jharkhand 825410",
    phone: "+91 8235297244",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.334884694364!2d85.59603299999999!3d24.467489999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f30b0063621bbf%3A0xf6c54e497fca5947!2sDristy%20Eye%20Hospital%20Vision%20centre(Koderma)!5e1!3m2!1sen!2sin!4v1734590431596!5m2!1sen!2sin",
    mapTitle: "Koderma Branch Map",
  },
];

const tel = (n) => `tel:${n.replace(/\s/g, "")}`;
const directions = (b) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${b.name} ${b.address}`)}`;

const Branches = () => {
  const { t } = useLanguage();
  return (
    <section className="section section-cream">
      <div className="container-x">
        <SectionHeading title={t("Our Branches")} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {branches.map((branch, i) => (
            <Reveal key={branch.name} delay={i * 0.08} className="card card-hover flex flex-col overflow-hidden">
              <div className="flex items-start gap-3 border-b border-cream-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-600 text-lg text-white shadow-soft">
                  <FaLocationDot />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-extrabold leading-snug">{t(branch.name)}</h3>
                  <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">{t(branch.hospitalName)}</p>
                </div>
              </div>
              <div className="aspect-[16/9] w-full bg-cream-200 dark:bg-slate-800">
                <iframe
                  src={branch.mapSrc}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={branch.mapTitle}
                ></iframe>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <span className="inline-flex items-center gap-2 self-start rounded-full bg-leaf-50 px-3 py-1 text-sm font-bold text-leaf-700 dark:bg-leaf-700/20 dark:text-leaf-300">
                  <FaClock /> {t("Timing:")} {t(branch.timing)}
                </span>
                <p className="flex gap-2.5 leading-relaxed">
                  <FaLocationDot className="mt-1 shrink-0 text-sun-600" />
                  <span className="capitalize">{t(branch.address)}</span>
                </p>
                <div className="mt-auto grid gap-2">
                  {[branch.phone, branch.tel].filter(Boolean).map((n) => (
                    <a key={n} href={tel(n)} className="btn-leaf w-full !justify-start !py-3">
                      <FaPhone className="text-sm" /> {t("Call:")} {n}
                    </a>
                  ))}
                  <a href={directions(branch)} target="_blank" rel="noopener noreferrer" className="btn-outline w-full !py-3">
                    <FaDiamondTurnRight /> {t("Get Directions")}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
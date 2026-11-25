import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import img from "../../assets/main1.jpg";
import BookingForm from "../../component/BookingForm";
import Reveal from "../../component/ui/Reveal";
import { useLanguage } from "../../context/LanguageContext";

const branchPhones = [
  { name: "Chouparan", phone: "+91 9006440240" },
  { name: "Koderma", phone: "+91 8235297244" },
  { name: "Chatra", phone: "+91 7294040240" },
];

const Book = () => {
  const { t } = useLanguage();
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary-100 blur-3xl dark:bg-primary-900/30" />
      <div className="container-x relative grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <span className="eyebrow">{t("Appointment")}</span>
          <h2 className="h-section mt-3">{t("Need a Doctor for Check-up?")}</h2>
          <p className="mt-4 text-lg font-medium text-primary-600 dark:text-primary-300">{t("Call us for immediate assistance")}</p>

          <ul className="mt-6 space-y-3">
            {branchPhones.map((b) => (
              <li key={b.name}>
                <a
                  href={`tel:${b.phone.replace(/\s/g, "")}`}
                  className="card card-hover flex items-center gap-4 px-5 py-4"
                >
                  <span className="icon-badge !h-10 !w-10 !text-base">
                    <FaPhoneAlt />
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {t(b.name)}: <span className="text-primary-600 dark:text-primary-300">{b.phone}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 hidden overflow-hidden rounded-2xl shadow-soft lg:block">
            <img src={img} alt="Doctor Consultation" loading="lazy" className="h-56 w-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="card p-6 sm:p-10 lg:col-span-3">
          <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
            {t("Get in Touch")} <span className="block text-primary-600 dark:text-primary-300">{t("for Professional Advice")}</span>
          </h3>
          <BookingForm className="mt-8" />
        </Reveal>
      </div>
    </section>
  );
};

export default Book;

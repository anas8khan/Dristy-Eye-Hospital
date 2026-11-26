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
    <section className="section">
      <div className="container-x">
        <Reveal className="card grid overflow-hidden lg:grid-cols-5">
          <div className="relative overflow-hidden bg-primary-700 p-6 text-white sm:p-10 lg:col-span-2">
            <img src={img} alt="Doctor Consultation" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-700/70 to-primary-800" />
            <div className="relative">
              <span className="eyebrow !bg-white/15 !text-sun-200">{t("Appointment")}</span>
              <h2 className="h-section mt-3 !text-white">{t("Need a Doctor for Check-up?")}</h2>
              <p className="mt-3 text-lg font-semibold text-sun-200">{t("Call us for immediate assistance")}</p>

              <ul className="mt-6 space-y-3">
                {branchPhones.map((b, i) => (
                  <Reveal as="li" key={b.name} delay={0.15 + i * 0.08} variant="left">
                    <a
                      href={`tel:${b.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-4 rounded-2xl bg-white px-4 py-3.5 text-ink shadow-soft transition hover:-translate-y-0.5"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-leaf-600 text-white">
                        <FaPhoneAlt />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-slate-500">{t(b.name)}</span>
                        <span className="block text-lg font-extrabold">{b.phone}</span>
                      </span>
                    </a>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:col-span-3">
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
              {t("Get in Touch")} <span className="text-primary-600 dark:text-primary-300">{t("for Professional Advice")}</span>
            </h3>
            <BookingForm className="mt-6" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Book;
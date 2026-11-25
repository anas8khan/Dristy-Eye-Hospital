import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import BackgroundWrapper from "../component/BackgroundWrapper";
import BookingForm from "../component/BookingForm";
import banner from "../assets/bgwrapper.jpg";
import { contact } from "../siteConfig";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "../component/ui/Reveal";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Appointment = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { t, isHi } = useLanguage();

  useEffect(() => {
    document.title = "Appointment - Dristy Eye Hospital, Chouparan";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged."
      );
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (now.getDate() !== currentDate.getDate()) setCurrentDate(now);
    }, 60000);
    return () => clearInterval(timer);
  }, [currentDate]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [
    ...Array.from({ length: firstDay }, (_, i) => <div key={`e-${i}`} />),
    ...Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const isToday = day === currentDate.getDate();
      const isSunday = new Date(year, month, day).getDay() === 0;
      return (
        <div
          key={day}
          className={`grid aspect-square place-items-center rounded-xl text-sm font-semibold ${
            isToday
              ? "bg-leaf text-white shadow-lg ring-4 ring-leaf/30 animate-pulse [animation-duration:2.5s]"
              : isSunday
              ? "text-white/40"
              : "text-white/90 hover:bg-white/10"
          }`}
        >
          {day}
        </div>
      );
    }),
  ];

  return (
    <>
      <BackgroundWrapper title1={"Home"} title2={"Appointment"} img={banner} />
      <section className="section">
        <div className="container-x grid items-start gap-8 lg:grid-cols-5">
          <Reveal as="aside" variant="left" className="space-y-6 lg:col-span-2">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-primary-900 to-primary-700 p-6 shadow-lift sm:p-8">
              <h2 className="text-center font-display text-2xl font-bold !text-white">
                {isHi ? currentDate.toLocaleDateString("hi-IN", { month: "long", year: "numeric" }) : `${monthNames[month]} ${year}`}
              </h2>
              <div className="mt-6 grid grid-cols-7 gap-1.5 text-center">
                {dayNames.map((d) => (
                  <div key={d} className="pb-2 text-xs font-bold uppercase tracking-wider text-primary-200">
                    {t(d)}
                  </div>
                ))}
                {cells}
              </div>
            </div>

            <ul className="card divide-y divide-slate-100 dark:divide-slate-800">
              <li className="flex items-center gap-4 p-5">
                <span className="icon-badge"><FaPhoneAlt /></span>
                <a href={contact.phoneHref} className="font-semibold text-slate-900 hover:text-primary-600 dark:text-white">{contact.phone}</a>
              </li>
              <li className="flex items-center gap-4 p-5">
                <span className="icon-badge"><MdOutlineMailOutline /></span>
                <a href={`mailto:${contact.email}`} className="font-semibold text-slate-900 hover:text-primary-600 dark:text-white">{contact.email}</a>
              </li>
              <li className="flex items-center gap-4 p-5">
                <span className="icon-badge"><FaClock /></span>
                <span className="font-semibold text-slate-900 dark:text-white">{t(contact.hours)}</span>
              </li>
            </ul>
          </Reveal>

          <Reveal variant="right" delay={0.1} className="card p-6 sm:p-10 lg:col-span-3">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              {t("Get in Touch")} <span className="block text-primary-600 dark:text-primary-300">{t("for Professional Advice")}</span>
            </h2>
            <BookingForm className="mt-8" />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Appointment;

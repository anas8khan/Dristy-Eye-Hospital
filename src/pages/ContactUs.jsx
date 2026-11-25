import React, { useEffect } from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import BackgroundWrapper from "../component/BackgroundWrapper";
import BookingForm from "../component/BookingForm";
import Branches from "../component/Branches";
import Reveal from "../component/ui/Reveal";
import banner from "../assets/bgwrapper.jpg";
import { useLanguage } from "../context/LanguageContext";

const contactDetails = [
  { icon: <FaPhoneVolume />, label: "Phone Number", value: "+91 9006440240", href: "tel:+919006440240" },
  { icon: <IoIosMail />, label: "Email", value: "info@dristyeyehospital.com", href: "mailto:info@dristyeyehospital.com" },
  {
    icon: <IoLocationSharp />,
    label: "Address",
    value: "Hospital Road, Tajpur, Vill- Tajpur, Chouparan, Dist-Hazaribagh, Jharkhand",
    href: "https://www.google.com/maps?q=Hospital+Road,+Tajpur,+Chouparan,+Hazaribagh,+Jharkhand",
  },
];

const ContactUs = () => {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = "Contact - Dristy Eye Hospital, Chouparan";
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
      <BackgroundWrapper title1={"Home"} title2={"Contact"} img={banner} />
      <section className="section">
        <div className="container-x grid items-start gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal variant="left" className="lg:col-span-2">
            <h2 className="font-display text-3xl font-extrabold capitalize leading-tight sm:text-4xl md:text-5xl">
              <span className="text-primary-600 dark:text-primary-300">{t("We love")} </span>{t("to hear from our customers")}
            </h2>
            <ul className="mt-10 space-y-4">
              {contactDetails.map((detail, i) => (
                <Reveal as="li" key={detail.label} delay={0.15 + i * 0.08} variant="left">
                  <a
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group card card-hover flex items-center gap-5 p-5"
                  >
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary-600 text-xl text-white transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
                      {detail.icon}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold uppercase tracking-wider text-slate-500">{t(detail.label)}</span>
                      <span className="mt-1 block font-semibold text-slate-900 dark:text-white">{t(detail.value)}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right" delay={0.1} className="card p-6 sm:p-10 lg:col-span-3">
            <BookingForm />
          </Reveal>
        </div>
      </section>
      <Branches />
    </>
  );
};

export default ContactUs;

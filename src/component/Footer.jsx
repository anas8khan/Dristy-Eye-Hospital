import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import logo from "../assets/logo.png";
import SocialLinks from "./ui/SocialLinks";
import { contact } from "../siteConfig";
import { useLanguage } from "../context/LanguageContext";

const usefulLinks = [
  { label: "Make Appointments", link: "/appointment" },
  { label: "Contact Us", link: "/contact" },
  { label: "Treatments", link: "/treatments" },
  { label: "About Us", link: "/about" },
  { label: "Our Doctors", link: "/doctor" },
];

const services = [
  { name: "Cataract", link: "/treatment-details/Cataract" },
  { name: "Pterygium", link: "/treatment-details/Pterygium" },
  { name: "Glaucoma", link: "/treatment-details/Glaucoma" },
  { name: "Uveitis", link: "/treatment-details/Uveitis" },
  { name: "Diabetic Retinopathy", link: "/treatment-details/Diabetic Retinopathy" },
  { name: "Hypertensive Retinopathy", link: "/treatment-details/Hypertensive Retinopathy" },
  { name: "Retinal Detachment", link: "/treatment-details/Retinal Detachment" },
  { name: "Dacryocystitis", link: "/treatment-details/Dacryocystitis" },
  { name: "Corneal Ulcer", link: "/treatment-details/Corneal Ulcer" },
  { name: "ICL-IPCL", link: "/treatment-details/ICL-IPCL" },
  { name: "Squint", link: "/treatment-details/Squint" },
];

const contactInfo = [
  { icon: <FaMapMarkerAlt />, label: "DRISTY EYE HOSPITAL", details: contact.address, href: contact.mapLink },
  { icon: <FaPhoneAlt />, label: "(+91) 9006440240", href: contact.phoneHref },
  { icon: <FaEnvelope />, label: contact.email, href: `mailto:${contact.email}` },
  { icon: <FaClock />, label: contact.hours },
];

const footerLinks = [
  { label: "About Us", link: "/about" },
  { label: "Treatments", link: "/treatments" },
];

const ColumnTitle = ({ children }) => (
  <h3 className="mb-5 flex items-center gap-3 text-base font-bold !text-white">
    <span className="h-[2px] w-5 rounded-full bg-leaf" />
    {children}
  </h3>
);

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative mt-0 overflow-hidden bg-navy text-slate-400">
      <div className="absolute -left-32 top-0 h-80 w-80 animate-float-slow rounded-full bg-primary-600/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 animate-float-slower rounded-full bg-leaf/10 blur-3xl" />

      <div className="container-x relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="mb-5 inline-block rounded-xl bg-white p-2.5">
            <img src={logo} alt="Dristy Eye Hospital logo" className="h-12 w-auto" />
          </div>
          <p className="max-w-sm text-sm leading-relaxed">
            {t("Founded with a mission to transform lives through vision care, Dristy Eye Hospital has become a beacon of hope for thousands of underprivileged individuals.")}
          </p>
          <SocialLinks className="mt-6" itemClassName="bg-white/5 text-slate-300 hover:bg-primary-600 hover:text-white" />
        </div>

        <div className="lg:col-span-2">
          <ColumnTitle>{t("Useful Links")}</ColumnTitle>
          <ul className="space-y-3 text-sm">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.link} className="link-underline transition hover:text-white">
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <ColumnTitle>{t("Our Services")}</ColumnTitle>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {services.map((service) => (
              <li key={service.name}>
                <Link to={service.link} className="link-underline transition hover:text-white">
                  {t(service.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <ColumnTitle>{t("Get In Touch")}</ColumnTitle>
          <ul className="space-y-4 text-sm">
            {contactInfo.map((item) => {
              const body = (
                <>
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-leaf-400">
                    {item.icon}
                  </span>
                  <span>
                    <strong className="block font-semibold text-slate-200">{t(item.label)}</strong>
                    {item.details && <span className="mt-0.5 block capitalize">{t(item.details)}</span>}
                  </span>
                </>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex gap-3 transition hover:text-white"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="flex gap-3">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm md:flex-row">
          <p>
            {t("Copyright ©")} 2024 <span className="font-semibold text-white">{t("Dristy Eye Hospital")}</span>. {t("All rights reserved.")}
          </p>
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <Link key={link.label} to={link.link} className="transition hover:text-white">
                {t(link.label)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

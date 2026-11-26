import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
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
  <h3 className="mb-5 flex items-center gap-3 text-lg font-bold !text-white">
    <span className="h-1.5 w-1.5 rounded-full bg-sun-400 ring-4 ring-sun-400/20" />
    {children}
  </h3>
);

const Footer = () => {
  const { t } = useLanguage();
  const helpItems = [
    { icon: <FaPhoneAlt />, label: "Call us for immediate assistance", value: contact.phone, href: contact.phoneHref, cls: "bg-leaf-600" },
    { icon: <HiOutlineCalendarDays />, label: "Need a Doctor for Check-up?", value: "Book Appointment", to: "/appointment", cls: "bg-primary-600" },
    { icon: <FiPhoneCall />, label: "For Emergency Services", value: contact.emergency, href: contact.emergencyHref, cls: "bg-red-600" },
  ];

  return (
    <footer className="relative mt-0 bg-ink text-[0.95rem] text-slate-300">
      {/* Help band */}
      <div className="border-b border-white/10 bg-gradient-to-r from-primary-700 to-primary-600">
        <div className="container-x grid gap-3 py-6 md:grid-cols-3 md:gap-5 md:py-8">
          {helpItems.map((item) => {
            const inner = (
              <>
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xl text-white shadow-lg ${item.cls}`}>{item.icon}</span>
                <span className="min-w-0">
                  <span className="block text-sm text-primary-100">{t(item.label)}</span>
                  <span className="block truncate text-lg font-extrabold text-white">{t(item.value)}</span>
                </span>
              </>
            );
            const cls = "flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 transition hover:bg-white/15";
            return item.to ? (
              <Link key={item.label} to={item.to} className={cls}>{inner}</Link>
            ) : (
              <a key={item.label} href={item.href} className={cls}>{inner}</a>
            );
          })}
        </div>
      </div>

      <div className="container-x relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="mb-5 inline-block rounded-2xl bg-white p-3">
            <img src={logo} alt="Dristy Eye Hospital logo" className="h-12 w-auto" />
          </div>
          <p className="max-w-sm leading-relaxed">
            {t("Founded with a mission to transform lives through vision care, Dristy Eye Hospital has become a beacon of hope for thousands of underprivileged individuals.")}
          </p>
          <SocialLinks className="mt-6" itemClassName="!h-10 !w-10 bg-white/10 text-white hover:bg-sun-400 hover:text-ink" />
        </div>

        <div className="lg:col-span-2">
          <ColumnTitle>{t("Useful Links")}</ColumnTitle>
          <ul className="space-y-3">
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
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
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
          <ul className="space-y-4">
            {contactInfo.map((item) => {
              const body = (
                <>
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-sun-300">
                    {item.icon}
                  </span>
                  <span>
                    <strong className="block font-semibold text-white">{t(item.label)}</strong>
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

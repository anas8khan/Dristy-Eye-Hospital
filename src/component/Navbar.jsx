import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaClock, FaHeart, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { HiArrowRight, HiOutlineCalendarDays } from "react-icons/hi2";
import logo from "../assets/logo.png";
import DarkMode from "./DarkMode";
import SocialLinks from "./ui/SocialLinks";
import LanguageToggle from "./ui/LanguageToggle";
import { useLanguage } from "../context/LanguageContext";
import { openDonation } from "./ui/donate";
import {
  aboutSubItems,
  contact,
  navItems,
  projectSubItems,
  treatmentSubItems,
} from "../siteConfig";

const linkBase =
  "relative inline-flex items-center gap-1 whitespace-nowrap rounded-xl px-2.5 py-2 text-[0.95rem] font-semibold transition-colors duration-200 xl:px-3";
const linkIdle = "text-ink hover:bg-cream-100 hover:text-primary-700 dark:text-slate-200 dark:hover:bg-slate-800";
const linkActive = "bg-primary-50 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200";

const Dropdown = ({ label, to, items, columns = 1, active }) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const show = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const Trigger = to ? NavLink : "button";
  const triggerProps = to ? { to } : { type: "button" };

  return (
    <li className="relative" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      <Trigger
        {...triggerProps}
        aria-haspopup="true"
        aria-expanded={open}
        className={`${linkBase} ${active ? linkActive : linkIdle}`}
      >
        {t(label)}
        <IoIosArrowDown className={`text-xs transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </Trigger>

      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
        }`}
      >
        <ul
          className={`card grid gap-1 border-t-4 !border-t-sun-400 p-2.5 ${columns === 2 ? "w-[32rem] grid-cols-2" : "w-72 grid-cols-1"}`}
        >
          {items.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[0.95rem] font-semibold transition ${
                    isActive
                      ? "bg-primary-50 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200"
                      : "text-slate-700 hover:bg-cream-100 hover:text-primary-700 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`
                }
              >
                {t(item.name)}
                <HiArrowRight className="-translate-x-1 text-sm text-sun-600 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const MobileGroup = ({ label, items, onNavigate }) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  return (
    <li className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3.5 text-left text-lg font-bold text-ink dark:text-slate-100"
      >
        {t(label)}
        <span className={`grid h-8 w-8 place-items-center rounded-full transition ${open ? "rotate-180 bg-primary-600 text-white" : "bg-cream-100 text-ink dark:bg-slate-800 dark:text-white"}`}>
          <IoIosArrowDown />
        </span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"}`}>
        <ul className="min-h-0 overflow-hidden px-2">
          {items.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-2.5 text-base ${
                    isActive ? "bg-primary-50 font-bold text-primary-700 dark:bg-primary-900/40 dark:text-primary-200" : "text-slate-700 dark:text-slate-300"
                  }`
                }
              >
                {t(item.name)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    const onResize = () => window.innerWidth >= 1024 && setIsSidebarOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
  }, [isSidebarOpen]);

  useEffect(() => setIsSidebarOpen(false), [pathname]);

  const closeSidebar = () => setIsSidebarOpen(false);

  const isAboutActive = aboutSubItems.some((i) => pathname === i.path);
  const isProjectActive = pathname.startsWith("/projects");
  const isTreatmentActive = pathname.startsWith("/treatment");

  const drawerActions = [
    { label: "Appointment", icon: <HiOutlineCalendarDays />, to: "/appointment", cls: "bg-primary-600 text-white" },
    { label: "Call", icon: <FaPhoneAlt />, href: contact.phoneHref, cls: "bg-leaf-600 text-white" },
    { label: "Whatsapp", icon: <FaWhatsapp />, href: contact.whatsapp, external: true, cls: "bg-[#25D366] text-white" },
    { label: "Donate", icon: <FaHeart />, onClick: openDonation, cls: "bg-sun-400 text-ink" },
  ];

  return (
    <>
      {/* Top info strip: phone, timing and language are always visible, on every screen size */}
      <div className="bg-primary-700 text-[0.85rem] text-primary-50">
        <div className="container-x flex items-center justify-between gap-3 py-2">
          <div className="flex min-w-0 items-center gap-5">
            <a href={contact.phoneHref} className="flex shrink-0 items-center gap-2 whitespace-nowrap font-bold text-white">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-[0.7rem]">
                <FaPhoneAlt />
              </span>
              <span className="hidden sm:inline">{t("Call:")}</span> {contact.phone}
            </a>
            <span className="hidden items-center gap-2 whitespace-nowrap md:flex">
              <FaClock className="text-sun-300" />
              {t(contact.hours)}
            </span>
            <a href={`mailto:${contact.email}`} className="hidden items-center gap-2 whitespace-nowrap transition hover:text-white xl:flex">
              <MdOutlineMailOutline className="text-base text-sun-300" />
              {contact.email}
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <SocialLinks className="hidden lg:flex" itemClassName="!h-7 !w-7 text-primary-100 hover:bg-white/15 hover:text-white" />
            <LanguageToggle />
            <button
              type="button"
              onClick={openDonation}
              className="hidden items-center gap-1.5 rounded-full bg-sun-400 px-4 py-1.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-sun-300 sm:inline-flex"
            >
              <FaHeart className="animate-heartbeat text-[0.75rem] text-red-600" />
              {t("Donate")}
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "border-cream-200 bg-white/90 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90"
            : "border-cream-200 bg-white dark:border-slate-800 dark:bg-slate-950"
        }`}
      >
        <nav className="container-x flex items-center justify-between gap-3 py-2.5" aria-label="Main">
          <Link to="/" className="shrink-0" aria-label="Dristy Eye Hospital – Home">
            <img
              className={`w-auto transition-all duration-300 dark:rounded-lg dark:bg-white dark:p-1 ${isScrolled ? "h-10 md:h-12" : "h-11 md:h-14"}`}
              src={logo}
              alt="Dristy Eye Hospital logo"
            />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            <li>
              <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>
                {t("Home")}
              </NavLink>
            </li>
            <Dropdown label="About Us" to="/about" items={aboutSubItems} active={isAboutActive} />
            <Dropdown label="Our Projects" items={projectSubItems} active={isProjectActive} />
            <Dropdown label="Treatments" to="/treatments" items={treatmentSubItems} columns={2} active={isTreatmentActive} />
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path} className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>
                  {t(item.name)}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <DarkMode className="hidden sm:grid" />
            <a
              href={contact.phoneHref}
              aria-label={`${t("Call")} ${contact.phone}`}
              className="grid h-11 w-11 place-items-center rounded-2xl bg-leaf-600 text-white shadow-[0_10px_22px_-8px_rgba(22,150,44,.6)] transition hover:bg-leaf-700 md:hidden"
            >
              <FaPhoneAlt />
            </a>
            <Link to="/appointment" className="btn-primary hidden !px-5 !py-2.5 md:inline-flex">
              <HiOutlineCalendarDays className="text-lg" />
              {t("Appointment")}
            </Link>
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center rounded-2xl bg-cream-100 text-2xl text-ink lg:hidden dark:bg-slate-800 dark:text-white"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col bg-cream-100 shadow-2xl transition-transform duration-300 lg:hidden dark:bg-slate-950 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between border-b border-cream-200 bg-white px-5 py-3.5 dark:border-slate-800 dark:bg-slate-900">
          <Link to="/" onClick={closeSidebar}>
            <img src={logo} alt="logo" className="h-10 w-auto dark:rounded dark:bg-white dark:p-1" />
          </Link>
          <div className="flex items-center gap-2">
            <DarkMode />
            <button
              type="button"
              onClick={closeSidebar}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full bg-cream-100 text-xl text-ink dark:bg-slate-800 dark:text-white"
            >
              <HiX />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {/* Big one-tap actions */}
          <div className="grid grid-cols-2 gap-3">
            {drawerActions.map((a) => {
              const cls = `flex flex-col items-center justify-center gap-2 rounded-2xl px-3 py-4 text-base font-bold shadow-soft transition active:scale-95 ${a.cls}`;
              const body = (
                <>
                  <span className="text-2xl">{a.icon}</span>
                  {t(a.label)}
                </>
              );
              if (a.to) return <Link key={a.label} to={a.to} onClick={closeSidebar} className={cls}>{body}</Link>;
              if (a.href)
                return (
                  <a key={a.label} href={a.href} target={a.external ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
                    {body}
                  </a>
                );
              return (
                <button
                  key={a.label}
                  type="button"
                  onClick={() => {
                    closeSidebar();
                    a.onClick();
                  }}
                  className={cls}
                >
                  {body}
                </button>
              );
            })}
          </div>

          <ul className="mt-5 space-y-2">
            <li className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900">
              <NavLink to="/" end onClick={closeSidebar} className={({ isActive }) => `block px-4 py-3.5 text-lg font-bold ${isActive ? "text-primary-700" : "text-ink dark:text-slate-100"}`}>
                {t("Home")}
              </NavLink>
            </li>
            <MobileGroup label="About Us" items={aboutSubItems} onNavigate={closeSidebar} />
            <MobileGroup label="Our Projects" items={projectSubItems} onNavigate={closeSidebar} />
            <MobileGroup label="Treatments" items={treatmentSubItems} onNavigate={closeSidebar} />
            {navItems.map((item) => (
              <li key={item.name} className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900">
                <NavLink
                  to={item.path}
                  onClick={closeSidebar}
                  className={({ isActive }) => `block px-4 py-3.5 text-lg font-bold ${isActive ? "text-primary-700" : "text-ink dark:text-slate-100"}`}
                >
                  {t(item.name)}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-5 space-y-1 rounded-2xl bg-white p-4 text-[0.95rem] dark:bg-slate-900">
            <h3 className="mb-1 text-base font-bold">{t("Contact Us")}</h3>
            <p>{t("Phone:")} {contact.phone}</p>
            <p>{t("Email:")} dristyeyehospital92@gmail.com</p>
            <SocialLinks className="pt-3" itemClassName="bg-cream-100 text-slate-600 hover:bg-primary-600 hover:text-white dark:bg-slate-800 dark:text-slate-200" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;

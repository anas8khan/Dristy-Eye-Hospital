import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import logo from "../assets/logo.png";
import DarkMode from "./DarkMode";
import SocialLinks from "./ui/SocialLinks";
import {
  aboutSubItems,
  contact,
  navItems,
  projectSubItems,
  treatmentSubItems,
} from "../siteConfig";

const linkBase =
  "relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-[0.92rem] font-semibold transition-colors duration-200";
const linkIdle = "text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-300";
const linkActive = "text-primary-600 dark:text-primary-300";

const Dropdown = ({ label, to, items, columns = 1, active }) => {
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
        {label}
        <IoIosArrowDown className={`text-xs transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </Trigger>

      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
        }`}
      >
        <ul
          className={`card grid gap-1 p-2 ${columns === 2 ? "w-[30rem] grid-cols-2" : "w-64 grid-cols-1"}`}
        >
          {items.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-primary-50 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200"
                      : "text-slate-700 hover:bg-slate-50 hover:text-primary-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`
                }
              >
                {item.name}
                <HiArrowRight className="-translate-x-1 text-xs opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const MobileGroup = ({ label, items, onNavigate }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-slate-100 dark:border-slate-800">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3.5 text-left text-base font-semibold text-slate-800 dark:text-slate-100"
      >
        {label}
        <IoIosArrowDown className={`transition-transform duration-300 ${open ? "rotate-180 text-primary-600" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"}`}>
        <ul className="min-h-0 overflow-hidden">
          {items.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm ${
                    isActive ? "bg-primary-50 font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-200" : "text-slate-600 dark:text-slate-300"
                  }`
                }
              >
                {item.name}
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

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden bg-navy text-[0.8rem] text-slate-300 lg:block">
        <div className="container-x flex items-center justify-between gap-6 py-2.5">
          <div className="flex items-center gap-6">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 transition hover:text-white">
              <MdOutlineMailOutline className="text-base text-leaf-400" />
              {contact.email}
            </a>
            <a
              href={contact.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <FaLocationDot className="text-leaf-400" />
              {contact.address}
            </a>
            <a href={contact.phoneHref} className="flex items-center gap-2 transition hover:text-white">
              <FaPhoneAlt className="text-leaf-400" />
              Call: {contact.phone}
            </a>
          </div>
          <SocialLinks itemClassName="!h-7 !w-7 text-slate-400 hover:bg-white/10 hover:text-white" />
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "border-slate-200/80 bg-white/85 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85"
            : "border-transparent bg-white dark:bg-slate-950"
        }`}
      >
        <nav className="container-x flex items-center justify-between gap-4 py-3" aria-label="Main">
          <Link to="/" className="shrink-0" aria-label="Dristy Eye Hospital – Home">
            <img
              className={`w-auto transition-all duration-300 dark:rounded-lg dark:bg-white dark:p-1 ${isScrolled ? "h-10 md:h-11" : "h-11 md:h-14"}`}
              src={logo}
              alt="Dristy Eye Hospital logo"
            />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            <li>
              <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>
                Home
              </NavLink>
            </li>
            <Dropdown label="About Us" to="/about" items={aboutSubItems} active={isAboutActive} />
            <Dropdown label="Our Projects" items={projectSubItems} active={isProjectActive} />
            <Dropdown label="Treatments" to="/treatments" items={treatmentSubItems} columns={2} active={isTreatmentActive} />
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path} className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <DarkMode />
            <Link to="/appointment" className="btn-primary hidden !px-5 !py-2.5 md:inline-flex">
              Appointment
              <HiArrowRight />
            </Link>
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full bg-primary-50 text-2xl text-primary-700 lg:hidden dark:bg-slate-800 dark:text-white"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-navy/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden dark:bg-slate-950 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
          <Link to="/" onClick={closeSidebar}>
            <img src={logo} alt="logo" className="h-10 w-auto dark:rounded dark:bg-white dark:p-1" />
          </Link>
          <button
            type="button"
            onClick={closeSidebar}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-xl text-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <HiX />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-5">
          <li className="border-b border-slate-100 dark:border-slate-800">
            <NavLink to="/" end onClick={closeSidebar} className={({ isActive }) => `block py-3.5 text-base font-semibold ${isActive ? "text-primary-600" : "text-slate-800 dark:text-slate-100"}`}>
              Home
            </NavLink>
          </li>
          <MobileGroup label="About Us" items={aboutSubItems} onNavigate={closeSidebar} />
          <MobileGroup label="Our Projects" items={projectSubItems} onNavigate={closeSidebar} />
          <MobileGroup label="Treatments" items={treatmentSubItems} onNavigate={closeSidebar} />
          {navItems.map((item) => (
            <li key={item.name} className="border-b border-slate-100 dark:border-slate-800">
              <NavLink
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) => `block py-3.5 text-base font-semibold ${isActive ? "text-primary-600" : "text-slate-800 dark:text-slate-100"}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="space-y-4 border-t border-slate-100 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
          <Link to="/appointment" onClick={closeSidebar} className="btn-primary w-full">
            Appointment <HiArrowRight />
          </Link>
          <div>
            <h3 className="mb-1 text-sm font-bold">Contact Us</h3>
            <p className="text-sm">Phone: {contact.phone}</p>
            <p className="text-sm">Email: dristyeyehospital92@gmail.com</p>
          </div>
          <SocialLinks itemClassName="bg-white text-slate-600 shadow-sm hover:bg-primary-600 hover:text-white dark:bg-slate-800 dark:text-slate-200" />
        </div>
      </aside>
    </>
  );
};

export default Navbar;

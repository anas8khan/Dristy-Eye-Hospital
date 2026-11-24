import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi2";
import Reveal from "./ui/Reveal";
import { contact } from "../siteConfig";

const Consultant = () => {
  return (
    <section className="container-x py-12 md:py-16">
      <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 px-6 py-12 text-white shadow-lift md:px-14 md:py-14">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-leaf/30 blur-3xl" />
        <svg className="absolute right-0 top-0 h-full opacity-[0.07]" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="150" cy="50" r="120" fill="none" stroke="white" strokeWidth="30" />
        </svg>

        <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <h2 className="max-w-xl font-display text-2xl font-extrabold leading-tight !text-white sm:text-3xl lg:text-4xl">
            Are You Looking For Eye Care Consultation?
          </h2>

          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <Link to="/appointment" className="btn-light !px-7 !py-3.5">
              Book Appointment <HiArrowRight />
            </Link>
            <a href={contact.emergencyHref} className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15 text-xl">
                <FiPhoneCall className="animate-pulse" />
              </span>
              <span className="text-left">
                <span className="block text-xs font-medium uppercase tracking-wider text-primary-100">
                  For Emergency Services
                </span>
                <span className="block text-xl font-bold">{contact.emergency}</span>
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Consultant;

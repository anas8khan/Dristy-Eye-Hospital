import React from "react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const AccentBar = ({ center }) => (
  <motion.span
    aria-hidden="true"
    className={`flex gap-1.5 ${center ? "justify-center" : ""}`}
    initial={{ opacity: 0, scaleX: 0.4 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
  >
    <span className="h-1.5 w-10 rounded-full bg-primary-600" />
    <span className="h-1.5 w-5 rounded-full bg-leaf-500" />
    <span className="h-1.5 w-2.5 rounded-full bg-sun-400" />
  </motion.span>
);

const SectionHeading = ({ eyebrow, title, subtitle, align = "center", light = false, className = "" }) => {
  const center = align === "center";
  const alignment = center ? "mx-auto text-center items-center" : "items-start text-left";
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && <span className={`eyebrow ${light ? "!bg-white/15 !text-sun-200" : ""}`}>{eyebrow}</span>}
      {title && <h2 className={`h-section ${light ? "!text-white" : ""}`}>{title}</h2>}
      {title && <AccentBar center={center} />}
      {subtitle && <p className={`lead mt-1 ${light ? "!text-slate-200" : ""}`}>{subtitle}</p>}
    </Reveal>
  );
};

export default SectionHeading;

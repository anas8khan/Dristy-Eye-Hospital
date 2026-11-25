import React from "react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, subtitle, align = "center", light = false, className = "" }) => {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start text-left";
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow eyebrow--animated ${light ? "!text-leaf-300" : ""}`}>
          <motion.span
            aria-hidden="true"
            className="h-[2px] w-6 origin-left rounded-full bg-leaf"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          />
          {eyebrow}
        </span>
      )}
      {title && <h2 className={`h-section ${light ? "!text-white" : ""}`}>{title}</h2>}
      {subtitle && <p className={`lead ${light ? "!text-slate-300" : ""}`}>{subtitle}</p>}
    </Reveal>
  );
};

export default SectionHeading;

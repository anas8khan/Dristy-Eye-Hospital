import React from "react";
import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, subtitle, align = "center", light = false, className = "" }) => {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start text-left";
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && <span className={`eyebrow ${light ? "!text-leaf-300" : ""}`}>{eyebrow}</span>}
      {title && <h2 className={`h-section ${light ? "!text-white" : ""}`}>{title}</h2>}
      {subtitle && <p className={`lead ${light ? "!text-slate-300" : ""}`}>{subtitle}</p>}
    </Reveal>
  );
};

export default SectionHeading;

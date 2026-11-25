import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Thin brand-coloured reading-progress bar pinned to the top of the viewport.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-primary-600 via-primary-400 to-leaf"
    />
  );
};

export default ScrollProgress;

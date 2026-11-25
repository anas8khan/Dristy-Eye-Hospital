import React from "react";
import { motion } from "framer-motion";

const offsets = {
  up: (d) => ({ y: d }),
  down: (d) => ({ y: -d }),
  left: (d) => ({ x: -d * 1.6 }),
  right: (d) => ({ x: d * 1.6 }),
  zoom: () => ({ scale: 0.92 }),
  fade: () => ({}),
};

// Scroll-triggered entrance. `variant` controls direction: up | down | left | right | zoom | fade.
const Reveal = ({ children, delay = 0, y = 24, variant = "up", className = "", as = "div", ...rest }) => {
  const Component = motion[as] || motion.div;
  const from = (offsets[variant] || offsets.up)(y);
  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Reveal;

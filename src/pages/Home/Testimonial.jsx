import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeInScale } from "../../component/animations";

const Testimonial = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-2 w-full bg-transparent dark:bg-gradient-to-r from-slate-500 to-slate-800  py-8 transition-all duration-300">
      <div className="mb-10">
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInScale}
            className="text-2xl font-semibold dark:text-gray-200 text-primary uppercase"
          >
            Testimonial
          </motion.h1>
          <motion.h5
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInScale}
            className="text-3xl sm:text-4xl dark:text-gray-300 text-blue-950 font-bold sm:text-start text-center"
          >
            What Our Patients Say About Us
          </motion.h5>
        </div>
      </div>

      <div className="px-6 lg:px-20">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInScale}
        >
          <div
            className="tagembed-widget"
            style={{ width: "100%", height: "100%" }}
            data-widget-id="2142643"
            data-tags="false"
            view-url="https://widget.tagembed.com/2142643"
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;

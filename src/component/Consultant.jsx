import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../component/animations";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

const Consultant = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div className="relative w-full my-2 lg:p-20 p-6 bg-gradient-to-r from-gray-900 to-indigo-800 overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute top-0 left-10 w-40 h-40 rounded-full bg-blue-500 opacity-30 blur-2xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-52 h-52 rounded-full bg-violet-500 opacity-30 blur-2xl animate-pulse pointer-events-none"></div>

      <motion.div
        ref={ref}
        className="max-w-7xl flex flex-col lg:flex-row items-center lg:justify-between mx-auto gap-6 lg:gap-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            className="lg:text-4xl sm:text-3xl text-2xl font-extrabold text-white tracking-wide"
            variants={fadeIn}
          >
            Are You Looking For Eye Care Consultation?
          </motion.h1>
        </div>

        {/* Button and Contact Section */}
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <Link to={"/appointment"}>
            <motion.button
              className="bg-primary lg:px-8 px-6 lg:py-3 py-2 text-lg font-medium rounded-lg text-white shadow-lg transform hover:scale-105 hover:bg-blue-900 duration-300 transition-all"
              variants={fadeIn}
            >
              Book Appointment
            </motion.button>
          </Link>
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              className="flex items-center gap-3 lg:text-2xl sm:text-xl text-lg font-semibold text-white"
              variants={fadeIn}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <FiPhoneCall className="text-blue-600 animate-pulse" />
              +91 6546 460 704
            </motion.div>
            <motion.p
              className="mt-2 lg:text-lg sm:text-md text-sm text-gray-300 font-medium"
              variants={fadeIn}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              For Emergency Services
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Consultant;

import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerText } from "../../component/animations";
import about from "../../assets/about.png";

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerText}
      className="mt-8 w-full transition-all duration-300 bg-gradient-to-r from-black to-violet-600"
    >
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center px-4 lg:px-8 py-8">
        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
  className="w-[80%] lg:w-[70%] max-w-sm transform transition-transform duration-300 hover:scale-105"
  src={about}
            alt="About"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="lg:w-1/2 flex flex-col lg:items-start items-center"
          variants={staggerText}
        >
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left mb-6 leading-tight"
            variants={staggerText}
          >
            Benefits with Dristy Eye Hospital
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base lg:text-lg font-medium text-white text-center lg:text-left mb-6"
            variants={staggerText}
          >
            We pledge to make your visit at all of our locations an opportunity
            to provide timely and appropriate care for you and your family
            members.
          </motion.p>

          <motion.div className="w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Qualified Doctors",
                "Modern Equipment",
                "Individual Approach",
                "Special Eye Exam",
                "Contact Lens Service",
                "Special Retina Exam",
              ].map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 bg-violet-700/70 p-4 rounded-lg shadow-md backdrop-blur-md"
                  variants={staggerText}
                >
                  <FaCheck className="text-green-400 text-lg" />
                  <span className="text-sm sm:text-base text-gray-100">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Benefits;

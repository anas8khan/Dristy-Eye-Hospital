import React from "react";
import img from "../../assets/main1.jpg";
import blob from "../../assets/blob.png";
import BookingForm from "../../component/BookingForm";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { slideInRight, slideInLeft } from "../../component/animations";

const Book = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div
      style={{ backgroundImage: `url(${blob})` }}
      className="w-full bg-cover bg-center dark:bg-black py-20"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInLeft}
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between px-6 lg:px-12"
      >
        <div className="w-full lg:w-[40%] py-6">
          <motion.h1
            variants={slideInRight}
            className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6 dark:text-gray-200 text-center"
          >
            Need a Doctor for Check-up?
          </motion.h1>
          <motion.p
            variants={slideInRight}
            className="text-lg lg:text-xl font-medium text-primary mb-3 dark:text-gray-300 text-center"
          >
            Call us for immediate assistance
          </motion.p>
          <div className="text-center space-y-2">
            <motion.p
              variants={slideInRight}
              className="text-lg font-semibold text-primary dark:text-gray-300"
            >
              Chouparan: +91 9006440240
            </motion.p>
            <motion.p
              variants={slideInRight}
              className="text-lg font-semibold text-primary dark:text-gray-300"
            >
              Koderma: +91 8235297244
            </motion.p>
            <motion.p
              variants={slideInRight}
              className="text-lg font-semibold text-primary dark:text-gray-300"
            >
              Chatra: +91 7294040240
            </motion.p>
          </div>
          <div className="mt-6 bg-white p-3 rounded-xl shadow-lg max-w-xs mx-auto">
            <img
              src={img}
              alt="Doctor Consultation"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full lg:w-[45%] bg-white dark:bg-gradient-to-r from-slate-700 to-slate-800 p-8 rounded-lg shadow-md">
          <motion.h1
            variants={slideInLeft}
            className="text-2xl lg:text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6"
          >
            Get in Touch
            <br />
            <span className="text-primary dark:text-gray-300">
              for Professional Advice
            </span>
          </motion.h1>
          <BookingForm />
        </div>
      </motion.div>
    </div>
  );
};

export default Book;

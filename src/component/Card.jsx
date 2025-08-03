import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer"; 
import { slideInLeft, slideInRight } from "../component/animations"; 
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  if (!data) return null;

  const [ref, inView] = useInView({
    triggerOnce: false, 
  });

  return (
    <motion.div
      ref={ref} 
      className="bg-white dark:bg-gradient-to-r from-slate-900 to-slate-700 shadow-lg rounded-md overflow-hidden transform hover:-translate-y-2 duration-300 ease-in-out"
      initial="hidden"
      animate={inView ? "visible" : "hidden"} 
      variants={slideInRight} 
    >
      <motion.img
        src={data.image}
        alt={data.title}
        className="w-full h-48 object-cover hover:scale-105"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="flex flex-col items-start p-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"} 
        variants={slideInRight} 
      >
        <Link to={data.link}>
        <motion.h3
          className="text-lg font-semibold text-primary dark:text-gray-200 hover:text-blue-950 duration-300 cursor-pointer mb-2"
          variants={slideInLeft} 
        >
          {data.title}
        </motion.h3>
        </Link>
        <motion.p
          className="lg:text-md text-sm text-gray-600 h-24 dark:text-gray-300"
          variants={slideInLeft} 
        >
          {data.description}
        </motion.p>
        <Link to={data.link}>
          <motion.button
            className="text-primary bg-gray-200 hover:text-white hover:bg-gray-400 px-2 py-2 rounded-full transition duration-500 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={slideInLeft}
          >
            <MdKeyboardDoubleArrowRight />
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Card;

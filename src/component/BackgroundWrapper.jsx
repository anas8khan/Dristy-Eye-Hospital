import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { slideInRight } from "../component/animations";

const BackgroundWrapper = ({ title1, title2,img}) => {
  return (
    <div
      className="flex p-10 items-center bg-center bg-cover xl:h-[45vh] h-[20vh]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${img})`,
      }}
    >
      <motion.div
        className="text-white sm:px-20"
        variants={slideInRight}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-sm sm:text-2xl md:text-3xl font-bold mb-4">
          {title2}
        </h1>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="md:text-lg text-sm hover:text-[#32FC16] font-semibold"
            aria-label={`Navigate to ${title1}`}
          >
            {title1}
          </Link>
          <IoIosArrowForward size={20} />
          <span className="md:text-lg text-xs font-semibold text-[#32FC16]">{title2}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default BackgroundWrapper;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "./animations";
import { Link } from "react-router-dom";

const DoctorCard = ({ data, idx }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <motion.div
      key={idx}
      className="bg-gray-300 rounded-md transform hover:translate-y-2 duration-300 ease-in-out shadow-md"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      {/* Responsive image container using aspect ratio */}
      <div className="w-full aspect-[3/4] overflow-hidden">
        <img
          src={data.image}
          alt="doctor"
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = "/fallback-doctor.jpg")} // optional fallback
        />
      </div>

      <Link
        to={`/doctor-profile/${data.name}`}
        className="bg-white dark:bg-gradient-to-r from-slate-900 to-slate-700 shadow-inner flex justify-center"
      >
        <div className="text-center py-4 px-2">
          <h1 className="text-base sm:text-lg md:text-xl text-primary dark:text-gray-200 font-bold hover:text-blue-950 dark:hover:text-blue-600 cursor-pointer duration-300">
            {data.name}
          </h1>
        </div>
      </Link>
    </motion.div>
  );
};

export default DoctorCard;

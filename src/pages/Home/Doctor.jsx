import React from "react";
import DoctorCard from "../../component/DoctorCard";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../../component/animations";
import { motion } from "framer-motion";
import { useApiData } from "../../context/ApiDataContext";

const Doctor = () => {
  const {doctors} = useApiData();

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div className="py-10">
      <div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="flex flex-col items-center justify-center mb-4"
        >
          <h1 className="text-xl lg:text-2xl font-semibold dark:text-gray-300 text-primary">
            Doctors
          </h1>
          <motion.h5 className="text-3xl 2xl:text-4xl text-center sm:text-start lg:text-4xl dark:text-gray-200 text-blue-950 font-bold">
            Dristy Eye Hospital Specialist
          </motion.h5>
        </motion.div>

        <div className="px-4 sm:px-8 md:px-12 xl:px-24 py-4">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={fadeIn}
          >
            {doctors.length > 0 &&
              doctors.map((item, idx) => {
                return <DoctorCard key={idx} data={item} idx={idx} />;
              })}
          </motion.div>
        </div>

        <div className="flex items-center justify-center">
          <NavLink
            to={"/doctor"}
            className="mt-4 relative overflow-hidden text-white font-semibold px-5 py-2 bg-primary rounded-full group"
          >
            <button>
              <span className="absolute inset-0 bg-blue-950 dark:bg-gradient-to-r from-slate-900 to-slate-700 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10 capitalize">View More</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Doctor;

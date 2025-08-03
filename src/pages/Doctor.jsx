import React, { useEffect } from "react";
import { motion } from "framer-motion";
import DoctorCard from "../component/DoctorCard";
import BackgroundWrapper from "../component/BackgroundWrapper";
import { fadeIn } from "../component/animations";
import { useApiData } from "../context/ApiDataContext";
import img from "../assets/bgwrapper.jpg";

const Doctor = () => {
  const { doctors } = useApiData();

  useEffect(() => {
    document.title = "Doctor - Dristy Eye Hospital, Chouparan";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged.");
    }
  }, [])

  return (
    <div>
      <BackgroundWrapper title1={"Home"} title2={"Doctors"} img={img} />
      <div className="px-4 sm:px-8 md:px-12 xl:px-24 py-4 flex flex-col items-center text-center">
        <motion.h1
          className="text-xl md:text-2xl xl:text-2xl 2xl:text-3xl font-semibold dark:text-gray-300 text-primary"
        >
          Doctors
        </motion.h1>
        <motion.h5
          className="text-3xl 2xl:text-4xl dark:text-gray-200 text-blue-950 font-bold"
        >
          Dristy Eye Hospital Specialist
        </motion.h5>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4"
          variants={fadeIn}
        >
          {doctors?.map((item, idx) => (
            <DoctorCard key={idx} data={item} idx={idx} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Doctor;

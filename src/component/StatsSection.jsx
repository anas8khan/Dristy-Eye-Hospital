import React, { useState } from "react";
import CountUp from "react-countup";
import { FaUserMd } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import { MdOutlineMedicalServices } from "react-icons/md";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion"; 
import { fadeIn } from "./animations";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const [counterOn, setCounterOn] = useState(false);

  const statsData = [
    {
      icon: <FaUserMd />,
      value: 9,
      label: "Expert Doctors",
    },
    {
      icon: <MdOutlineMedicalServices />,
      value: 10,
      label: "Services",
    },
    {
      icon: <FaStethoscope />,
      value: 70000,
      label: "Surgeries",
    },
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="dark:bg-gradient-to-r from-slate-950 to-slate-800 bg-primary py-24">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center md:text-start text-white">
          {statsData.map((stat, index) => {
            return (
              <motion.div
                key={index}
                className="flex flex-col lg:flex-row lg:gap-4 items-center justify-center"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                <div className="text-4xl lg:text-8xl flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="flex flex-col items-center">
                  <motion.h2
                    className="text-lg lg:text-4xl font-bold"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                  >
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        separator=","
                      />
                    )}
                    {stat.value > 5 && "+"}{" "}
                  </motion.h2>
                  <p className="font-semibold text-2xl">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default StatsSection;

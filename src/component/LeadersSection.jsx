import React from "react";
import nasreen from "../assets/Nasreen.png";
import shahrukh from "../assets/Shahrukh.png";
import omkar from "../assets/Onkar.png";
import talib from "../assets/Talib.png";
import roushan from "../assets/Roushan.png";

const LeadersSection = () => {
  const leaders = [
    {
      name: "Nasreen Farha Khan",
      role: "Director & Member of the Board",
      description:
        "Nasreen Farha Khan is a respected Director and Member of the Board at Dristy Eye Hospital, contributing visionary leadership and strategic guidance to the organization. Her commitment to excellence and innovation drives the hospital's growth and success. Nasreen plays a pivotal role in shaping policies and initiatives that align with the hospital's mission to provide exceptional eye care to the community.",
      image: nasreen,
    },
    {
      name: "Shahrukh Khan",
      role: "Manager",
      description:
        "Shahrukh Khan is the dedicated Manager of Dristy Eye Hospital, overseeing operations with exceptional leadership and organizational skills. With a commitment to excellence, he ensures the hospital runs efficiently while maintaining the highest standards of patient care. Shahrukh plays a pivotal role in coordinating between departments, streamlining processes, and fostering a welcoming environment for patients and staff alike.",
      image: shahrukh,
    },
    {
      name: "Onkar Mishra",
      role: "Accountant",
      description:
        "Omkar Mishra is the reliable and detail-oriented Accountant at Dristy Eye Hospital, responsible for managing the hospital's financial operations. With expertise in accounting and financial management, he ensures accurate record-keeping, budgeting, and compliance. Omkar’s dedication to maintaining financial transparency plays a vital role in supporting the hospital’s mission of delivering quality eye care.",
      image: omkar,
    },
    {
      name: "Roushan Khan",
      role: "OPD Incharge",
      description:
        "Roushan Khan is the efficient and dedicated OPD Incharge at Dristy Eye Hospital, ensuring smooth operations in the Outpatient Department. With a strong focus on patient care and management, he plays a key role in organizing appointments, assisting patients, and maintaining a seamless workflow. Roushan’s commitment and attention to detail contribute significantly to delivering an excellent patient experience.",
      image: roushan,
    },
    {
      name: "Md Talib Ansari",
      role: "Sr. Optometrist & OT Incharge",
      description:
        "Md Talib Ansari is the skilled and experienced Senior Optometrist and OT Incharge at Dristy Eye Hospital. With a deep knowledge of eye care and surgical procedures, he excels in conducting precise eye examinations and ensuring smooth operations in the Operation Theatre. His expertise and dedication play a crucial role in delivering high-quality care and successful surgical outcomes for patients..",
      image: talib,
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-black py-10">
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-300 uppercase">
          Key People
        </h2>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mt-2">
          The unwavering strength and unity of our leaders.
        </h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 justify-center items-center lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4 dark:bg-gradient-to-r from-slate-900 to-slate-700"
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-32 h-32 object-fill rounded border bg-[#4a71bf] mb-4"
            />
            <div className="flex flex-col flex-grow items-center justify-between">
              <h3 className="text-lg font-bold text-blue-900 dark:text-gray-300">
                {leader.name}
              </h3>
              <h4 className="text-primary font-semibold text-sm mt-1">
                {leader.role}
              </h4>
              <p className="text-gray-800 text-sm mt-2 dark:text-gray-300 text-justify h-[30vh]">
                {leader.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadersSection;

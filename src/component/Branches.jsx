import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { flipIn } from "../component/animations";

const branches = [
  {
    name: "DRISTY EYE HOSPITAL CHOUPARAN",
    timing: "9am to 5pm",
    hospitalName: "Dristy - Eye Hospital",
    address: "hospital Road, Tajpur, Vill- Tajpur, Chouparan, Dist-Hazaribagh, Jharkhand",
    phone: "+91 6546460704",
    tel: "+91 9006440240",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.1514502473765!2d85.2633946!3d24.3858069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f341dd12df49f9%3A0xfc3f8a7340ab8707!2sDRISTY%20EYE%20HOSPITAL%20CHOUPARAN!5e1!3m2!1sen!2sin!4v1734183642412!5m2!1sen!2sin"
        width="100%"
        height="200"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Jharkhand Branch Map"
      ></iframe>
    ),
  },
  {
    name: "DRISTY EYE HOSPITAL VISION CENTRE (CHATRA)",
    timing: "9am to 5pm",
    hospitalName: "Dristy - Eye Hospital Vision Center",
    address: "Bypass Rd, Chatra, Jharkhand 825401",
    phone: "+91 7294040240",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.5063474366243!2d84.8763878!3d24.1912565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cac37c8330239%3A0x48ae1cc942ec2459!2sDRISTY%20EYE%20HOSPITAL%20VISION%20CENTRE%20CHATRA!5e1!3m2!1sen!2sin!4v1734184081717!5m2!1sen!2sin"
        width="100%"
        height="200"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Jharkhand Branch Map"
      ></iframe>
    ),
  },
  {
    name: "DRISTY EYE HOSPITAL VISION CENTRE (KODERMA)",
    timing: "9am to 5pm",
    hospitalName: "Dristy - Eye Hospital Vision Center",
    address: "Bypass Road, Singhpur, Koderma, Jharkhand 825410",
    phone: "+91 8235297244",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.334884694364!2d85.59603299999999!3d24.467489999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f30b0063621bbf%3A0xf6c54e497fca5947!2sDristy%20Eye%20Hospital%20Vision%20centre(Koderma)!5e1!3m2!1sen!2sin!4v1734590431596!5m2!1sen!2sin"
        width="100%"
        height="200"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Koderma Branch Map"
      ></iframe>
    ),
  },
];

const BranchCard = ({ branch }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      className="p-4 dark:bg-gradient-to-r from-slate-900 to-slate-700  shadow-md rounded-lg flex flex-col gap-2"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={flipIn}
    >
      <div>{branch.map}</div>
      <div className="mt-2 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {branch.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-white">
          <strong>Timing:</strong> {branch.timing}
        </p>
        <p className="text-sm text-gray-600 dark:text-white">
          {branch.hospitalName}
        </p>
        <p className="text-sm text-gray-600 dark:text-white">
          {branch.address}
        </p>
        <a
          href={`tel:${branch.phone}`}
          className="text-sm text-blue-500 hover:underline dark:text-white"
        >
          Call: {branch.phone}
          {branch.tel && branch.phone ? `, ${branch.tel}` : ""}
        </a>

      </div>
    </motion.div>
  );
};

const Branches = () => (
  <div className="py-4 lg:px-4 px-2 flex flex-col items-center justify-center">
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-semibold text-primary dark:text-gray-200">Our Branches</h1>
    </div>
    <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 pt-10 lg:px-20">
      {branches.map((branch, index) => (
        <BranchCard key={index} branch={branch} />
      ))}
    </div>
  </div>
);

export default Branches;

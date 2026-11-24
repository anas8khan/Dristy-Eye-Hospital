import React from "react";
import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const branches = [
  {
    name: "DRISTY EYE HOSPITAL CHOUPARAN",
    timing: "9am to 5pm",
    hospitalName: "Dristy - Eye Hospital",
    address: "hospital Road, Tajpur, Vill- Tajpur, Chouparan, Dist-Hazaribagh, Jharkhand",
    phone: "+91 6546460704",
    tel: "+91 9006440240",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.1514502473765!2d85.2633946!3d24.3858069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f341dd12df49f9%3A0xfc3f8a7340ab8707!2sDRISTY%20EYE%20HOSPITAL%20CHOUPARAN!5e1!3m2!1sen!2sin!4v1734183642412!5m2!1sen!2sin",
    mapTitle: "Jharkhand Branch Map",
  },
  {
    name: "DRISTY EYE HOSPITAL VISION CENTRE (CHATRA)",
    timing: "9am to 5pm",
    hospitalName: "Dristy - Eye Hospital Vision Center",
    address: "Bypass Rd, Chatra, Jharkhand 825401",
    phone: "+91 7294040240",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.5063474366243!2d84.8763878!3d24.1912565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cac37c8330239%3A0x48ae1cc942ec2459!2sDRISTY%20EYE%20HOSPITAL%20VISION%20CENTRE%20CHATRA!5e1!3m2!1sen!2sin!4v1734184081717!5m2!1sen!2sin",
    mapTitle: "Jharkhand Branch Map",
  },
  {
    name: "DRISTY EYE HOSPITAL VISION CENTRE (KODERMA)",
    timing: "9am to 5pm",
    hospitalName: "Dristy - Eye Hospital Vision Center",
    address: "Bypass Road, Singhpur, Koderma, Jharkhand 825410",
    phone: "+91 8235297244",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.334884694364!2d85.59603299999999!3d24.467489999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f30b0063621bbf%3A0xf6c54e497fca5947!2sDristy%20Eye%20Hospital%20Vision%20centre(Koderma)!5e1!3m2!1sen!2sin!4v1734590431596!5m2!1sen!2sin",
    mapTitle: "Koderma Branch Map",
  },
];

const tel = (n) => `tel:${n.replace(/\s/g, "")}`;

const Branches = () => (
  <section className="section bg-slate-50 dark:bg-slate-900/40">
    <div className="container-x">
      <SectionHeading title="Our Branches" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {branches.map((branch, i) => (
          <Reveal key={branch.name} delay={i * 0.08} className="card card-hover flex flex-col overflow-hidden">
            <div className="aspect-[16/10] w-full bg-slate-200 dark:bg-slate-800">
              <iframe
                src={branch.mapSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={branch.mapTitle}
              ></iframe>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-base font-extrabold leading-snug">{branch.name}</h3>
              <p className="text-sm font-medium text-primary-600 dark:text-primary-300">{branch.hospitalName}</p>
              <ul className="mt-1 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-2.5">
                  <FaClock className="mt-0.5 shrink-0 text-leaf-500" />
                  <span><strong className="font-semibold text-slate-800 dark:text-slate-100">Timing:</strong> {branch.timing}</span>
                </li>
                <li className="flex gap-2.5">
                  <FaLocationDot className="mt-0.5 shrink-0 text-leaf-500" />
                  <span className="capitalize">{branch.address}</span>
                </li>
                <li className="flex gap-2.5">
                  <FaPhone className="mt-0.5 shrink-0 text-leaf-500" />
                  <span>
                    Call:{" "}
                    <a href={tel(branch.phone)} className="font-semibold text-primary-600 hover:underline dark:text-primary-300">{branch.phone}</a>
                    {branch.tel && (
                      <>
                        ,{" "}
                        <a href={tel(branch.tel)} className="font-semibold text-primary-600 hover:underline dark:text-primary-300">{branch.tel}</a>
                      </>
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Branches;

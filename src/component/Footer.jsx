import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const socialIcons = [
    {
      icon: <FaFacebookF size={18} className="text-blue-600" />,
      link: "https://www.facebook.com/imranchouparan/",
    },
    {
      icon: <FaTwitter size={18} className="text-sky-500" />,
      link: "https://x.com/DristyCPN",
    },
    {
      icon: <FaInstagram size={18} className="text-red-500" />,
      link: "https://www.instagram.com/dristyeyehospitalcpn/",
    },
    {
      icon: <FaLinkedinIn size={18} className="text-blue-500" />,
      link: "https://www.linkedin.com/in/dristy-eye-hospital-chouparan-666581342/",
    },
    {
      icon: <FaYoutube size={18} className="text-red-500" />,
      link: "https://www.youtube.com/channel/UCp_Suti-3MRjjdLkNoHeArw",
    },
  ];

  const usefulLinks = [
    { label: "Make Appointments", link: "/appointment" },
    { label: "Contact Us", link: "/contact" },
    { label: "Treatments", link: "/treatments" },
    { label: "About Us", link: "/about" },
    { label: "Our Doctors", link: "/doctor" },
  ];

  const services = [
    { name: "Cataract", link: "/treatment-details/Cataract" },
    { name: "Pterygium", link: "/treatment-details/pterygium" },
    { name: "Glaucoma", link: "/treatment-details/glaucoma" },
    { name: "Uveitis", link: "/treatment-details/uveitis" },
    { name: "Diabetic Retinopathy", link: "/treatment-details/diabetic-retinopathy" },
    {
      name: "Hypertensive Retinopathy",
      link: "/treatment-details/hypertensive-retinopathy",
    },
    { name: "Retinal Detachment", link: "/treatment-details/retinal-detachment" },
    { name: "Dacryocystitis", link: "/treatment-details/dacryocystitis" },
    { name: "Corneal Ulcer", link: "/treatment-details/corneal-ulcer" },
    { name: "ICL-IPCL", link: "/treatment-details/icl-ipcl" },
    { name: "Squint", link: "/treatment-details/squint" },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      label: "DRISTY EYE HOSPITAL",
      details:
        "hospital Road, Tajpur, Vill- Tajpur, Chouparan, Dist-Hazaribagh, Jharkhand",
    },
    { icon: <FaPhoneAlt />, label: "(+91) 9006440240" },
    { icon: <FaEnvelope />, label: "info@dristyeyehospital.com" },
    { icon: <FaClock />, label: "Mon to Sat - 9:00am to 5:00pm" },
  ];

  const footerLinks = [
    { label: "About Us", link: "/about" },
    { label: "Treatments", link: "/treatments" },
  ];

  useEffect(() =>{
      document.title = "Dristy Eye Hospital, Chouparan";
      const meta = document.querySelector("meta[name='description']");
      if(meta){
        meta.setAttribute("content", "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged.");
      }
    },[])

  return (
    <footer className="bg-gray-100 dark:bg-black py-10 mt-8 lg:px-4">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-6 gap-2 text-gray-700 dark:text-white">
          <div>
            <div className="mb-4">
              <img src={logo} alt="Optico Logo" className="h-14" />
            </div>
            <p className="text-gray-600 dark:text-gray-200 text-sm">
              Founded with a mission to transform lives through vision care,
              Dristy Eye Hospital has become a beacon of hope for thousands of
              underprivileged individuals.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialIcons.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  aria-label={social.name}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-primary hover:text-white duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Useful Links
            </h3>
            <div className="w-10 h-[2px] bg-primary mb-3"></div>
            <ul className="space-y-2">
              {usefulLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="hover:text-primary cursor-pointer duration-500"
                >
                  <Link to={link.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Our Services
            </h3>
            <div className="w-10 h-[2px] bg-primary mb-3"></div>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <Link to={service.link}>
                  <li key={idx} className="hover:text-primary cursor-pointer">
                    {service.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Get In Touch
            </h3>
            <div className="w-10 h-[2px] bg-primary mb-3"></div>
            <ul className="space-y-2">
              {contactInfo.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-primary">{item.icon}</span>
                  <div className="text-sm sm:text-md">
                    <strong className="text-">{item.label}</strong>
                    <br />
                    {item.details}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center md:text-left text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row justify-between px-4 sm:px-0">
          <p>
            Copyright © 2024{" "}
            <span className="text-primary font-semibold">
              Dristy Eye Hospital
            </span>
            . All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0 justify-center md:justify-end">
            {footerLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.link}
                className="hover:text-primary dark:hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
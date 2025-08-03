import React, { useEffect } from "react";
import BackgroundWrapper from "../component/BackgroundWrapper";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import banner from "../assets/bgwrapper.jpg";
import BookingForm from "../component/BookingForm";
import Branches from "../component/Branches";

const ContactUs = () => {
  const contactDetails = [
    {
      icon: <FaPhoneVolume />,
      label: "Phone Number",
      value: "+91 9006440240",
      href: "tel:+919006440240",
    },
    {
      icon: <IoIosMail />,
      label: "Email",
      value: "info@dristyeyehospital.com",
      href: "mailto:info@dristyeyehospital.com",
    },
    {
      icon: <IoLocationSharp />,
      label: "Address",
      value:
        "Hospital Road, Tajpur, Vill- Tajpur, Chouparan, Dist-Hazaribagh, Jharkhand",
      href: "https://www.google.com/maps?q=Hospital+Road,+Tajpur,+Chouparan,+Hazaribagh,+Jharkhand",
    },
  ];

  useEffect(() => {
    document.title = "Contact - Dristy Eye Hospital, Chouparan";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged."
      );
    }
  }, []);

  return (
    <div>
      <BackgroundWrapper title1={"Home"} title2={"Contact"} img={banner} />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 max-w-7xl mx-auto p-6 lg:p-10 mt-8">
        <div className="w-full lg:w-[40%] flex flex-col gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold capitalize text-gray-800 dark:text-white">
            <span className="text-primary dark:text-primary">We love </span>to
            hear from our customers
          </h1>
          <div className="flex flex-col py-4 gap-6">
            {contactDetails.map((detail, index) => (
              <a
                key={index}
                href={detail.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-6 pb-6 ${
                  index < 2 && "border-b border-gray-300"
                }`}
              >
                <span className="text-md sm:text-xl text-white bg-primary p-4 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out">
                  {detail.icon}
                </span>
                <div>
                  <h5 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-white">
                    {detail.label}
                  </h5>
                  <p className="text-md sm:text-lg text-gray-500 dark:text-white">
                    {detail.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[50%] rounded-lg">
          <BookingForm />
        </div>
      </div>
      <Branches />
    </div>
  );
};

export default ContactUs;

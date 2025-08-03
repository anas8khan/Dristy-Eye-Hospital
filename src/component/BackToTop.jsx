import React, { useEffect, useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoMdArrowRoundUp } from "react-icons/io";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <button
          className={`fixed px-3 py-3 rounded-full text-white bg-primary dark:bg-slate-700 duration-300 z-50 hover:drop-shadow-xl hover:text-white transform transition-all ${
            backToTopButton
              ? "opacity-100 translate-y-0 top-[80%] lg:right-[50px] right-[20px] ease-in-out duration-1000"
              : "opacity-0 -translate-y-full top-0 right-[50px]"
          }`}
          onClick={scrollUp}
        >
          <IoMdArrowRoundUp />
        </button>
      </div>

      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-start gap-6 z-50">
        <Link to={"https://wa.me/9771740140?text=hello"} target="_blank">
          <button
            className={`px-3 py-3 text-white rounded bg-primary dark:bg-black 
        hover:translate-x-0 -translate-x-[91px] 
        duration-500 hover:drop-shadow-md 
        flex items-center gap-2`}
          >
            <span className="ml-2 text-white transition-opacity duration-300">
              Whatsapp
            </span>
            <FaWhatsapp className="text-xl text-[#0CC143]" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default BackToTop;

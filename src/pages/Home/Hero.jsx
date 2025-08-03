import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerText } from "../../component/animations";
import img from "../../assets/hospitalImg/IMG_1151.png";
import img2 from "../../assets/hospitalImg/IMG_1157.jpg";
import img3 from "../../assets/hospitalImg/IMG_1186.jpg";
import img4 from "../../assets/hospitalImg/IMG_1327.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
  };

  const slides = [
    {
      img: img,
      header: "Welcome",
      title: "to Dristy Eye Hospital",
      description:
        "We provide world-class eye care services to help you see the world better.",
      buttonText: "View More Details",
      link:"/about"
    },
    {
      img: img2,
      header: "Expert",
      title: "Eye Specialists",
      description:
        "Our team of experienced specialists ensures the best treatment for your eyes.",
      buttonText: "Explore Our Blog",
      link:"/blog"
    },
    {
      img: img3,
      header: "Your",
      title: "vision is our passion",
      description:
        "We are here for your eye care.",
      buttonText: "Explore Our Mission",
      link:"/mission"
    },
    {
      img: img4,
      // header: "Expert",
      title: "Eye Specialists",
      description:
        "Our dedicated team of skilled specialists is committed to providing exceptional care.",
      buttonText: "Explore Our Treatments",
      link:"/treatments"
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className="w-full xl:h-[90vh] h-fit overflow-hidden shadow-xl relative"
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full relative"
          >
            <div
              className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
              style={{ zIndex: 1 }}
            />

            <img
              className="w-full h-[30vh] md:h-[40vh] lg:h-[65vh] xl:h-full"
              src={slide.img}
              alt={`Slide ${index}`}
              style={{
                filter: "brightness(60%)",
              }}
            />

            <motion.div
              className="absolute top-[15%] 2xl:top-[20%] xl:inset-x-[20%] 2xl:inset-x-[10%] sm:inset-x-[15%] inset-x-[0%] text-center z-10"
              variants={staggerText}
            >
              <motion.h1
                className="sm:w-full w-[80%] mx-auto text-white lg:text-7xl 2xl:text-8xl sm:text-4xl text-2xl font-bold"
                variants={fadeIn}
              >
                <span style={{color:'#4f46e5'}}>{slide.header} </span>
                {slide.title}
              </motion.h1>

              <motion.p
                className="mt-4 w-[75%] mx-auto text-white text-xs sm:text-md md:text-lg lg:text-lg 2xl:text-xl"
                variants={fadeIn}
              >
                {slide.description}
              </motion.p>

              <Link to={slide.link}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeIn}
                  className="2xl:mt-6 mt-4 lg:px-6 lg:py-3 px-3 py-2 bg-primary text-white font-semibold text-xs sm:text-md md:text-lg lg:text-lg 2xl:text-xl rounded-lg shadow-lg hover:bg-[#172554] transition-all duration-400"
                >
                  {slide.buttonText}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Hero;

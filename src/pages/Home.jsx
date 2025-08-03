import React, { useEffect } from "react";
import Hero from "./Home/Hero";
import Benefits from "./Home/Benefits";
import Features from "./Home/Features";
import Consultant from "../component/Consultant";
import Doctor from "./Home/Doctor";
import Book from "./Home/Book";
import StatsSection from "../component/StatsSection";
import Testimonial from "./Home/Testimonial";
import ImageCarousel from "../component/ImageCarousel";
import { Link } from "react-router-dom";
import { useApiData } from "../context/ApiDataContext";
import Branches from "../component/Branches";

// import React, { useEffect } from "react";
// import Hero from "./Home/Hero";
// import Benefits from "./Home/Benefits";
// import Features from "./Home/Features";
// import Consultant from "../component/Consultant";
// import Doctor from "./Home/Doctor";
// import Book from "./Home/Book";
// import StatsSection from "../component/StatsSection";
// import Testimonial from "./Home/Testimonial";
// import ImageCarousel from "../component/ImageCarousel";
// import { Link } from "react-router-dom";
// import { useApiData } from "../context/ApiDataContext";
// import Branches from "../component/Branches";

const Home = () => {
  const { gallery, isLoading, error } = useApiData() || { gallery: [], isLoading: true, error: null };

  useEffect(() => {
    document.title = "Dristy Eye Hospital, Chouparan";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged."
      );
    }
  }, []);

  // 🚀 Show Loader Initially
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  // 🚀 Show Error Message if an Error Occurs
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <div className="flex flex-col items-center justify-center p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left dark:text-white">
          About Dristy Eye Hospital
        </h2>
        <p className="text-gray-700 text-center leading-relaxed lg:w-[65%] dark:text-gray-200">
        With a profound commitment to transforming lives through the gift of vision, Dristy Eye Hospital has emerged as a beacon of hope for countless individuals in need. Founded under the guidance of Afroj Charitable Trust, our hospital is rooted in a legacy of selfless service, unwavering compassion, and an unrelenting pursuit of excellence in eye care. Our story is one of dedication, perseverance, and a relentless drive to make a meaningful difference in the lives of those we serve.
        </p>
        <Link to={"/about"} className="mt-4 relative overflow-hidden text-white font-semibold px-6 py-3 bg-primary rounded-full group">
          <button>
            <span className="absolute inset-0 bg-blue-950 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10 uppercase">More About Us</span>
          </button>
        </Link>
      </div>

      <Benefits />
      <div className="md:px-10">
        <Features />
      </div>
      <Consultant />
      <Doctor />
      <Book />
      <StatsSection />
      <Testimonial />
      <ImageCarousel images={gallery} isLoading={isLoading} error={error} />
      <div>
        <Branches />
      </div>
    </div>
  );
};

export default Home;

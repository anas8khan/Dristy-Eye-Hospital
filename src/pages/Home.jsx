import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import Hero from "./Home/Hero";
import Benefits from "./Home/Benefits";
import Features from "./Home/Features";
import Consultant from "../component/Consultant";
import Doctor from "./Home/Doctor";
import Book from "./Home/Book";
import StatsSection from "../component/StatsSection";
import Testimonial from "./Home/Testimonial";
import ImageCarousel from "../component/ImageCarousel";
import Branches from "../component/Branches";
import SectionHeading from "../component/ui/SectionHeading";
import Reveal from "../component/ui/Reveal";
import { useApiData } from "../context/ApiDataContext";
import aboutImg from "../assets/hospitalImg/IMG_100.jpg";
import aboutImg2 from "../assets/hospitalImg/IMG_1157.jpg";
import { useLanguage } from "../context/LanguageContext";

const ABOUT_INTRO =
  "With a profound commitment to transforming lives through the gift of vision, Dristy Eye Hospital has emerged as a beacon of hope for countless individuals in need. Founded under the guidance of Afroj Charitable Trust, our hospital is rooted in a legacy of selfless service, unwavering compassion, and an unrelenting pursuit of excellence in eye care. Our story is one of dedication, perseverance, and a relentless drive to make a meaningful difference in the lives of those we serve.";

const Home = () => {
  const { gallery, isLoading, error } = useApiData();
  const { t } = useLanguage();

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

  return (
    <>
      <Hero />

      {/* About */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="grid grid-cols-5 gap-4">
              <img
                src={aboutImg}
                alt={t("Dristy Eye Hospital")}
                loading="lazy"
                className="col-span-3 h-80 w-full rounded-3xl object-cover shadow-lift md:h-[26rem]"
              />
              <img
                src={aboutImg2}
                alt={t("Afroj Charitable Trust")}
                loading="lazy"
                className="col-span-2 mt-12 h-64 w-full rounded-3xl object-cover shadow-lift md:h-80"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-leaf px-6 py-4 text-white shadow-lift">
              <p className="font-display text-3xl font-extrabold">10,000+</p>
              <p className="text-sm font-medium text-leaf-50">{t("free cataract surgeries every year")}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading align="left" eyebrow={t("About Us")} title={t("About Dristy Eye Hospital")} />
            <p className="lead mt-5">
              {t(ABOUT_INTRO)}
            </p>
            <Link to={"/about"} className="btn-primary mt-8">
              {t("More About Us")} <HiArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      <Benefits />
      <Features />
      <Consultant />
      <Doctor />
      <Book />
      <StatsSection />
      <Testimonial />

      <section className="pb-16">
        <div className="container-x">
          <SectionHeading eyebrow={t("Gallery")} title={t("Explore Our Gallery")} className="mb-10" />
          <ImageCarousel images={gallery} isLoading={isLoading} error={error} />
          <div className="flex justify-center">
            <Link to="/gallery" className="btn-outline">
              {t("View More")} <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Branches />
    </>
  );
};

export default Home;

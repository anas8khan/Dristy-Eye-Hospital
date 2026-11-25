import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BackgroundWrapper from "../component/BackgroundWrapper";
import SectionHeading from "../component/ui/SectionHeading";
import img from "../assets/bgwrapper.jpg";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "../component/ui/Reveal";

// Videos live in /public/Feedback and are served as static files.
const videos = Array.from({ length: 16 }, (_, i) => `/Feedback/${i + 1}.mp4`);
const videosPerPage = 6;

const Feedback = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useLanguage();
  const totalPages = Math.ceil(videos.length / videosPerPage);
  const currentVideos = videos.slice((currentPage - 1) * videosPerPage, currentPage * videosPerPage);
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) video.pause();
    });
  };

  const goTo = (page) => {
    setCurrentPage(page);
    document.getElementById("feedback-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    document.title = `Feedback - Dristy Eye Hospital, Chouparan`;
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Dristy Eye Hospital is a non-profit organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged."
      );
    }
  }, []);

  return (
    <>
      <BackgroundWrapper title1={"Home"} title2={"Feedback"} img={img} />
      <section className="section bg-slate-50 dark:bg-slate-900/40">
        <div className="container-x">
          <SectionHeading title={t("Our Patient Feedback")} />
          <div id="feedback-grid" className="mt-12 grid scroll-mt-28 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentVideos.map((video, index) => (
              <Reveal key={video} delay={(index % 3) * 0.08} variant="zoom" className="card card-hover overflow-hidden p-2">
                <video
                  controls
                  preload="metadata"
                  src={video}
                  ref={(el) => (videoRefs.current[index] = el)}
                  onPlay={() => handlePlay(index)}
                  className="aspect-video w-full rounded-xl bg-navy object-contain"
                ></video>
              </Reveal>
            ))}
          </div>

          <nav className="mt-10 flex items-center justify-center gap-3" aria-label="Pagination">
            <button
              type="button"
              onClick={() => goTo(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="btn-outline !px-4"
            >
              <IoIosArrowBack /> {t("Previous")}
            </button>
            <span className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-soft dark:bg-slate-800 dark:text-slate-200">
              {t("Page")} {currentPage} {t("of")} {totalPages}
            </span>
            <button
              type="button"
              onClick={() => goTo(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="btn-primary !px-4"
            >
              {t("Next")} <IoIosArrowForward />
            </button>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Feedback;

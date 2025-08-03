import React, { useEffect, useRef, useState } from "react";
import BackgroundWrapper from "../component/BackgroundWrapper";
import img from "../assets/bgwrapper.jpg";
import video1 from "/Feedback/1.mp4";
import video2 from "/Feedback/2.mp4";
import video3 from "/Feedback/3.mp4";
import video4 from "/Feedback/4.mp4";
import video5 from "/Feedback/5.mp4";
import video6 from "/Feedback/6.mp4";
import video7 from "/Feedback/7.mp4";
import video8 from "/Feedback/8.mp4";
import video9 from "/Feedback/9.mp4";
import video10 from "/Feedback/10.mp4";
import video11 from "/Feedback/11.mp4";
import video12 from "/Feedback/12.mp4";
import video13 from "/Feedback/13.mp4";
import video14 from "/Feedback/14.mp4";
import video15 from "/Feedback/15.mp4";
import video16 from "/Feedback/16.mp4";

const Feedback = () => {
  const videos = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
    video11,
    video12,
    video13,
    video14,
    video15,
    video16,
  ];

  const videosPerPage = 6; // Number of videos per page
  const [currentPage, setCurrentPage] = useState(1); // Track current page

  const totalPages = Math.ceil(videos.length / videosPerPage); // Total pages

  // Get videos for the current page
  const currentVideos = videos.slice(
    (currentPage - 1) * videosPerPage,
    currentPage * videosPerPage
  );

  const videoRefs = useRef([]);

  // Handle playing only one video at a time
  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause();
      }
    });
  };

  // Set page title and meta description
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
      <section className="bg-gray-100 dark:bg-black py-8 px-4 md:px-8 lg:px-16">
        <h1 className="text-center dark:text-gray-200 font-semibold text-4xl">
          Our Patient Feedback
        </h1>
        <div className="max-w-7xl mx-auto mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentVideos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <video
                  controls
                  src={video}
                  ref={(el) => (videoRefs.current[index] = el)}
                  onPlay={() => handlePlay(index)}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    aspectRatio: "16/9",
                  }}
                ></video>
              </div>
            ))}
          </div>
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 mr-2 border rounded"
            style={{backgroundColor: currentPage === 1 ? "#d1d5db" : "#4f46e5",
              color: currentPage === 1 ? "black" : "white"
            }}
          >
            Previous
          </button>
          <span className="px-4 py-2 border rounded bg-gray-100">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 ml-2 border rounded" 
            style={{
              backgroundColor: currentPage === totalPages ? "#d1d5db" : "#4f46e5", // Your color
              color: currentPage === totalPages ? "black" : "white",
            }}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default Feedback;

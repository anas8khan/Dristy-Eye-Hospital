import React, { useEffect, useState } from "react";
import { useApiData } from "../context/ApiDataContext";
import BackgroundWrapper from "../component/BackgroundWrapper";
import banner from "../assets/bgwrapper.jpg";

const Gallery = () => {
  const { gallery } = useApiData();
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [visibleImages, setVisibleImages] = useState(18); // Number of images to show initially

  useEffect(() => {
    document.title = "Gallery - Dristy Eye Hospital, Chouparan";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Dristy Eye Hospital a unit of Afroz Charitable trust is a non-profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged."
      );
    }
  }, []);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  const showNextImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    }
  };

  const showPreviousImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + gallery.length) % gallery.length
      );
    }
  };

  const handleViewMore = () => {
    setVisibleImages((prev) => prev + 6); // Load 6 more images each time
  };

  return (
    <div>
      <BackgroundWrapper title1={"Home"} title2={"Gallery"} img={banner} />
      {/* Heading Section */}
      <div className="text-center py-8 px-4 pb-2">
        <h1 className="text-4xl font-bold text-gray-800">
          Explore Our Gallery
        </h1>
      </div>
      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-32 py-16 p-2">
        {gallery?.slice(0, visibleImages).map((image, index) => (
          <div
            key={image.id}
            className="relative bg-gray-200 p-2 rounded-md group lg:h-[300px] h-[250px] object-cover object-center cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.image}
              alt={`Hospital Image ${image.id}`}
              loading="lazy"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
        ))}
      </div>

      {visibleImages < gallery?.length && (
        <div className="flex justify-center py-1">
          <button
            onClick={handleViewMore}
            className="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-950 transition duration-500"
          >
            View More
          </button>
        </div>
      )}

      {/* Modal for displaying the image */}
      {currentImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative max-w-4xl w-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={gallery[currentImageIndex]?.image}
              alt={`Large Hospital Image ${gallery[currentImageIndex]?.id}`}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                onClick={showPreviousImage}
                className="text-white bg-black bg-opacity-50 p-2 rounded-full focus:outline-none"
              >
                &#8592;
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                onClick={showNextImage}
                className="text-white bg-black bg-opacity-50 p-2 rounded-full focus:outline-none"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

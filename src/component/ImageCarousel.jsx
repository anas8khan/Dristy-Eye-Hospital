import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

const ImageCarousel = ({ images, isLoading, error }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div className="overflow-hidden">
      {isLoading && (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="loader"></div>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center h-[50vh] text-red-500">
          <p>{error}</p>
        </div>
      )}

      {!isLoading && !error && images.length > 0 && (
        <Slider {...sliderSettings} className="p-4">
          {images.map((image, index) => (
            <div key={image.id} className="relative group p-2">
              <img
                src={image.image} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg cursor-pointer transform group-hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentIndex(index);
                }}
              />
              <div
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentIndex(index);
                }}
                className="absolute cursor-pointer inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              ></div>
            </div>
          ))}
        </Slider>
      )}

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage.image} 
              alt="Selected"
              className="max-w-full max-h-screen rounded-lg p-6 bg-cover bg-center"
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-primary"
            >
              <IoIosArrowDropleftCircle size={35} />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-primary"
            >
              <IoIosArrowDroprightCircle size={35} />
            </button>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-10 right-10 text-primary"
            >
              <RxCrossCircled size={35} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;

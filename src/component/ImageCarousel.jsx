import React from "react";
import Slider from "react-slick";
import { HiOutlineArrowsPointingOut } from "react-icons/hi2";
import Lightbox, { useLightbox } from "./ui/Lightbox";

const ImageCarousel = ({ images = [], isLoading, error }) => {
  const lightbox = useLightbox();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  if (isLoading) {
    return (
      <div className="flex h-[40vh] items-center justify-center">
        <div className="loader" />
      </div>
    );
  }

  if (error) {
    return <div className="flex h-[40vh] items-center justify-center text-red-500">{error}</div>;
  }

  if (!images.length) return null;

  return (
    <div className="pb-10">
      <Slider {...sliderSettings} className="-mx-2">
        {images.map((image, index) => (
          <div key={image.id} className="px-2">
            <button
              type="button"
              onClick={() => lightbox.open(index)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800"
              aria-label={`Open image ${index + 1}`}
            >
              <img
                src={image.image}
                alt={`Thumbnail ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 grid place-items-center bg-navy/50 text-2xl text-white opacity-0 transition group-hover:opacity-100">
                <HiOutlineArrowsPointingOut />
              </span>
            </button>
          </div>
        ))}
      </Slider>
      <Lightbox images={images} index={lightbox.index} onClose={lightbox.close} onChange={lightbox.setIndex} />
    </div>
  );
};

export default ImageCarousel;

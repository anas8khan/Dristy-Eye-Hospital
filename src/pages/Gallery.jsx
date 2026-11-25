import React, { useEffect, useState } from "react";
import { HiOutlineArrowsPointingOut } from "react-icons/hi2";
import { useApiData } from "../context/ApiDataContext";
import BackgroundWrapper from "../component/BackgroundWrapper";
import SectionHeading from "../component/ui/SectionHeading";
import Lightbox, { useLightbox } from "../component/ui/Lightbox";
import banner from "../assets/bgwrapper.jpg";
import { useLanguage } from "../context/LanguageContext";

const Gallery = () => {
  const { gallery } = useApiData();
  const [visibleImages, setVisibleImages] = useState(18);
  const lightbox = useLightbox();
  const { t } = useLanguage();

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

  return (
    <>
      <BackgroundWrapper title1={"Home"} title2={"Gallery"} img={banner} />
      <section className="section">
        <div className="container-x">
          <SectionHeading title={t("Explore Our Gallery")} />
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {gallery?.slice(0, visibleImages).map((image, index) => (
              <button
                type="button"
                key={image.id}
                onClick={() => lightbox.open(index)}
                className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800"
                aria-label={`Open image ${image.id}`}
              >
                <img
                  src={image.image}
                  alt={`Hospital Image ${image.id}`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-navy/50 text-3xl text-white opacity-0 transition group-hover:opacity-100">
                  <HiOutlineArrowsPointingOut />
                </span>
              </button>
            ))}
          </div>

          {visibleImages < gallery?.length && (
            <div className="mt-10 flex justify-center">
              <button type="button" onClick={() => setVisibleImages((prev) => prev + 6)} className="btn-primary">
                {t("View More")}
              </button>
            </div>
          )}
        </div>
      </section>
      <Lightbox images={gallery} index={lightbox.index} onClose={lightbox.close} onChange={lightbox.setIndex} />
    </>
  );
};

export default Gallery;

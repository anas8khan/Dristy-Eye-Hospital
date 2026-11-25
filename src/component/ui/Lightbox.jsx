import React, { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiX } from "react-icons/hi";

// Accessible full-screen image viewer shared by the gallery carousel and gallery page.
const Lightbox = ({ images, index, onClose, onChange }) => {
  const total = images.length;
  const prev = useCallback(() => onChange((index - 1 + total) % total), [index, total, onChange]);
  const next = useCallback(() => onChange((index + 1) % total), [index, total, onChange]);

  useEffect(() => {
    if (index === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, onClose, prev, next]);

  if (index === null || !images[index]) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-navy/95 p-4 backdrop-blur"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <img
        key={index}
        src={images[index].image}
        alt={`Gallery image ${index + 1}`}
        className="max-h-[85vh] max-w-full animate-zoom-in rounded-xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button type="button" aria-label="Close" onClick={onClose} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20">
        <HiX />
      </button>
      <button type="button" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 md:left-6">
        <IoIosArrowBack />
      </button>
      <button type="button" aria-label="Next image" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 md:right-6">
        <IoIosArrowForward />
      </button>
      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
        {index + 1} / {total}
      </span>
    </div>
  );
};

export const useLightbox = () => {
  const [index, setIndex] = useState(null);
  return { index, open: setIndex, close: () => setIndex(null), setIndex };
};

export default Lightbox;

import React, { useState } from "react";

const initialsOf = (name = "") =>
  name
    .replace(/^Dr\.?\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

// Image that falls back to a branded initials tile when the source cannot be loaded
// (e.g. the external image host is blocked on the visitor's network).
const ImageWithFallback = ({ src, alt, className = "", name, ...rest }) => {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`grid place-items-center bg-gradient-to-br from-primary-600 to-primary-800 ${className}`}
      >
        <span className="font-display text-5xl font-extrabold tracking-wide text-white/90">{initialsOf(name || alt)}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} {...rest} />;
};

export default ImageWithFallback;

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { socials } from "../../siteConfig";

const icons = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />,
  youtube: <FaYoutube />,
};

const SocialLinks = ({ className = "", itemClassName = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    {socials.map((s) => (
      <a
        key={s.key}
        href={s.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.name}
        className={`grid h-9 w-9 place-items-center rounded-full transition duration-300 ${itemClassName}`}
      >
        {icons[s.key]}
      </a>
    ))}
  </div>
);

export default SocialLinks;

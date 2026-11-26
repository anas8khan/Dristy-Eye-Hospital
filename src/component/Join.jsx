import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";
import { openDonation } from "./ui/donate";

const Join = () => {
  const { t } = useLanguage();
  return (
    <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-primary-700 px-6 py-12 text-center shadow-lift">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(253,181,21,.25),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(34,184,58,.25),transparent_40%)]" />
      <h3 className="relative h-section !text-2xl !text-white lg:!text-4xl">{t("Join Our Mission")}</h3>
      <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link to={"/appointment"} className="btn-light w-full !py-3.5 sm:w-auto">
          {t("Book Your Surgery")} <HiArrowRight />
        </Link>
        <button type="button" onClick={openDonation} className="btn-sun w-full !py-3.5 sm:w-auto">
          <FaHeart className="text-red-600" />
          {t("Contribute to the Initiative")}
        </button>
      </div>
    </div>
  );
};

export default Join;

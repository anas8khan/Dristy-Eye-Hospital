import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";
import { openDonation } from "./ui/donate";

const Join = () => {
  const { t } = useLanguage();
  return (
    <div className="mt-12 rounded-3xl bg-gradient-to-br from-primary-50 via-white to-leaf-50 px-6 py-12 text-center dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <h3 className="h-section !text-2xl lg:!text-4xl">{t("Join Our Mission")}</h3>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link to={"/appointment"} className="btn-primary w-full sm:w-auto">
          {t("Book Your Surgery")} <HiArrowRight />
        </Link>
        <button type="button" onClick={openDonation} className="btn-outline w-full sm:w-auto">
          {t("Contribute to the Initiative")}
        </button>
      </div>
    </div>
  );
};

export default Join;

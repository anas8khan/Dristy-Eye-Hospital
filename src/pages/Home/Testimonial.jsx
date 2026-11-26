import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import SectionHeading from "../../component/ui/SectionHeading";
import { useLanguage } from "../../context/LanguageContext";

const Testimonial = () => {
  const { t } = useLanguage();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow={t("Testimonial")} title={t("What Our Patients Say About Us")} />
        <div className="mt-12">
          <div
            className="tagembed-widget"
            style={{ width: "100%", height: "100%" }}
            data-widget-id="2142643"
            data-tags="false"
            view-url="https://widget.tagembed.com/2142643"
          ></div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/feedback" className="btn-outline">
            {t("Our Patient Feedback")} <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

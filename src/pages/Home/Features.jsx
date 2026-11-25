import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import Card from "../../component/Card";
import SectionHeading from "../../component/ui/SectionHeading";
import Reveal from "../../component/ui/Reveal";
import { treatmentCards } from "../../treatmentCards";
import { useLanguage } from "../../context/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow={t("Services")} title={t("Dristy Eye Hospital Services")} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatmentCards.slice(0, 8).map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) * 0.06}>
              <Card data={item} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to={"/treatments"} className="btn-outline">
            {t("View More")} <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;

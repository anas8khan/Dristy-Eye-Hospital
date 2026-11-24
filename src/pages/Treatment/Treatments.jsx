import React, { useEffect } from "react";
import BackgroundWrapper from "../../component/BackgroundWrapper";
import Card from "../../component/Card";
import SectionHeading from "../../component/ui/SectionHeading";
import Reveal from "../../component/ui/Reveal";
import { treatmentCards } from "../../treatmentCards";
import banner from "../../assets/bgwrapper.jpg";

const Treatments = () => {
  useEffect(() => {
    document.title = "Treatments - Dristy Eye Hospital, Chouparan";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged."
      );
    }
  }, []);

  return (
    <>
      <BackgroundWrapper title1="Home" title2="Treatments" img={banner} />
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Services" title="Dristy Eye Hospital Services" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {treatmentCards.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 0.06}>
                <Card data={{ ...item, title: item.fullTitle || item.title }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Treatments;

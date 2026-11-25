import React from "react";
import { FaCheck } from "react-icons/fa";
import about from "../../assets/about.png";
import Reveal from "../../component/ui/Reveal";
import { useLanguage } from "../../context/LanguageContext";

const benefits = [
  "Qualified Doctors",
  "Modern Equipment",
  "Individual Approach",
  "Special Eye Exam",
  "Contact Lens Service",
  "Special Retina Exam",
];

const Benefits = () => {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-primary-900 to-primary-700 py-16 md:py-24">
      <div className="absolute -left-20 top-10 h-72 w-72 animate-float-slow rounded-full bg-primary-500/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 animate-float-slower rounded-full bg-leaf/20 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal variant="zoom" className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-6 animate-pulse rounded-full bg-gradient-to-br from-leaf/40 to-primary-400/40 blur-2xl [animation-duration:4s]" />
          <img
            className="relative w-full animate-float-y transition-transform duration-500 [animation-duration:6s] hover:scale-[1.03]"
            src={about}
            style={{ animationDelay: "1s" }}
            alt="About"
            loading="lazy"
          />
        </Reveal>

        <div>
          <Reveal variant="right">
            <span className="eyebrow !text-leaf-300">{t("Why Choose Us?")}</span>
            <h2 className="h-section mt-3 !text-white">{t("Benefits with Dristy Eye Hospital")}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
              {t("We pledge to make your visit at all of our locations an opportunity to provide timely and appropriate care for you and your family members.")}
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <Reveal
                as="li"
                key={benefit}
                delay={i * 0.05}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-leaf/40 hover:bg-white/10"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-leaf text-sm text-white">
                  <FaCheck />
                </span>
                <span className="font-semibold text-slate-100">{t(benefit)}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

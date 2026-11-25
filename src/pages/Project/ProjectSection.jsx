import React, { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { FaCheck } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { useProjects } from "../../localizedData";
import BackgroundWrapper from "../../component/BackgroundWrapper";
import Join from "../../component/Join";
import SectionHeading from "../../component/ui/SectionHeading";
import Reveal from "../../component/ui/Reveal";
import { useLanguage } from "../../context/LanguageContext";

const ProjectSection = () => {
  const { projectName } = useParams();
  const data = useProjects();
  const { t } = useLanguage();
  const project = useMemo(
    () => data.find((p) => p.name.toLowerCase() === projectName.toLowerCase()) || null,
    [data, projectName]
  );

  useEffect(() => {
    document.title = `${project?.name || "Project"} - Dristy Eye Hospital, Chouparan`;
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged."
      );
    }
  }, [project]);

  if (!project) {
    return (
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-3xl font-bold">{t("Project Not Found")}</h1>
        <Link to="/" className="btn-primary">{t("Home")}</Link>
      </div>
    );
  }

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <BackgroundWrapper title1={"Home"} title2={project.name} img={project.bannerImg} />

      <section className="container-x pt-14 md:pt-20">
        <Reveal variant="zoom" className="mx-auto max-w-4xl text-center">
          <FaQuoteLeft className="mx-auto text-3xl text-leaf" />
          <h2 className="mt-4 font-display text-xl font-bold italic leading-relaxed sm:text-2xl md:text-3xl">
            &ldquo;{project.title}&rdquo;
          </h2>
        </Reveal>
      </section>

      <section className="section">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <h3 className="h-section !text-2xl md:!text-3xl">{project.about.heading}</h3>
            <p className="mt-5 whitespace-pre-line leading-relaxed">{project.about.content}</p>
          </Reveal>
          <Reveal variant="right" delay={0.1} className="pb-10">
            <Slider {...settings}>
              {project.slider?.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
                  />
                </div>
              ))}
            </Slider>
          </Reveal>
        </div>
      </section>

      <section className="container-x">
        <Reveal className="rounded-3xl bg-gradient-to-br from-navy via-primary-900 to-primary-700 p-8 shadow-lift md:p-12">
          <h3 className="text-2xl font-bold !text-white">{t("Key Highlights")}</h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {project.keyHighlights?.map((highlight, index) => (
              <Reveal as="li" key={index} delay={0.15 + index * 0.08} variant="zoom" className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 font-medium text-slate-100 transition hover:border-leaf/40 hover:bg-white/10">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-leaf text-xs text-white">
                  <FaCheck />
                </span>
                {highlight}
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading title={t("Impact Stories")} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {project.impactStories?.map((story, index) => {
              const name = Array.isArray(story.name) ? story.name.join(", ") : story.name;
              return (
                <Reveal key={index} delay={(index % 2) * 0.1} variant={index % 2 ? "right" : "left"} className="card card-hover flex flex-col gap-5 p-6 sm:flex-row sm:items-start">
                  <img
                    src={story.image}
                    alt={story.title || name}
                    loading="lazy"
                    className="h-24 w-24 shrink-0 rounded-2xl object-cover ring-4 ring-primary-50 dark:ring-slate-800"
                  />
                  <div>
                    <FaQuoteLeft className="text-xl text-primary-200 dark:text-primary-800" />
                    <p className="mt-2 italic leading-relaxed">&ldquo;{story.description}&rdquo;</p>
                    <h4 className="mt-4 font-bold text-primary-600 dark:text-primary-300">{name}</h4>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Join />
        </div>
      </section>
    </>
  );
};

export default ProjectSection;

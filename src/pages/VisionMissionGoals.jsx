import React, { useEffect } from "react";
import { FaCheck, FaEye, FaHandshake, FaRibbon } from "react-icons/fa6";
import { BsTrophyFill } from "react-icons/bs";
import BackgroundWrapper from "../component/BackgroundWrapper";
import Join from "../component/Join";
import SectionHeading from "../component/ui/SectionHeading";
import Reveal from "../component/ui/Reveal";
import vision from "../assets/vision.png";
import mission from "../assets/mission.jpg";
import choose from "../assets/chooseus.jpg";
import grid1 from "../assets/grid1.jpg";
import grid2 from "../assets/grid2.jpg";
import grid3 from "../assets/grid3.jpg";
import grid4 from "../assets/grid4.jpg";
import banner from "../assets/bgwrapper.jpg";
import { useLanguage } from "../context/LanguageContext";

const pillars = [
  { name: "Compassionate Service", details: "Collaborated for advanced AI solutions." },
  { name: "Community Synergy", details: "Partnering with local communities to address eye health needs collectively." },
  { name: "Sustainability", details: "Ensuring long-term access to preventive and curative eye care for all." },
];

const fundUses = [
  {
    name: "Support Treatment for the Underprivileged",
    description:
      "Providing free or subsidized care for those unable to afford essential treatments, including surgeries and follow-ups.",
  },
  {
    name: "Promote Nutrition",
    description:
      "Educating communities about the link between diet and eye health, and offering nutritional support to combat preventable conditions.",
  },
  {
    name: "Empower Women",
    description:
      "Offering training and employment opportunities for women, enabling them to play an active role in healthcare and community development.",
  },
  {
    name: "Generate Employment",
    description: "Creating jobs and skill-development programs in rural areas to uplift local communities.",
  },
];

const goalsData = [
  { title: "Restore Vision", icon: <FaEye />, description: "Perform free cataract surgeries for underprivileged patients." },
  { title: "Deliver Excellence", icon: <FaHandshake />, description: "Provide the best possible treatment and personalized care." },
  { title: "Promote Awareness", icon: <FaRibbon />, description: "Spread awareness about eye health and preventive care." },
  { title: "Set the Benchmark", icon: <BsTrophyFill />, description: "Establish DEH as a leading eye care model in the region." },
];

const objectives = [
  "Conduct a minimum of 10,000 free cataract surgeries annually, ensuring life-changing impact for thousands.",
  "Deliver world-class clinical outcomes with a focus on expertise, precision, and compassionate care.",
  "Invest in state-of-the-art technology and infrastructure to provide the highest standard of treatment.",
  "Develop a comprehensive referral network, reaching even the most remote areas to identify and treat patients.",
  "Drive impactful community outreach programs, spreading awareness and creating access to quality eye care for rural populations.",
];

const images = [grid1, grid2, grid3, grid4];

const Quote = ({ children }) => (
  <p className="mt-5 rounded-r-2xl border-l-4 border-sun-400 bg-sun-50 py-3 pl-4 pr-3 font-display text-xl font-semibold text-ink dark:bg-sun-500/10 dark:text-slate-200">
    {children}
  </p>
);

const CheckItem = ({ title, text }) => (
  <li className="flex gap-3">
    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-leaf-100 text-xs text-leaf-700 dark:bg-leaf-700/30 dark:text-leaf-300">
      <FaCheck />
    </span>
    <div>
      <h5 className="font-bold text-ink dark:text-white">{title}</h5>
      {text && <p className="mt-0.5 text-sm leading-relaxed">{text}</p>}
    </div>
  </li>
);

const VisionMissionGoals = () => {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = "Our Mission - Dristy Eye Hospital, Chouparan";
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
      <BackgroundWrapper title1="Home" title2="Our Mission" img={banner} />

      {/* Vision */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <img src={vision} alt={t("Our Vision")} className="aspect-[4/3] w-full rounded-3xl bg-slate-100 object-cover shadow-lift dark:bg-slate-800" />
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <h2 className="h-section">{t("Our Vision")}</h2>
            <Quote>{t("“A future where no one in Hazaribagh is left in darkness due to a curable condition.”")}</Quote>
            <p className="lead mt-6">
              {t("Our vision is clear: to ensure that by the year 2030, every individual with a curable eye condition in Hazaribagh, Koderma and Chatra can regain their sight, leading to a brighter and more hopeful community.")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section section-cream">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="right" className="lg:order-2">
            <div className="lg:sticky lg:top-28">
              <img src={mission} alt={t("Our Mission")} className="aspect-[4/3] w-full rounded-3xl bg-slate-100 object-cover shadow-lift dark:bg-slate-800" />
            </div>
          </Reveal>
          <Reveal variant="left" className="lg:order-1">
            <h2 className="h-section">{t("Our Mission")}</h2>
            <Quote>{t("“Transforming lives through compassionate and accessible eye care.”")}</Quote>
            <p className="lead mt-6">
              {t("We are committed to eradicating curable blindness among rural villagers by delivering high-quality eye care services. Our mission is built on three core pillars:")}
            </p>
            <ul className="mt-6 grid gap-4">
              {pillars.map((p) => (
                <CheckItem key={p.name} title={t(p.name)} text={t(p.details)} />
              ))}
            </ul>
            <h4 className="mt-10 text-lg font-bold">
              {t("At Dristy Eye Hospital, we go beyond eye care to transform lives holistically. We utilize the funds we receive to:")}
            </h4>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {fundUses.map((f, i) => (
                <Reveal as="li" key={f.name} delay={i * 0.07} variant="zoom" className="card card-hover p-5">
                  <h5 className="font-bold text-ink dark:text-white">{t(f.name)}</h5>
                  <p className="mt-1.5 text-sm leading-relaxed">{t(f.description)}</p>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Goals */}
      <section className="section">
        <div className="container-x">
          <SectionHeading title={t("Our Goals")} subtitle={t("“Striving to be a beacon of hope for the visually impaired.”")} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {goalsData.map((goal, i) => (
              <Reveal key={goal.title} delay={i * 0.08} variant="zoom" className="group card card-hover p-6">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sun-100 text-2xl text-sun-700 shadow-soft dark:bg-sun-500/15 dark:text-sun-300 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  {goal.icon}
                </span>
                <h3 className="mt-5 text-lg font-bold">{t(goal.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed">{t(goal.description)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section bg-primary-700">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="h-section !text-white">{t("Objectives")}</h3>
            <ul className="mt-8 space-y-4">
              {objectives.map((obj, i) => (
                <Reveal as="li" key={obj} delay={i * 0.08} variant="left" className="flex gap-4 text-lg text-primary-50">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sun-400 text-xs text-ink">
                    <FaCheck />
                  </span>
                  <p className="leading-relaxed">{t(obj)}</p>
                </Reveal>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="zoom" delay={0.1} className="grid grid-cols-2 gap-4">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Objective ${index + 1}`}
                loading="lazy"
                className={`h-44 w-full rounded-2xl object-cover shadow-lift transition-transform duration-500 hover:scale-[1.03] md:h-56 ${index % 2 ? "mt-8" : ""}`}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            title={t("Why Choose Us?")}
            subtitle={t("At Dristy Eye Hospital, we are more than just a healthcare provider; we are a partner in your journey toward better vision. Our commitment to innovation, compassion, and community engagement ensures that every patient receives the care they deserve.")}
          />
          <Reveal variant="zoom" className="mx-auto mt-10 max-w-4xl">
            <img className="w-full rounded-3xl shadow-lift" src={choose} alt={t("Why Choose Us?")} loading="lazy" />
          </Reveal>
          <Join />
        </div>
      </section>
    </>
  );
};

export default VisionMissionGoals;

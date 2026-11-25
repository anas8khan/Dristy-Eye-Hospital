import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import img from "../../assets/hospitalImg/IMG_1151.png";
import img2 from "../../assets/hospitalImg/IMG_1157.jpg";
import img3 from "../../assets/hospitalImg/IMG_1186.jpg";
import img4 from "../../assets/hospitalImg/IMG_1327.jpg";
import { contact } from "../../siteConfig";
import useAutoSlide from "../../component/ui/useAutoSlide";
import { useLanguage } from "../../context/LanguageContext";


const slides = [
  {
    img: img,
    header: "Welcome",
    title: "to Dristy Eye Hospital",
    description: "We provide world-class eye care services to help you see the world better.",
    buttonText: "View More Details",
    link: "/about",
  },
  {
    img: img2,
    header: "Expert",
    title: "Eye Specialists",
    description: "Our team of experienced specialists ensures the best treatment for your eyes.",
    buttonText: "Explore Our Blog",
    link: "/blog",
  },
  {
    img: img3,
    header: "Your",
    title: "vision is our passion",
    description: "We are here for your eye care.",
    buttonText: "Explore Our Mission",
    link: "/mission",
  },
  {
    img: img4,
    title: "Eye Specialists",
    description: "Our dedicated team of skilled specialists is committed to providing exceptional care.",
    buttonText: "Explore Our Treatments",
    link: "/treatments",
  },
];

const quickInfo = [
  { icon: <FaPhoneAlt />, label: "Call us for immediate assistance", value: contact.phone, href: contact.phoneHref },
  { icon: <FaClock />, label: "Timing", value: contact.hours },
  { icon: <HiOutlineCalendarDays />, label: "Need a Doctor for Check-up?", value: "Book Appointment", to: "/appointment" },
];

const Hero = () => {
  const { t } = useLanguage();
  const { index: active, go, setPaused } = useAutoSlide(slides.length, 5500);

  return (
    <section className="relative">
      <div
        className="relative h-[78vh] max-h-[820px] min-h-[540px] w-full overflow-hidden bg-navy md:h-[86vh]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
      >
        {slides.map((slide, index) => {
          const isActive = index === active;
          const Heading = index === 0 ? "h1" : "h2";
          return (
            <div
              key={index}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${isActive ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"}`}
            >
              <img
                src={slide.img}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${isActive ? "scale-100" : "scale-110"}`}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

              <div className="container-x relative flex h-full items-center pb-24">
                {isActive && (
                  <div className="max-w-2xl">
                    <span
                      style={{ animationDelay: "0ms" }}
                      className="hero-in mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-leaf-300 backdrop-blur"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-leaf-400" />
                      {t("Dristy Eye Hospital")}
                    </span>
                    <div className="hero-in" style={{ animationDelay: "120ms" }}>
                      <Heading className="font-display text-4xl font-extrabold leading-[1.08] !text-white sm:text-5xl lg:text-7xl">
                        {slide.header && <span className="text-leaf-400">{t(slide.header)}</span>} {t(slide.title)}
                      </Heading>
                    </div>
                    <p style={{ animationDelay: "240ms" }} className="hero-in mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl">
                      {t(slide.description)}
                    </p>
                    <div style={{ animationDelay: "360ms" }} className="hero-in mt-9 flex flex-wrap gap-3">
                      <Link to={slide.link} className="btn-leaf !px-7 !py-3.5 !text-base">
                        {t(slide.buttonText)} <HiArrowRight />
                      </Link>
                      <Link to="/appointment" className="btn-ghost-light !px-7 !py-3.5 !text-base">
                        {t("Appointment")}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Slide controls */}
        <div className="container-x absolute inset-x-0 bottom-24 z-20 flex items-center gap-3 md:bottom-24">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-10 bg-leaf" : "w-5 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
          <div className="ml-auto hidden gap-2 sm:flex">
            <button type="button" aria-label="Previous slide" onClick={() => go(active - 1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white/10">
              <HiArrowLeft />
            </button>
            <button type="button" aria-label="Next slide" onClick={() => go(active + 1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white/10">
              <HiArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Quick info strip overlapping the hero */}
      <div className="hero-in container-x relative z-10 -mt-16 md:-mt-14" style={{ animationDelay: "500ms" }}>
        <div className="card grid divide-y divide-slate-100 overflow-hidden !shadow-lift md:grid-cols-3 md:divide-x md:divide-y-0 dark:divide-slate-800">
          {quickInfo.map((item) => {
            const inner = (
              <>
                <span className="icon-badge">{item.icon}</span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t(item.label)}
                  </span>
                  <span className="mt-0.5 block text-base font-bold text-slate-900 dark:text-white">{t(item.value)}</span>
                </span>
              </>
            );
            const cls = "flex items-center gap-4 p-5 md:p-6 transition hover:bg-slate-50 dark:hover:bg-slate-800/50";
            if (item.href) return <a key={item.label} href={item.href} className={cls}>{inner}</a>;
            if (item.to) return <Link key={item.label} to={item.to} className={cls}>{inner}</Link>;
            return <div key={item.label} className={cls}>{inner}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;

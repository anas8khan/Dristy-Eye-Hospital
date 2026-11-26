import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineCalendarDays, HiOutlineEye } from "react-icons/hi2";
import { FaStethoscope } from "react-icons/fa6";
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
  const { index: active, go, setPaused } = useAutoSlide(slides.length, 6000);
  const slide = slides[active];

  return (
    <section className="relative isolate overflow-hidden bg-cream-100 dark:bg-slate-900">
      <div className="absolute inset-0 -z-10 bg-dots opacity-70" />
      <div className="absolute -right-32 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-sun-200/70 blur-3xl dark:bg-sun-500/10" />
      <div className="absolute -bottom-40 -left-24 -z-10 h-96 w-96 rounded-full bg-primary-100 blur-3xl dark:bg-primary-900/30" />

      <div
        className="container-x grid items-center gap-10 pb-24 pt-10 md:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-28"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
      >
        {/* Text */}
        <div key={active}>
          <span className="hero-in inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-primary-700 shadow-soft dark:bg-slate-800 dark:text-primary-200">
            <HiOutlineEye className="text-lg text-leaf-600" />
            {t("Dristy Eye Hospital")}
          </span>
          <div className="hero-in" style={{ animationDelay: "100ms" }}>
            <h1 className="mt-5 font-display text-[2.4rem] font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.9rem]">
              {slide.header && <span className="text-primary-600 dark:text-primary-300">{t(slide.header)} </span>}
              {t(slide.title)}
            </h1>
          </div>
          <p style={{ animationDelay: "200ms" }} className="hero-in mt-5 max-w-xl text-lg leading-relaxed text-slate-700 md:text-xl dark:text-slate-300">
            {t(slide.description)}
          </p>

          <div style={{ animationDelay: "300ms" }} className="hero-in mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <Link to="/appointment" className="btn-primary !px-7 !py-4 !text-lg">
              <HiOutlineCalendarDays className="text-xl" />
              {t("Book Appointment")}
            </Link>
            <a href={contact.phoneHref} className="btn-leaf !px-7 !py-4 !text-lg">
              <FaPhoneAlt />
              {contact.phone}
            </a>
          </div>
          <Link
            to={slide.link}
            style={{ animationDelay: "380ms" }}
            className="hero-in mt-5 inline-flex items-center gap-2 font-bold text-primary-700 underline-offset-4 hover:underline dark:text-primary-300"
          >
            {t(slide.buttonText)} <HiArrowRight />
          </Link>

          {/* Slide selector: photo thumbnails are easier to understand than dots */}
          <div className="mt-8 flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === active}
                onClick={() => go(i)}
                className={`relative h-14 w-14 overflow-hidden rounded-2xl border-[3px] transition-all duration-300 sm:h-16 sm:w-20 ${
                  i === active ? "border-sun-400 shadow-warm" : "border-white opacity-70 hover:opacity-100 dark:border-slate-700"
                }`}
              >
                <img src={s.img} alt="" className="h-full w-full object-cover" />
                {i === active && <span className="absolute inset-x-0 bottom-0 h-1 origin-left animate-[grow_6s_linear] bg-sun-400" />}
              </button>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="relative">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2.5rem] bg-primary-600 dark:bg-primary-800" aria-hidden="true" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-white shadow-lift lg:aspect-[5/5.2] dark:border-slate-800">
            {slides.map((s, i) => (
              <img
                key={i}
                src={s.img}
                alt=""
                aria-hidden={i !== active}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
                  i === active ? "scale-100 opacity-100" : "scale-110 opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="absolute -left-3 bottom-6 flex max-w-[15rem] animate-float-y items-center gap-3 rounded-2xl bg-leaf-600 px-4 py-3 text-white shadow-lift sm:-left-8 sm:bottom-10">
            <span className="font-display text-3xl font-extrabold leading-none">10,000+</span>
            <span className="text-sm font-semibold leading-tight text-leaf-50">{t("free cataract surgeries every year")}</span>
          </div>
          <div
            className="absolute -top-4 right-4 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift sm:flex dark:bg-slate-800"
            style={{ animation: "float-y 5s ease-in-out infinite", animationDelay: "1s" }}
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-sun-100 text-lg text-sun-700">
              <FaStethoscope />
            </span>
            <span>
              <span className="block font-display text-2xl font-extrabold leading-none text-ink dark:text-white">70,000+</span>
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{t("Surgeries")}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Quick info tiles straddle the bottom edge of the hero */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-16 bg-cream-50 dark:bg-slate-950" aria-hidden="true" />
      <div className="hero-in container-x relative z-10 -mt-16" style={{ animationDelay: "450ms" }}>
        <div className="grid gap-3 md:grid-cols-3 md:gap-5">
          {quickInfo.map((item, i) => {
            const colors = ["bg-leaf-600 text-white", "bg-sun-400 text-ink", "bg-primary-600 text-white"][i];
            const inner = (
              <>
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl shadow-soft ${colors}`}>{item.icon}</span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-slate-500 dark:text-slate-400">{t(item.label)}</span>
                  <span className="mt-0.5 block text-lg font-extrabold leading-snug text-ink dark:text-white">{t(item.value)}</span>
                </span>
                {(item.href || item.to) && <HiArrowRight className="ml-auto shrink-0 text-xl text-primary-600" />}
              </>
            );
            const cls = "card card-hover flex items-center gap-4 p-4 md:p-5";
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
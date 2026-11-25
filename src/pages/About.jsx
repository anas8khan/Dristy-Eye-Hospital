import React, { useEffect, useState } from "react";
import { FaHandshake, FaMinus, FaPlus, FaRegCheckCircle, FaRoute } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import BackgroundWrapper from "../component/BackgroundWrapper";
import LeadersSection from "../component/LeadersSection";
import StatsSection from "../component/StatsSection";
import ImageCarousel from "../component/ImageCarousel";
import Consultant from "../component/Consultant";
import SectionHeading from "../component/ui/SectionHeading";
import Reveal from "../component/ui/Reveal";
import { useApiData } from "../context/ApiDataContext";
import img from "../assets/hospitalImg/IMG_100.jpg";
import trust from "../assets/hospitalImg/IMG_1157.jpg";
import founder from "../assets/DSC_4342.jpg";
import banner from "../assets/bgwrapper.jpg";
import { useLanguage } from "../context/LanguageContext";

const hospital = {
  title: "About Dristy Eye Hospital",
  introduction:
    "With a profound commitment to transforming lives through the gift of vision, Dristy Eye Hospital has emerged as a beacon of hope for countless individuals in need. Founded under the guidance of Afroj Charitable Trust, our hospital is rooted in a legacy of selfless service, unwavering compassion, and an unrelenting pursuit of excellence in eye care. Our story is one of dedication, perseverance, and a relentless drive to make a meaningful difference in the lives of those we serve.",
  history: [
    "Our journey began with a shared vision to address the pressing need for cataract treatment, a leading cause of blindness. A group of dedicated visionaries came together to facilitate free cataract surgeries, restoring sight and empowering individuals to rediscover the world around them. This pioneering effort was just the beginning of an extraordinary journey, one that would take us to the forefront of eye care and beyond.",
    "As our efforts grew, we established the Afroj Charitable Trust to institutionalize our mission. We have made a profound impact through our trust, treating countless individuals and bringing hope to families and communities. Our work has been guided by a deep understanding of the complex social and economic factors that affect access to quality eye care. We have worked tirelessly to bridge the gap between those who have access to eye care and those who do not, ensuring that everyone has the opportunity to experience the world in all its beauty and complexity.",
    "Through our journey, we have encountered countless stories of struggle, resilience, and triumph. We have seen individuals who were once unable to see, now able to read, work, and live independently. We have witnessed families reunited, children educated, and communities empowered. These stories have inspired us, motivated us, and reminded us of the profound impact that our work can have on the lives of others.",
  ],
  partnerships: [
    {
      name: "District Blindness Control Society (DBCS)",
      details:
        "Through the National Program for Control of Blindness and Visual Impairment (NPCBVI), we receive financial assistance for free cataract surgeries, extending our services to rural communities.",
    },
    {
      name: "Ayushman Bharat Program",
      details:
        "Partnering with this government initiative enables us to deliver accessible and affordable eye care to beneficiaries across the region.",
    },
    {
      name: "Corporate Social Responsibility (CSR) Initiatives",
      details:
        "Collaborations with corporate partners allow us to organize vision camps and expand our outreach programs, impacting lives far and wide.",
    },
  ],
};

const trustInfo = {
  title: "About Afroj Charitable Trust",
  introduction:
    "Afroj Charitable Trust is a organization dedicated to transforming lives and fostering hope for the underprivileged. Registered under the Indian Trust Act of 1882 with Registration No. 10949/1310, the trust operates from its registered office in Vill. Marheri, PO+PS - Chouparan, Dist. - Hazaribagh, Jharkhand, PIN - 825406. Established in 2013, the trust was founded with a noble vision to uplift marginalized sections of society, focusing on women, children, scheduled tribes, other backward classes, minorities, the differently-abled, and elderly individuals.",
  achievements: [
    "Empowering individuals with vocational training to achieve financial independence.",
    "Providing essential health services and promoting nutritional awareness for a healthier society.",
    "Reaching out to deprived communities with essential health check-ups and guidance.",
    "Supporting the disabled and underprivileged with free legal advice and assistance.",
  ],
};

const service = [
  "Cataract Management using Advanced Phaco Machine with Foldable I.O.L.",
  "Glaucoma Evaluation & Management",
  "Glaucoma Surgery",
  "Removal of Glasses",
  "Eye Exercise",
  "Refraction & Contact Lenses",
  "Nd. YAG Laser for P.C.O",
  "Nd. YAG Laser for P.I",
  "Humphrey Visual Field Analyzer",
  "B-Scan (Ultrasound)",
  "A-Scan (Biometry)",
  "Non-Contact Tonometer",
  "Indirect Ophthalmoscope",
  "Uvea Clinic",
  "Vitreo Retinal Evaluation & Management",
  "Squint Management",
  "ODCR/DCT Surgery",
  "Pterygium Surgery",
  "Chalazion Surgery",
];

const culturalValues = [
  {
    title: "Patient-Centered Approach",
    description:
      "Our friendly and compassionate staff is dedicated to providing personalized attention, making sure that each patient’s unique needs and preferences are met.",
  },
  {
    title: "Empathy and Respect",
    description:
      "We foster an environment where every patient is treated with utmost respect and empathy, ensuring their comfort and well-being.",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Our team strives for excellence in every aspect of care, from advanced technology to expert medical attention.",
  },
];

const About = () => {
  const { gallery, isLoading, error } = useApiData();
  const [activeIndex, setActiveIndex] = useState(0);
  const { t, isHi } = useLanguage();

  useEffect(() => {
    document.title = "About - Dristy Eye Hospital, Chouparan";
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
      <BackgroundWrapper title1="Home" title2="About" img={banner} />

      {/* About the hospital */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal variant="left" className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <img src={img} alt={t(hospital.title)} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift" />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <SectionHeading align="left" eyebrow={t("About Us")} title={t(hospital.title)} />
            <p className="lead mt-5">{t(hospital.introduction)}</p>

            <Reveal variant="right" className="mt-10">
              <h3 className="flex items-center gap-3 text-xl font-bold">
                <span className="icon-badge !h-10 !w-10 !text-base"><FaRoute /></span>
                {t("Our Journey")}
              </h3>
              <div className="mt-5 space-y-4 border-l-2 border-primary-100 pl-6 dark:border-slate-800">
                {hospital.history.map((p, i) => (
                  <p key={i} className="leading-relaxed">{t(p)}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <h3 className="flex items-center gap-3 text-xl font-bold">
                <span className="icon-badge !h-10 !w-10 !text-base"><FaHandshake /></span>
                {t("Partnerships for a Cause")}
              </h3>
              <div className="mt-5 grid gap-4">
                {hospital.partnerships.map((p, i) => (
                  <Reveal key={p.name} delay={i * 0.08} variant="right" className="card card-hover flex gap-4 p-5">
                    <FaRegCheckCircle className="mt-1 shrink-0 text-lg text-leaf-500" />
                    <p className="text-sm leading-relaxed">
                      <span className="font-bold text-slate-900 dark:text-white">{t(p.name)}:</span> {t(p.details)}
                    </p>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About the trust */}
      <section className="section bg-slate-50 dark:bg-slate-900/40">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionHeading align="left" title={t(trustInfo.title)} />
            <p className="lead mt-5">{t(trustInfo.introduction)}</p>
            <Reveal className="mt-8">
              <h3 className="text-xl font-bold">{t("Our Key Initiatives")}</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {trustInfo.achievements.map((a, i) => (
                  <Reveal as="li" key={a} delay={i * 0.07} variant="zoom" className="card card-hover flex gap-3 p-4 text-sm leading-relaxed">
                    <FaRegCheckCircle className="mt-0.5 shrink-0 text-lg text-leaf-500" />
                    {t(a)}
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal variant="right" className="order-1 lg:order-2">
            <div className="relative">
              <img src={trust} alt={t(trustInfo.title)} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
              <div className="absolute -bottom-6 -left-4 flex animate-float-y items-center gap-3 rounded-2xl bg-white p-4 shadow-lift dark:bg-slate-900 sm:-left-6">
                <span className="icon-badge"><HiOutlineBuildingOffice2 /></span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{t("Registration No.")}</p>
                  <p className="font-bold text-slate-900 dark:text-white">10949/1310</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Consultant />

      {/* Services list */}
      <section className="section pt-4">
        <div className="container-x">
          <SectionHeading title={t("Service provided by Dristy Eye Hospital")} />
          <ul className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.map((s, i) => (
              <Reveal as="li" key={s} delay={(i % 3) * 0.06} y={16} className="card card-hover flex items-center gap-3 px-5 py-4">
                <FaRegCheckCircle className="shrink-0 text-lg text-primary-600 dark:text-primary-300" />
                <span className="font-medium text-slate-700 dark:text-slate-200">{t(s)}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Culture */}
      <section className="section bg-slate-50 dark:bg-slate-900/40">
        <div className="container-x">
          <SectionHeading title={t("Culture at Dristy Eye Hospital")} />
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
            <Reveal variant="left">
              <h3 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
                {t("More than just a")} <br />
                <span className="text-primary-600 dark:text-primary-300">{t("Hospital, we are a Home")}</span>
              </h3>
            </Reveal>
            <div className="space-y-3">
              {culturalValues.map((value, index) => {
                const open = activeIndex === index;
                return (
                  <div key={value.title} className={`card overflow-hidden transition ${open ? "!border-primary-200" : ""}`}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(open ? null : index)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className={`text-lg font-bold ${open ? "text-primary-600 dark:text-primary-300" : "text-slate-900 dark:text-white"}`}>
                        {t(value.title)}
                      </span>
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm transition ${open ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`}>
                        {open ? <FaMinus /> : <FaPlus />}
                      </span>
                    </button>
                    <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="min-h-0 overflow-hidden">
                        <p className="px-5 pb-5 leading-relaxed">{t(value.description)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            title={t("The ones who laid our foundation")}
            subtitle={t("The founders of Dristy Eye Hospital are pioneers in eye care, passionately redefining vision health with a blend of innovation, compassion, and an unshakable commitment to enhancing lives—especially for the underprivileged—through affordable and exceptional patient care.")}
          />
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-12">
            <Reveal variant="zoom" className="lg:col-span-4">
              <div className="relative mx-auto max-w-xs">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-br from-primary-500 to-leaf" />
                <img src={founder} alt={t("Md Imran Khan")} className="relative w-full rounded-3xl bg-slate-200 object-cover shadow-lift" />
              </div>
            </Reveal>
            <Reveal variant="right" delay={0.1} className="lg:col-span-8">
              <h3 className="font-display text-3xl font-extrabold text-primary-700 dark:text-primary-300 md:text-4xl">{t("Md Imran Khan")}</h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-leaf-600 dark:text-leaf-400">{t("Co-founder & Director")}</p>
              {isHi ? (
                <div className="mt-6 space-y-4 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 dark:text-white">दृष्टि आई हॉस्पिटल</strong> के पीछे की सोच हमारे संस्थापक की है, जो सुलभ और अच्छी नेत्र सेवा से लोगों की ज़िंदगी बदलने के लिए समर्पित हैं। इलाज को सस्ता और सबकी पहुँच में लाने के मिशन के साथ, यह अस्पताल भारतीय ट्रस्ट अधिनियम, 1882 के तहत पंजीकृत एक ट्रस्ट की इकाई के रूप में काम करता है।
                  </p>
                  <p>
                    संस्थापक के नेतृत्व में <strong className="text-slate-900 dark:text-white">दृष्टि आई हॉस्पिटल</strong> ने कई बड़ी उपलब्धियाँ हासिल की हैं, जिनमें हर साल 10,000+ से ज़्यादा मुफ़्त मोतियाबिंद ऑपरेशन शामिल हैं। इलाज के अलावा, संस्थापक ने मुफ़्त नेत्र जाँच, चश्मा वितरण और आँखों की सेहत पर जागरूकता अभियान जैसे असरदार कार्यक्रम भी शुरू किए हैं।
                  </p>
                  <p>
                    उनकी अटूट लगन और दूसरों को प्रेरित करने की क्षमता ने इस अस्पताल को ग़रीब और वंचित समुदायों के लिए उम्मीद की किरण बना दिया है। इसी सोच के साथ <strong className="text-slate-900 dark:text-white">दृष्टि आई हॉस्पिटल</strong> सभी तक आँखों की रोशनी पहुँचाने का अपना मिशन जारी रखे हुए है।
                  </p>
                </div>
              ) : (
              <div className="mt-6 space-y-4 leading-relaxed">
                <p>
                  The visionary behind <strong className="text-slate-900 dark:text-white">DRISTY EYE HOSPITAL</strong>, our Founder, is
                  dedicated to transforming lives through accessible and quality eye care. With a mission to bridge the gap between
                  affordability and healthcare, the hospital operates as a unit of a trust registered under the Indian Trust Act of 1882.
                </p>
                <p>
                  Under the Founder’s leadership, <strong className="text-slate-900 dark:text-white">DRISTY EYE HOSPITAL</strong> has achieved
                  remarkable milestones, including over 10,000+ free cataract surgeries every year. Beyond treatment, the Founder has
                  initiated impactful programs such as free eye check-ups, spectacles distribution, and community awareness campaigns
                  about eye health.
                </p>
                <p>
                  Their unwavering commitment and ability to inspire others have made the hospital a beacon of hope for underprivileged
                  communities. Guided by this vision, <strong className="text-slate-900 dark:text-white">DRISTY EYE HOSPITAL</strong> continues
                  its mission to bring the gift of sight to all.
                </p>
              </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <LeadersSection />
      <StatsSection />

      <section className="py-16">
        <div className="container-x">
          <ImageCarousel images={gallery} isLoading={isLoading} error={error} />
        </div>
      </section>
    </>
  );
};

export default About;

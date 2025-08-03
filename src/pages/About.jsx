import React, { useEffect, useState } from "react";
import BackgroundWrapper from "../component/BackgroundWrapper";
import img from "../assets/hospitalImg/IMG_100.jpg";
import trust from "../assets/hospitalImg/IMG_1157.jpg";
import founder from "../assets/DSC_4342.jpg";
import banner from "../assets/bgwrapper.jpg";
import {
  FaHandshake,
  FaMinus,
  FaPlus,
  FaRegCheckCircle,
  FaRoute,
} from "react-icons/fa";
import LeadersSection from "../component/LeadersSection";
import StatsSection from "../component/StatsSection";
import { IoIosMail, IoMdTime } from "react-icons/io";
import { MdEmergency } from "react-icons/md";
import ImageCarousel from "../component/ImageCarousel";
import Consultant from "../component/Consultant";
import { useApiData } from "../context/ApiDataContext";

const About = () => {
  const { gallery, isLoading, error } = useApiData();

  useEffect(() =>{
        document.title = "About - Dristy Eye Hospital, Chouparan";
        const meta = document.querySelector("meta[name='description']");
        if(meta){
          meta.setAttribute("content", "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged.");
        }
      },[])

  const sections = [
    {
      title: "About Dristy Eye Hospital",
      subtitles: {
        journey: {
          text: "Our Journey",
          icon: <FaRoute className="text-primary mr-2" />,
        },
        partnerships: {
          text: "Partnerships for a Cause",
          icon: <FaHandshake className="text-primary mr-2" />,
        },
      },
      content: {
        introduction:
          "With a profound commitment to transforming lives through the gift of vision, Dristy Eye Hospital has emerged as a beacon of hope for countless individuals in need. Founded under the guidance of Afroj Charitable Trust, our hospital is rooted in a legacy of selfless service, unwavering compassion, and an unrelenting pursuit of excellence in eye care. Our story is one of dedication, perseverance, and a relentless drive to make a meaningful difference in the lives of those we serve.",
        history: [
          "Our journey began with a shared vision to address the pressing need for cataract treatment, a leading cause of blindness. A group of dedicated visionaries came together to facilitate free cataract surgeries, restoring sight and empowering individuals to rediscover the world around them. This pioneering effort was just the beginning of an extraordinary journey, one that would take us to the forefront of eye care and beyond.",
          "As our efforts grew, we established the Afroj Charitable Trust to institutionalize our mission. We have made a profound impact through our trust, treating countless individuals and bringing hope to families and communities. Our work has been guided by a deep understanding of the complex social and economic factors that affect access to quality eye care. We have worked tirelessly to bridge the gap between those who have access to eye care and those who do not, ensuring that everyone has the opportunity to experience the world in all its beauty and complexity.",
          "Through our journey, we have encountered countless stories of struggle, resilience, and triumph. We have seen individuals who were once unable to see, now able to read, work, and live independently. We have witnessed families reunited, children educated, and communities empowered. These stories have inspired us, motivated us, and reminded us of the profound impact that our work can have on the lives of others.",
        ],
        partnerships: [
          {
            icon: <FaRegCheckCircle size={18} />,
            name: "District Blindness Control Society (DBCS)",
            details:
              "Through the National Program for Control of Blindness and Visual Impairment (NPCBVI), we receive financial assistance for free cataract surgeries, extending our services to rural communities.",
          },
          {
            icon: <FaRegCheckCircle size={18} />,
            name: "Ayushman Bharat Program",
            details:
              "Partnering with this government initiative enables us to deliver accessible and affordable eye care to beneficiaries across the region.",
          },
          {
            icon: <FaRegCheckCircle size={18} />,
            name: "Corporate Social Responsibility (CSR) Initiatives",
            details:
              "Collaborations with corporate partners allow us to organize vision camps and expand our outreach programs, impacting lives far and wide.",
          },
        ],
      },
      image: img,
      reverse: false,
    },
    {
      title: "About Afroj Charitable Trust",
      content: {
        introduction:
          "Afroj Charitable Trust is a organization dedicated to transforming lives and fostering hope for the underprivileged. Registered under the Indian Trust Act of 1882 with Registration No. 10949/1310, the trust operates from its registered office in Vill. Marheri, PO+PS - Chouparan, Dist. - Hazaribagh, Jharkhand, PIN - 825406. Established in 2013, the trust was founded with a noble vision to uplift marginalized sections of society, focusing on women, children, scheduled tribes, other backward classes, minorities, the differently-abled, and elderly individuals.",
        achievements: [
          {
            text: "Empowering individuals with vocational training to achieve financial independence.",
            icon: <FaRegCheckCircle />,
          },
          {
            text: "Providing essential health services and promoting nutritional awareness for a healthier society.",
            icon: <FaRegCheckCircle />,
          },
          {
            text: "Reaching out to deprived communities with essential health check-ups and guidance.",
            icon: <FaRegCheckCircle />,
          },
          {
            text: "Supporting the disabled and underprivileged with free legal advice and assistance.",
            icon: <FaRegCheckCircle />,
          },
        ],
        mission:
          "The mission of Afroj Charitable Trust is to ensure that no individual suffers from avoidable blindness due to lack of resources. By leveraging community support, partnerships, and advanced medical expertise, the trust strives to make vision care accessible to everyone.",
      },
      image: trust,
      reverse: true,
    },
  ];

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

  const statsData = [
    {
      icon: <IoMdTime />,
      value: "Monday - Saturday",
      label: "10 AM to 6 PM",
    },
    {
      icon: <MdEmergency />,
      value: "Emergency 24 x 7",
      label: "+91 9771740140",
    },
    {
      icon: <IoIosMail />,
      value: "Email",
      label: "imranchouparan@gmail.com",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader text-xl text-primary"></div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center min-h-screen text-red-500">
          <p>{error}</p>
        </div>
      ) : (
        <>
          <BackgroundWrapper title1="Home" title2="About" img={banner} />
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                section.reverse ? "md:flex-row-reverse" : "md:flex-row"
              }  p-6 lg:p-12`}
            >
              <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-[70%] lg:h-[55vh] sm:h-[30vh] bg-gray-100 p-3 rounded-lg"
                />
              </div>
              <div className="w-full md:w-[40%] md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold md:text-start text-center dark:text-gray-200 text-gray-800 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {section.content.introduction}
                </p>

                {section.content.history && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold flex items-center mb-2 dark:text-gray-200">
                      {section.subtitles?.journey?.icon}{" "}
                      {section.subtitles?.journey?.text}
                    </h3>
                    {section.content.history.map((historyItem, i) => (
                      <p
                        key={i}
                        className="text-gray-600 leading-relaxed mb-4 dark:text-gray-300"
                      >
                        {historyItem}
                      </p>
                    ))}
                  </div>
                )}

                {section.content.achievements && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2 dark:text-gray-300">
                      Our Key Initiatives
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {section.content.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-600 mb-2 flex gap-2 dark:text-gray-200"
                        >
                          <span className="text-primary mt-2">
                            {achievement.icon}
                          </span>
                          {achievement.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.content.partnerships && (
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold flex items-center mb-2 dark:text-gray-200">
                      {section.subtitles?.partnerships?.icon}{" "}
                      {section.subtitles?.partnerships?.text}
                    </h3>
                    {section.content.partnerships.map((partnership, i) => (
                      <div key={i} className="flex lg:items-start gap-2">
                        <span className="mt-1 text-primary">
                          {partnership.icon}
                        </span>
                        <div>
                          <h5 className="text-gray-600 dark:text-gray-300">
                            <span className="font-bold text-black dark:text-gray-100">
                              {partnership.name}:
                            </span>{" "}
                            {partnership.details}
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          <Consultant />

          <div className="flex flex-col items-center justify-center gap-8 w-full mt-8 lg:max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-center dark:text-gray-200">
              Service provided by Dristy Eye Hospital
            </h1>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 px-10 py-4">
                {service.map((service, index) => (
                  <div key={index} className="flex items-center gap-2 lg:w-[75%] lg:mx-auto">
                    <FaRegCheckCircle size={20} className="text-primary" />
                    <p className="text-gray-600 text-lg dark:text-gray-300 w-full">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-4 py-10 md:px-24">
            <h1 className="text-2xl md:text-4xl font-bold text-center dark:text-gray-300">
              Culture at Dristy Eye Hospital
            </h1>
            <div className="flex flex-col md:flex-row gap-8 mt-8 lg:px-20 p-6">
              <div className="lg:w-1/2">
                <h1 className="text-2xl md:text-3xl lg:text-4xl leading-snug font-semibold md:text-left dark:text-gray-300 ">
                  More than just a <br /> Hospital, we are a Home
                </h1>
              </div>
              <div className="w-full lg:w-1/2 mx-auto dark:text-gray-300">
                {culturalValues.map((value, index) => (
                  <div key={index} className="pb-4 mb-4">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span
                        className={`text-lg font-semibold flex items-center gap-2 transform transition-all duration-150 ${
                          activeIndex === index ? "text-primary scale-105" : ""
                        } active:scale-95`}
                      >
                        {activeIndex === index ? (
                          <FaMinus className="text-primary" />
                        ) : (
                          <FaPlus className="text-primary" />
                        )}
                        {value.title}
                      </span>
                    </div>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden transform ${
                        activeIndex === index
                          ? "max-h-screen opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-2"
                      }`}
                    >
                      {activeIndex === index && (
                        <p className="mt-2 text-gray-600 dark:text-gray-200">
                          {value.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center dark:text-gray-300">
              The ones who laid our foundation
            </h2>
            <p className="md:w-[50%] text-center p-8 md:p-0 dark:text-gray-200">
              The founders of Dristy Eye Hospital are pioneers in eye care,
              passionately redefining vision health with a blend of innovation,
              compassion, and an unshakable commitment to enhancing
              lives—especially for the underprivileged—through affordable and
              exceptional patient care.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center p-6 lg:p-12">
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img
                src={founder}
                alt={founder}
                className="md:w-[50%] w-[45%] dark:bg-white bg-gray-300 p-3 rounded-lg"
              />
            </div>
            <div className="w-full md:w-[50%] md:text-left text-center">
              <div className="mb-4">
                <h2 className="text-2xl md:text-4xl font-bold md:text-start text-center text-primary mb-1 dark:text-gray-300">
                  Md Imran Khan
                </h2>
                <span className="text-primary uppercase text-center dark:text-gray-300">
                  Co-founder & Director
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 w-[90%] dark:text-gray-300">
                The visionary behind <strong>DRISTY EYE HOSPITAL</strong>, our
                Founder, is dedicated to transforming lives through accessible
                and quality eye care. With a mission to bridge the gap between
                affordability and healthcare, the hospital operates as a unit of
                a trust registered under the Indian Trust Act of 1882.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 w-[95%] dark:text-gray-300">
                Under the Founder’s leadership,{" "}
                <strong>DRISTY EYE HOSPITAL</strong> has achieved remarkable
                milestones, including over 10,000+ free cataract surgeries every
                year. Beyond treatment, the Founder has initiated impactful
                programs such as free eye check-ups, spectacles distribution,
                and community awareness campaigns about eye health.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 w-[95%] dark:text-gray-300">
                Their unwavering commitment and ability to inspire others have
                made the hospital a beacon of hope for underprivileged
                communities. Guided by this vision,{" "}
                <strong>DRISTY EYE HOSPITAL</strong> continues its mission to
                bring the gift of sight to all.
              </p>
            </div>
          </div>

          <div>
            <LeadersSection />
          </div>

          <StatsSection statsData={statsData} />

          <ImageCarousel images={gallery} isLoading={isLoading} error={error} />
        </>
      )}
    </div>
  );
};

export default About;

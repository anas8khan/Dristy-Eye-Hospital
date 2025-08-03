import React, { useEffect } from "react";
import BackgroundWrapper from "../component/BackgroundWrapper";
import { FaCheck, FaEye, FaHandshake, FaRibbon } from "react-icons/fa6";
import vision from "../assets/vision.png";
import mission from "../assets/mission.jpg";
import choose from "../assets/chooseus.jpg";
import grid1 from "../assets/grid1.jpg";
import grid2 from "../assets/grid2.jpg";
import grid3 from "../assets/grid3.jpg";
import grid4 from "../assets/grid4.jpg";
import { BsTrophyFill } from "react-icons/bs";
import banner from "../assets/bgwrapper.jpg";
import Join from "../component/Join";

const sections = [
  {
    title: "Our Vision",
    image: vision,
    slogun:
      "“A future where no one in Hazaribagh is left in darkness due to a curable condition.”",
    reverse: false,
    content: {
      introduction:
        "Our vision is clear: to ensure that by the year 2030, every individual with a curable eye condition in Hazaribagh, Koderma and Chatra can regain their sight, leading to a brighter and more hopeful community.",
    },
  },
  {
    title: "Our Mission",
    image: mission,
    slogun:
      "“Transforming lives through compassionate and accessible eye care.”",
    reverse: true,
    content: {
      introduction:
        "We are committed to eradicating curable blindness among rural villagers by delivering high-quality eye care services. Our mission is built on three core pillars:",
      partnerships: [
        {
          name: "Compassionate Service",
          details: "Collaborated for advanced AI solutions.",
        },
        {
          name: "Community Synergy",
          details:
            "Partnering with local communities to address eye health needs collectively.",
        },
        {
          name: "Sustainability",
          details:
            "Ensuring long-term access to preventive and curative eye care for all.",
        },
      ],
      intro:
        "At Dristy Eye Hospital, we go beyond eye care to transform lives holistically. We utilize the funds we receive to:",
      description: [
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
          description:
            "Creating jobs and skill-development programs in rural areas to uplift local communities.",
        },
      ],
    },
  },
];

const goalsData = [
  {
    id: 1,
    title: "Restore Vision",
    icons: <FaEye size={30} />,
    description:
      "Perform free cataract surgeries for underprivileged patients.",
  },
  {
    id: 2,
    title: "Deliver Excellence",
    icons: <FaHandshake size={30} />,
    description: "Provide the best possible treatment and personalized care.",
  },
  {
    id: 3,
    title: "Promote Awareness",
    icons: <FaRibbon size={30} />,
    description: "Spread awareness about eye health and preventive care.",
  },
  {
    id: 4,
    title: "Set the Benchmark",
    icons: <BsTrophyFill size={30} />,
    description: "Establish DEH as a leading eye care model in the region.",
  },
];

const Objective = [
  "Conduct a minimum of 10,000 free cataract surgeries annually, ensuring life-changing impact for thousands.",
  "Deliver world-class clinical outcomes with a focus on expertise, precision, and compassionate care.",
  "Invest in state-of-the-art technology and infrastructure to provide the highest standard of treatment.",
  "Develop a comprehensive referral network, reaching even the most remote areas to identify and treat patients.",
  "Drive impactful community outreach programs, spreading awareness and creating access to quality eye care for rural populations.",
];

const images = [grid1, grid2, grid3, grid4];

const VisionMissionGoals = () => {
  useEffect(() => {
    document.title = "Our Mission - Dristy Eye Hospital, Chouparan";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged.");
    }
  }, [])
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <BackgroundWrapper title1="Home" title2="Our Mission" img={banner} />

      {/* Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col ${section.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center p-6 lg:p-12 gap-8`}
        >
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={section.image}
              alt={section.title}
              className="w-[70%] lg:h-[40vh] sm:h-[30vh] bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow-md"
            />
          </div>

          <div className="w-full lg:w-[40%]">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-gray-200 mb-4">
              {section.title}
            </h2>
            <h4 className="text-lg mb-4 italic text-gray-500 dark:text-gray-400">
              {section.slogun}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {section.content.introduction}
            </p>

            {/* Partnerships */}
            {section.content.partnerships && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center mb-4">
                  {section.subtitles?.partnerships?.icon}{" "}
                  {section.subtitles?.partnerships?.text}
                </h3>
                {section.content.partnerships.map((partnership, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-primary mt-1">
                      <FaCheck />
                    </span>
                    <div>
                      <h5 className="font-bold text-gray-800 dark:text-gray-200">
                        {partnership.name}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        {partnership.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Additional Content */}
            {section.content.description && (
              <div className="mt-6 space-y-4">
                <h4 className="font-bold text-gray-800 dark:text-gray-200">
                  {section.content.intro}
                </h4>
                {section.content.description.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-primary mt-1">
                      <FaCheck />
                    </span>
                    <div>
                      <h5 className="font-bold text-gray-800 dark:text-gray-200">
                        {item.name}</h5>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Goals Section */}
      <div className="max-w-7xl mx-auto mb-12 px-4 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
          Our Goals
        </h2>
        <h4 className="text-center italic text-gray-500 dark:text-gray-400 mb-10">
          “Striving to be a beacon of hope for the visually impaired.”
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {goalsData.map((goal) => (
            <div
              key={goal.id}
              className="flex items-center gap-4 p-4 rounded-xl shadow-lg hover:shadow-xl bg-gray-50 dark:bg-gray-800"
            >
              <span className="text-primary text-3xl">{goal.icons}</span>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                <strong>{goal.title}</strong>: {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Objectives Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Objectives
            </h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              {Objective.map((obj, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-primary text-xl">
                    <FaCheck />
                  </span>
                  <p>{obj}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Objective ${index + 1}`}
                className="w-full h-40 object-cover rounded-xl shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 text-center bg-white dark:bg-gray-900">
        <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Why Choose Us?
        </h3>
        <p className="lg:w-1/2 mx-auto text-gray-600 dark:text-gray-400 mb-8">
          At Dristy Eye Hospital, we are more than just a healthcare provider; we
          are a partner in your journey toward better vision. Our commitment to
          innovation, compassion, and community engagement ensures that every
          patient receives the care they deserve.
        </p>
        <img
          className="w-3/4 lg:w-1/2 mx-auto rounded-xl shadow-lg"
          src={choose}
          alt="Why Choose Us"
        />
        <Join />
      </section>
    </div>

  );
};

export default VisionMissionGoals;

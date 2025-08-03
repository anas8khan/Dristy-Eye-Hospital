import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import treatmentData from "./treatmentData.json";
import BackgroundWrapper from "../../component/BackgroundWrapper";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Consultant from "../../component/Consultant";

const TreatmentDetails = () => {
  const { treatmentName } = useParams();

  useEffect(() => {
    document.title = `${treatmentName} - Dristy Eye Hospital, Chouparan`;
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Dristy Eye Hospital a unit of Afroz Charitable trust is a non-profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged."
      );
    }
  }, [treatmentName]);

  const [treatment, setTreatment] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const selectedTreatment = treatmentData.find(
      (treatment) =>
        treatment.name.toLowerCase() === treatmentName.toLowerCase()
    );
    setTreatment(selectedTreatment || null);
  }, [treatmentName]);

  if (!treatment) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-semibold text-red-500">Treatment Details Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <BackgroundWrapper
        title1={"Home"}
        title2={treatmentName}
        img={treatment.introduction.banner}
      />
      <section className="max-w-7xl mx-auto w-full px-4 py-8">
        {/* Introduction Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              {treatment.introduction.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {treatment.introduction.content}
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={treatment.introduction.image}
              alt={treatment.introduction.title}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Symptoms Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            {treatment.symptoms.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatment.symptoms.list.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
              >
                <img
                  src={
                    treatment.symptoms.images
                      ? treatment.symptoms.images[index]
                      : ""
                  }
                  alt={`Symptom ${index + 1}`}
                  className="w-32 h-32 rounded-full object-cover shadow-lg mb-4"
                />
                <p className="text-gray-700 text-center font-semibold dark:text-gray-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Prevention Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
            {treatment.prevention.title}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <ul className="space-y-4">
                {treatment.prevention.list.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-gray-700 dark:text-gray-300"
                  >
                    <FaCheck className="text-green-400 mt-1" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={treatment.prevention.image}
                alt="Prevention"
                className="w-3/4 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Treatments Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            {treatment.treatments.title}
          </h2>
          <div className="space-y-8">
            {treatment.treatments.list.map((treatmentItem, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {treatmentItem.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {treatmentItem.description}
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <img
                    src={treatmentItem.image}
                    alt={treatmentItem.name}
                    className="w-3/4 rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            {treatment.faq.title}
          </h2>
          <div className="space-y-6">
            {treatment.faq.list.map((faq, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md dark:bg-gray-800">
                <h3
                  className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-700 dark:text-gray-200"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span>
                    {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-500 mt-2 ${
                    openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#0320d8] dark:text-gray-400 mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Consultant />
    </>
  );
};

export default TreatmentDetails;

import React, { useEffect } from "react";
import BackgroundWrapper from "../../component/BackgroundWrapper";
import banner from "../../assets/bgwrapper.jpg"

const ServiceDetails = () => {
  useEffect(() =>{
        document.title = "Treatments Detail - Dristy Eye Hospital, Chouparan";
        const meta = document.querySelector("meta[name='description']");
        if(meta){
          meta.setAttribute("content", "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged.");
        }
      },[])
  return (
    <>
      <BackgroundWrapper title1={"Home"} title2={"Treatments Details"} img={banner}/>
      
      <div className="flex flex-wrap bg-gray-50 p-6 mt-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Doctor holding a heart model"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Retina Care In Grand Rapids At Dristy Eye Clinic
            </h2>
            <p className="text-gray-600 mb-4 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting.
            </p>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Retina Disease Symptoms
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              aliquid, suscipit, minima magnam quasi deserunt tempora quia
              reiciendis adipisci similique minus quibusdam saepe neque nemo!
              Amini vel preferendis alias fugit.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              We’d Love To Tell You More About Retina Diseases
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Online Care Service 24/7
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;

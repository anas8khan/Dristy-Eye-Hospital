import React, { useEffect, useState } from "react";
import BackgroundWrapper from "../../component/BackgroundWrapper";
import { useParams } from "react-router-dom";
import { useApiData } from "../../context/ApiDataContext";
import doctorData from "../../doctorData.json"; 
import img from "../../assets/bgwrapper.jpg";
import Consultant from "../../component/Consultant"; 

const DoctorProfile = () => {
  const { doctorName } = useParams();
  const [doctorDetails, setDoctorDetails] = useState(null);
  const { isLoading, setIsLoading } = useApiData();

  useEffect(() => {
    document.title = "Doctor Profile - Dristy Eye Hospital, Chouparan";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Dristy Eye Hospital a unit of Afroz Charitable trust is a non-profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged."
      );
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const doctorsArray = doctorData.doctors || [];
    const doctor = doctorsArray.find((doctor) => doctor.name === doctorName);
    setDoctorDetails(doctor || null); 

    setIsLoading(false);
  }, [doctorName, setIsLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader text-xl text-primary"></div>
      </div>
    );
  }

  if (!doctorDetails) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 dark:text-gray-300">
          Doctor details not found.
        </p>
      </div>
    );
  }

  return (
    <>
      <BackgroundWrapper
        title1={"Home"}
        title2={doctorDetails.name}
        img={img}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10 lg:px-20">
        <div className="flex justify-center md:justify-start">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:block">
              <img
                src={doctorDetails.image}
                alt={doctorDetails.name}
                className="w-[70%] lg:h-[40vh] sm:h-[30vh] bg-gray-100 dark:bg-gradient-to-r from-slate-900 to-slate-700 p-3 rounded-lg"
              />
            </div>
            <h2 className="mt-4 text-xl font-bold dark:text-gray-200">
              {doctorDetails.name}
            </h2>
            <p className="text-blue-700 font-medium dark:text-gray-300">
              {doctorDetails.specialization}
            </p>
            <p className="mt-2 text-gray-600 text-sm dark:text-gray-200">
              {doctorDetails.description}
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white dark:bg-gradient-to-r from-slate-900 to-slate-700 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
              Biography
            </h3>
            <p className="text-gray-600 dark:text-gray-200 mt-4">
              {doctorDetails.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 dark:bg-transparent p-4 rounded-lg">
                <p className="font-semibold dark:text-gray-300">Speciality:</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {doctorDetails.specialization}
                </p>
              </div>
              <div className="bg-teal-50 dark:bg-transparent p-4 rounded-lg">
                <p className="font-semibold dark:text-gray-300">Degree:</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {doctorDetails.qualification}
                </p>
              </div>
              <div className="bg-teal-50 dark:bg-transparent p-4 rounded-lg">
                <p className="font-semibold dark:text-gray-300">Hospital:</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {doctorDetails.hospital}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultant Component */}
      <Consultant />
    </>
  );
};

export default DoctorProfile;

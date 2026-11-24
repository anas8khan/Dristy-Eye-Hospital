import React, { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineAcademicCap, HiOutlineBuildingOffice2, HiOutlineSparkles, HiArrowRight } from "react-icons/hi2";
import BackgroundWrapper from "../../component/BackgroundWrapper";
import Consultant from "../../component/Consultant";
import Reveal from "../../component/ui/Reveal";
import ImageWithFallback from "../../component/ui/ImageWithFallback";
import doctorData from "../../doctorData.json";
import img from "../../assets/bgwrapper.jpg";

const DoctorProfile = () => {
  const { doctorName } = useParams();
  const doctorDetails = useMemo(
    () => (doctorData.doctors || []).find((doctor) => doctor.name === doctorName) || null,
    [doctorName]
  );

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

  if (!doctorDetails) {
    return (
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
        <p className="text-lg text-slate-500 dark:text-slate-300">Doctor details not found.</p>
        <Link to="/doctor" className="btn-primary">{"Doctor's"} <HiArrowRight /></Link>
      </div>
    );
  }

  const facts = [
    { icon: <HiOutlineSparkles />, label: "Speciality:", value: doctorDetails.specialization },
    { icon: <HiOutlineAcademicCap />, label: "Degree:", value: doctorDetails.qualification },
    { icon: <HiOutlineBuildingOffice2 />, label: "Hospital:", value: doctorDetails.hospital },
  ];

  return (
    <>
      <BackgroundWrapper title1={"Home"} title2={doctorDetails.name} img={img} />
      <section className="section">
        <div className="container-x grid items-start gap-10 lg:grid-cols-3">
          <Reveal className="card overflow-hidden lg:sticky lg:top-28">
            <div className="aspect-[4/5] bg-gradient-to-b from-primary-50 to-primary-100 dark:from-slate-800 dark:to-slate-900">
              <ImageWithFallback src={doctorDetails.image} alt={doctorDetails.name} name={doctorDetails.name} className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-extrabold">{doctorDetails.name}</h2>
              <p className="mt-1 font-semibold text-leaf-600 dark:text-leaf-400">{doctorDetails.specialization}</p>
              <p className="mt-3 text-sm leading-relaxed">{doctorDetails.description}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="card p-6 sm:p-10 lg:col-span-2">
            <h3 className="text-2xl font-extrabold">Biography</h3>
            <p className="lead mt-4">{doctorDetails.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.label} className="flex gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/60">
                  <span className="icon-badge">{f.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{f.label}</p>
                    <p className="mt-0.5 text-sm">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <Consultant />
    </>
  );
};

export default DoctorProfile;

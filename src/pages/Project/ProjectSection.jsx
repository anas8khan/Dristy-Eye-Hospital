import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import data from "../../data.json";
import BackgroundWrapper from "../../component/BackgroundWrapper";
import Join from "../../component/Join";
import { FaCheck } from "react-icons/fa6";

const ProjectSection = () => {
  const { projectName } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() =>{
        document.title = `${project?.name || "Project"} - Dristy Eye Hospital, Chouparan`;
        const meta = document.querySelector("meta[name='description']");
        if(meta){
          meta.setAttribute("content", "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged.");
        }
      },[])

  useEffect(() => {
    const selectedProject = data.find(
      (project) => project.name.toLowerCase() === projectName.toLowerCase()
    );
    setProject(selectedProject || null);
  }, [projectName]);

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div>
      <section className="mb-8">
        <BackgroundWrapper title1={"Home"} title2={project.name} img={project.bannerImg}/>
      </section>

      <section className="sm:p-1 rounded-md mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-center w-full sm:w-[80%] m-auto italic dark:text-gray-200">
          "{project.title}"
        </h2>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <section className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12">
          <div className="w-full sm:w-1/2">
            <h3 className="text-xl sm:text-3xl font-semibold mb-4 dark:text-gray-300">
              {project.about.heading}
            </h3>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed mt-2 whitespace-pre-line">
              {project.about.content}
            </p>
          </div>
          <div className="w-full sm:w-1/2"> 
            <Slider {...settings}>
              {project.slider &&
                project.slider.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-[35%] h-[35vh] lg:h-[55vh] rounded-md"
                  />
                ))}
            </Slider>
          </div>
        </section>

        <section className="bg-gray-100 dark:bg-slate-800 p-6 rounded-md shadow-md mt-6 border-l-4 border-primary mb-4">
          <h3 className="text-xl sm:text-2xl font-semibold dark:text-gray-200">Key Highlights</h3>
          <ul className="mt-4 space-y-2">
            {project.keyHighlights?.map((highlight, index) => (
              <li key={index} className="text-gray-700 dark:text-slate-100 flex items-center gap-2 font-semibold">
                <FaCheck className="text-primary mt-1"/>
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-4">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
            Impact Stories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-10">
            {project.impactStories?.map((story, index) => (
              <div
                key={index}
                className="p-4 rounded-md flex flex-col items-center justify-center bg-white dark:bg-gradient-to-r from-slate-900 to-slate-700 shadow-md mx-auto"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg border-2 mb-4"
                />

                <div className="flex flex-col items-center justify-center gap-2">
                  <h4 className="text-lg font-semibold text-primary dark:text-gray-200">
                    {Array.isArray(story.name)
                      ? story.name.join(", ")
                      : story.name}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 w-full sm:w-[80%] text-center italic">
                    "{story.description}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div>
          <Join />
        </div>
      </main>
    </div>
  );
};

export default ProjectSection;

import React, { useEffect } from "react";
import BackgroundWrapper from "../../component/BackgroundWrapper";
import main1 from "../../assets/IMG_1.jpg";
import main2 from "../../assets/IMG_2.jpg";
import main3 from "../../assets/IMG_3.jpg";
import main4 from "../../assets/IMG_4.jpg";
import main5 from "../../assets/IMG_5.jpg";
import main6 from "../../assets/IMG_6.jpg";
import main7 from "../../assets/IMG_7.jpg";
import main8 from "../../assets/IMG_8.jpg";
import main9 from "../../assets/IMG_9.webp";
import main10 from "../../assets/IMG_10.jpg";
import main11 from "../../assets/IMG_11.png";
import banner from "../../assets/bgwrapper.jpg";
import Card from "../../component/Card";
import { motion } from "framer-motion";
import { fadeIn } from "../../component/animations";

const Treatments = () => {
  const data = [
    {
      image: main1,
      title: "Cataract",
      description:
        "Clouding of the eye's lens causing blurry vision, affecting activities like reading and night driving.",
      link: "/treatment-details/Cataract"
    },
    {
      image: main2,
      title: "Pterygium",
      description:
        "A fleshy growth on the cornea that can expand and impact vision, requiring medical attention.",
      link: "/treatment-details/Pterygium"
    },
    {
      image: main3,
      title: "Glaucoma",
      description:
        "Damage to the optic nerve from high eye pressure, leading to vision loss or blindness over time.",
      link: "/treatment-details/Glaucoma"
    },
    {
      image: main4,
      title: "Uveitis",
      description:
        "Inflammation of the eye caused by immune system issues, leading to pain, redness, and vision problems.",
      link: "/treatment-details/Uveitis"
    },
    {
      image: main5,
      title: "Diabetic Retinopathy",
      description:
        "Damage to blood vessels in the retina caused by diabetes, leading to potential vision impairment.",
      link: "/treatment-details/Diabetic Retinopathy"
    },
    {
      image: main6,
      title: "Hypertensive Retinopathy (HR)",
      description:
        "Damage to the retina from untreated high blood pressure, causing gradual vision loss and complications.",
      link: "/treatment-details/Hypertensive Retinopathy"
    },
    {
      image: main7,
      title: "Retinal Detachment",
      description:
        "A condition where the retina detaches from the eye wall, requiring urgent treatment to avoid vision loss.",
      link: "/treatment-details/Retinal detachment"
    },
    {
      image: main8,
      title: "Dacryocystitis",
      description:
        "Inflammation of the tear sac caused by a blocked duct, leading to swelling, pain, and discharge.",
      link: "/treatment-details/Dacryocystitis"
    },
    {
      image: main9,
      title: "Corneal Ulcer",
      description:
        "An infection on the cornea, causing pain and redness; prompt treatment is necessary to preserve vision.",
      link: "/treatment-details/Corneal Ulcer"
    },
    {
      image: main10,
      title: "ICL/IPCL",
      description:
        "Implantable Collamer Lens (ICL) is a procedure to correct myopia, hyperopia, and astigmatism by lens implantation.",
      link: "/treatment-details/ICL-IPCL"
    },
    {
      image: main11,
      title: "Squint",
      description:
        "A condition where the eyes are misaligned, making it hard to focus properly, often treatable in children.",
      link: "/treatment-details/Squint"
    },
  ];

  useEffect(() => {
    document.title = "Treatments - Dristy Eye Hospital, Chouparan";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged.");
    }
  }, [])

  return (
    <div>
      <BackgroundWrapper title1="Home" title2="Treatments" img={banner} />

      <div className="py-10 flex flex-col items-center text-center">

        <motion.h1
          className="text-xl md:text-2xl xl:text-2xl 2xl:text-3xl font-semibold dark:text-gray-300 text-primary"
        >
          Services
        </motion.h1>
        <motion.h5
          className="text-3xl 2xl:text-4xl dark:text-gray-200 text-blue-950 font-bold"
        >
          Dristy Eye Hospital Services
        </motion.h5>


        <motion.div
          variants={fadeIn}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 px-6 md:px-0 xl:px-20 xl:py-10 md:py-4 overflow-hidden"
        >
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Treatments;

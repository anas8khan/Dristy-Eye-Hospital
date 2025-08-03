import React, { useEffect } from "react";
import eye from "../assets/eye-logo.png";

const Loading = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col gap-8 items-center justify-center bg-primary dark:bg-black transition-colors duration-300 z-[999]">
      <div className="rounded-full h-32 w-32 border p-2">
        <img className="animate-spin" src={eye} alt="Dristy Eye Hospital Logo" />
      </div>
      <div className="text-white text-center">
        <h1 className="text-6xl">Dristy Eye Hospital</h1>
        <p className="mt-4 text-xl font-bold">Your vision, our priority</p>
      </div>
    </div>
  );
};

export default Loading;

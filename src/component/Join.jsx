import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="text-center p-2 mt-2">
      <h3 className="lg:text-4xl dark:text-gray-200 text-2xl font-bold text-gray-800 mb-6">
        Join Our Mission
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center">
        <Link to={"/appointment"} className="w-full sm:w-auto px-6 py-3 lg:px-10 lg:py-3 bg-primary text-white rounded-lg text-sm lg:text-base hover:scale-95 duration-300">
          Book Your Surgery
        </Link>
        <button className="w-full sm:w-auto px-6 py-3 lg:px-6 lg:py-3 bg-primary text-white rounded-lg text-sm lg:text-base hover:scale-95 duration-300">
          Contribute to the Initiative
        </button>
      </div>
    </div>
  );
};

export default Join;

import React, { createContext, useState, useContext } from "react";
import galleryData from "../gallery.json";
import doctorData from "../doctorData.json";

const ApiDataContext = createContext();

// Gallery and doctor data are bundled JSON, so they are available synchronously.
export const ApiDataProvider = ({ children }) => {
  const [gallery] = useState(galleryData.data || []);
  const [doctors] = useState(doctorData.doctors || []);
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState(null);

  return (
    <ApiDataContext.Provider value={{ gallery, doctors, isLoading, setIsLoading, error }}>
      {children}
    </ApiDataContext.Provider>
  );
};

export const useApiData = () => useContext(ApiDataContext);

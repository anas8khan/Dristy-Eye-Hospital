import React, { createContext, useState, useContext, useEffect } from "react";
import galleryData from "../gallery.json";
import doctorData from "../doctorData.json";

const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {
  const [gallery, setGallery] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGallery = () => {
    try {
      setGallery(galleryData.data); 
    } catch (err) {
      console.error("Error fetching gallery data:", err.message);
      setError(err.message);
    }
  };

  const fetchDoctors = () => {
    try {
      setDoctors(doctorData.doctors); 
    } catch (err) {
      console.error("Error fetching doctor data:", err.message);
      setError(err.message);
    }
  };

  const fetchAllData = () => {
    setIsLoading(true); // ✅ Ensure loading starts
  
    setTimeout(() => { // ✅ Add delay to simulate loading
      try {
        fetchGallery();
        fetchDoctors();
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }, 1000); // Delay of 2 seconds
  };
  

  useEffect(() => {
    setIsLoading(true);
    fetchAllData();
  }, []);
  
  useEffect(() => {
    if (gallery.length > 0 || doctors.length > 0) {
      setIsLoading(false); // ✅ Only set false after data is set
    }
  }, [gallery, doctors]);
  

  return (
    <ApiDataContext.Provider value={{ gallery, doctors, isLoading, setIsLoading, error }}>
      {children}
    </ApiDataContext.Provider>
  );
};

export const useApiData = () => useContext(ApiDataContext);

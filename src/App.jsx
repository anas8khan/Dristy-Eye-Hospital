import { Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; // Import Analytics
import { SpeedInsights } from "@vercel/speed-insights/react"; // Import Speed Insights
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./component/Footer";
import Gallery from "./pages/Gallery";
import Doctor from "./pages/Doctor";
import Treatments from "./pages/Treatment/Treatments";
import BackToTop from "./component/BackToTop";
import DoctorProfile from "./pages/DoctorProfile/DoctorProfile";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import VisionMissionGoals from "./pages/VisionMissionGoals";
import Appointment from "./pages/Appointment";
import ProjectSection from "./pages/Project/ProjectSection";
import DonateButton from "./component/DonateButton";
import TreatmentDetails from "./pages/Treatment/TreatmentDetails";
import BlogDetails from "./pages/Blog/BlogDetails";
import Blog from "./pages/Blog/Blog";
import { useApiData } from "./context/ApiDataContext";
import { useEffect } from "react";
import Loading from "./component/Loading";
import Feedback from "./pages/Feedback";
import ContactUs from "./pages/ContactUs";

const App = () => {
  const { isLoading, setIsLoading } = useApiData();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [location, setIsLoading]);

  return (
    <>
      {isLoading && <Loading />}
      <Navbar />
      <BackToTop />
      <DonateButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/doctor-profile/:doctorName" element={<DoctorProfile />} />
        <Route path="/treatments-detail" element={<ServiceDetails />} />
        <Route path="/mission" element={<VisionMissionGoals />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/projects/:projectName" element={<ProjectSection />} />
        <Route path="/treatment-details/:treatmentName" element={<TreatmentDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/:blogId" element={<BlogDetails />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
      <Analytics /> {/* Vercel Analytics for tracking */}
      <SpeedInsights /> {/* Vercel Speed Insights for performance monitoring */}
    </>
  );
};

export default App;

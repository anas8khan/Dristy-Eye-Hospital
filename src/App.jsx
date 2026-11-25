import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/react"; // Import Analytics
import { SpeedInsights } from "@vercel/speed-insights/react"; // Import Speed Insights
import { useEffect, useState } from "react";
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
import MobileActionBar from "./component/MobileActionBar";
import TreatmentDetails from "./pages/Treatment/TreatmentDetails";
import BlogDetails from "./pages/Blog/BlogDetails";
import Blog from "./pages/Blog/Blog";
import Loading from "./component/Loading";
import Feedback from "./pages/Feedback";
import ContactUs from "./pages/ContactUs";
import ScrollProgress from "./component/ui/ScrollProgress";

const App = () => {
  // Brand splash on first load only (previously shown for 3s on every navigation).
  const [showSplash, setShowSplash] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    // reducedMotion="user" disables transform animations for visitors who prefer reduced motion.
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{showSplash && <Loading key="splash" />}</AnimatePresence>
      <ScrollProgress />
      <Navbar />
      {/* Keyed by route so each page plays a short entrance transition */}
      <main id="main" key={pathname} className="page-enter">
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
      </main>
      <Footer />
      <BackToTop />
      <DonateButton />
      <MobileActionBar />
      <Analytics /> {/* Vercel Analytics for tracking */}
      <SpeedInsights /> {/* Vercel Speed Insights for performance monitoring */}
    </MotionConfig>
  );
};

export default App;

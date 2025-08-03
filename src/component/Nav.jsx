import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  IoIosArrowDown,
  IoIosArrowDropdownCircle,
  IoIosArrowDropright,
} from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
//   import { MdOutlineMailOutline } from "react-icons/md";
//   import { FaLinkedin, FaLocationDot, FaYoutube } from "react-icons/fa6";
//   import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState({
    about: false,
    treatments: false,
    project: false,
  });

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = "auto";
    setDropdownOpen({ about: false, treatments: false });
  };

  const aboutSubItems = [
    { name: "About Hospital", path: "/about" },
    { name: "Our Mission", path: "/mission" },
    { name: "Feedback", path: "/feedback" },
  ];

  const navItems = [
    { name: "Doctor's", path: "/doctor" },
    { name: "Blog", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const projectSubItems = [
    { name: "One Eye One Tree", path: "/projects/One Eye One Tree" },
    {
      name: "Blanket of Light Mission",
      path: "/projects/Blanket of Light Mission",
    },
    {
      name: "School Eye Screening",
      path: "/projects/School Eye Screening",
    },
    {
      name: "Doorstep Care Camp for All",
      path: "/projects/Doorstep Care Camp for All",
    },
    {
      name: "Save Environment, Save Eyesight",
      path: "/projects/Save Environment, Save Eyesight",
    },
  ];

  const treatmentSubItems = [
    { name: "View All Treatment", path: "/treatments" },
    { name: "Cataract", path: "/treatment-details/Cataract" },
    { name: "Pterygium", path: "/treatment-details/Pterygium" },
    { name: "Glaucoma", path: "/treatment-details/Glaucoma" },
    { name: "Uveitis", path: "/treatment-details/Uveitis" },
    {
      name: "Diabetic retinopathy",
      path: "/treatment-details/Diabetic retinopathy",
    },
    {
      name: "Hypertensive retinopathy",
      path: "/treatment-details/Hypertensive retinopathy",
    },
    {
      name: "Retinal detachment",
      path: "/treatment-details/Retinal detachment",
    },
    { name: "Dacryocystitis", path: "/treatment-details/Dacryocystitis" },
    { name: "Corneal ulcer", path: "/treatment-details/Corneal ulcer" },
    { name: "ICL/IPCL", path: "/treatment-details/ICL-IPCL" },
    { name: "Squint", path: "/treatment-details/Squint" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <div>
      <div className="bg-primary w-full flex gap-4 items-center lg:justify-between justify-center px-20 py-4">
        <div className="lg:flex items-center gap-3 hidden text-sm font-Roboto">
          <span className="text-xl text-white">
            <MdOutlineMailOutline />
          </span>
          <Link
            to={"mailto: info@dristyeyehospital.com"}
            className="text-white"
          >
            Email: info@dristyeyehospital.com
          </Link>
          <span className="text-lg text-white">
            <FaLocationDot />
          </span>
          <Link
            to={"https://maps.app.goo.gl/gBrFizP7uiWcg97s5"}
            target="_blank"
            className="text-white capitalize"
          >
            hospital Road, Tajpur, Vill- Tajpur, Chouparan,
            Dist-Hazaribagh, Jharkhand
          </Link>
          <span className="text-lg text-white">
            <FaPhoneAlt />
          </span>
          <Link to={"tel:+919771740140"} className="text-white">
            Call: +91 9006440240
          </Link>
        </div>
        <div className="flex items-center gap-4 text-lg text-white">
          <Link
            className="hover:text-blue-500 duration-300"
            to={"https://www.facebook.com/imranchouparan/"}
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link
            className="hover:text-sky-400 duration-300"
            to={"https://x.com/DristyCPN"}
            target="_blank"
          >
            <FaTwitter />
          </Link>
          <Link
            to={"https://www.instagram.com/dristyeyehospitalcpn/"}
            className="hover:text-red-500 duration-300"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            to={
              "https://www.linkedin.com/in/dristy-eye-hospital-chouparan-666581342/"
            }
            className="hover:text-blue-900 duration-300"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            to={"https://www.youtube.com/channel/UCp_Suti-3MRjjdLkNoHeArw"}
            className="hover:text-red-500 duration-300"
            target="_blank"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
      <nav
        className={`${
          isSticky ? "fixed top-0 left-0 z-[50] shadow-lg" : "relative"
        } w-full flex items-center justify-between p-6 md:px-8 transition-all duration-500
    ${
      isSticky ? "dark:bg-black bg-white" : "dark:bg-transparent bg-transparent"
    }`}
      >
        {/* Logo */}
        <Link to={"/"}>
          <img className="w-28 md:w-40" src={logo} alt="logo" />
        </Link>

        {/* Mobile Navbar (Hidden on larger screens) */}
        <div className="lg:hidden">
          <button
            onClick={() => toggleSidebar()}
            className="text-gray-800 dark:text-gray-200 text-2xl"
          >
            {!isSidebarOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </div>

        {/* Large Screen Navbar */}
        <div className="hidden lg:flex items-center gap-8 font-semibold z-10">
          {/* Home */}
          <li className="list-none duration-300 dark:text-gray-200 dark:hover:text-primary">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "hover:text-primary dark:hover:text-primary"
              }
            >
              Home
            </NavLink>
          </li>

          {/* About Us Dropdown */}
          <li className="relative group list-none duration-300 dark:text-gray-200 dark:hover:text-primary">
            <NavLink
              to="/about"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-1 ${
                  isActive
                    ? "text-primary"
                    : "hover:text-primary dark:hover:text-primary"
                }`
              }
            >
              About Us
              <span className="mt-1 group-hover:rotate-180 duration-500">
                <IoIosArrowDown />
              </span>
            </NavLink>
            <ul className="absolute left-0 top-full bg-black border-t-4 border-primary text-white shadow-lg w-52 py-2 mt-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              {aboutSubItems.map((subItem, index) => (
                <li
                  key={subItem.name}
                  className={`px-4 py-2 hover:text-primary text-sm ${
                    index !== aboutSubItems.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  }`}
                >
                  <NavLink
                    to={subItem.path}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive ? "text-primary font-bold" : ""
                    }
                  >
                    {subItem.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          {/* Repeat the pattern for other nav items */}
          {/* Our Projects Dropdown */}
          <li className="relative group list-none duration-300 dark:text-gray-200 dark:hover:text-primary">
            <NavLink
              to="/projects"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-1 ${
                  isActive
                    ? "text-primary"
                    : "hover:text-primary dark:hover:text-primary"
                }`
              }
            >
              Our Projects
              <span className="mt-1 group-hover:rotate-180 duration-500">
                <IoIosArrowDown />
              </span>
            </NavLink>
            <ul className="absolute left-0 top-full bg-black border-t-4 border-primary text-white shadow-lg w-52 py-2 mt-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              {projectSubItems.map((subItem, index) => (
                <li
                  key={subItem.name}
                  className={`px-4 py-2 hover:text-primary text-sm ${
                    index !== projectSubItems.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  }`}
                >
                  <NavLink
                    to={subItem.path}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive ? "text-primary font-bold" : ""
                    }
                  >
                    {subItem.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          {/* Add other dropdowns in similar fashion */}
        </div>

        {/* Appointment Button */}
        <Link
          to={"/appointment"}
          className="hidden md:flex items-center gap-2 relative overflow-hidden text-white font-semibold px-4 xl:px-6 py-3 bg-primary rounded-full group"
        >
          <button>
            <span className="absolute inset-0 bg-blue-950 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10 uppercase">Appointment</span>
          </button>
          <span className="z-10">
            <IoIosArrowDropright size={20} />
          </span>
        </Link>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black opacity-30 top-0"></div>
        )}

        <div
          className={`fixed top-0 left-0 h-screen w-full md:w-72 lg:hidden bg-white dark:bg-black dark:text-white shadow-lg z-50 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          <div className="lg:hidden text-right px-4 pt-6">
            <button
              onClick={toggleSidebar}
              className="text-gray-800 dark:text-gray-200 text-2xl"
            >
              {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="p-6 bg-white dark:bg-black">
            <NavLink to={"/"} onClick={handleLinkClick}>
              <img src={logo} alt="logo" className="w-32 mb-6" />
            </NavLink>
            <ul className="flex flex-col gap-6 text-lg">
              {/* Repeat for mobile navigation */}
              <li className="list-none duration-300 dark:text-gray-200 dark:hover:text-primary">
                <NavLink
                  to={"/"}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "hover:text-primary dark:hover:text-primary"
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* About Us Dropdown for Mobile */}
              <li>
                <button
                  onClick={() =>
                    setDropdownOpen({ about: !dropdownOpen.about })
                  }
                  className="w-full text-left group-hover:text-primary flex items-center gap-1"
                >
                  About Us
                  <span>
                    <IoIosArrowDropdownCircle />
                  </span>
                </button>
                {dropdownOpen.about && (
                  <ul className="border shadow-md mt-2 p-2">
                    {aboutSubItems.map((subItem, idx) => (
                      <li
                        key={subItem.name}
                        className={`${
                          idx === aboutSubItems.length - 1
                            ? ""
                            : "border-b pb-1"
                        }`}
                      >
                        <NavLink
                          to={subItem.path}
                          onClick={handleLinkClick}
                          className="text-sm hover:text-primary"
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Repeat for other dropdowns */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

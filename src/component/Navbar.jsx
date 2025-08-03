import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import {
  IoIosArrowDown,
  IoIosArrowDropdownCircle,
  IoIosArrowDropright,
} from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import DarkMode from "./DarkMode";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin, FaLocationDot, FaYoutube } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    about: false,
    treatments: false,
    project: false,
  });
  const [isSticky, setIsSticky] = useState(false);

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

  const navItems = [
    { name: "Doctor's", path: "/doctor" },
    { name: "Blogs", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const aboutSubItems = [
    { name: "About Hospital", path: "/about" },
    { name: "Our Mission and Vission", path: "/mission" },
    { name: "Patient Feedback", path: "/feedback" },
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

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = "auto";
    setDropdownOpen({ about: false, treatments: false });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="w-full">
      <div className="bg-primary w-full flex gap-4 items-center lg:justify-between justify-center px-20 py-2">
        <div className="lg:flex items-center gap-4 hidden text-sm">
          <span className="text-xl text-white">
            <MdOutlineMailOutline />
          </span>
          <Link to={"mailto: info@dristyeyehospital.com"} className="text-white">
            Email:info@dristyeyehospital.com
          </Link>
          <span className="text-lg text-white">
            <FaLocationDot />
          </span>
          <Link
            to={"https://maps.app.goo.gl/gBrFizP7uiWcg97s5"}
            target="_blank"
            className="text-white"
          >
            hospital Road, Tajpur, Vill- Tajpur, Chouparan, Dist-Hazaribagh, Jharkhand
          </Link>
          <span className="text-lg text-white">
            <FaPhoneAlt />
          </span>
          <Link to={"tel:+919771740140"} className="text-white">
            Call:+91 9006440240
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
            className="hover:text-sky-700 duration-300"
            to={
              "https://www.linkedin.com/in/dristy-eye-hospital-chouparan-666581342/"
            }
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            to={"https://www.instagram.com/dristyeyehospitalcpn/"}
            className="hover:text-red-500 duration-300"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
      <nav
        className={`${
          isSticky ? "fixed top-0 left-0 z-[50] shadow-lg" : "relative"
        } w-full flex items-center justify-between p-6 md:px-8 transition-all duration-500
      ${
        isSticky
          ? "dark:bg-black bg-white"
          : "dark:bg-transparent bg-transparent"
      }`}
      >
        <NavLink to={"/"}>
          <img className="w-28 md:w-40" src={logo} alt="logo" />
        </NavLink>

        <div className="lg:hidden">
          <button
            onClick={() => toggleSidebar()}
            className="text-gray-800 dark:text-gray-200 text-2xl"
          >
            {!isSidebarOpen && <AiOutlineMenu />}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-8 font-semibold z-10">
          <li className="list-none duration-300 dark:text-gray-200 dark:hover:text-primary">
            <Link
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "hover:text-primary dark:hover:text-primary"
              }
            >
              Home
            </Link>
          </li>
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
              About Us{" "}
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

          <li className="relative group list-none duration-300 dark:text-gray-200 dark:hover:text-primary">
            <span className="flex items-center gap-1 hover:text-primary dark:hover:text-primary cursor-pointer">
              Our Projects{" "}
              <span className="mt-1 group-hover:rotate-180 duration-500">
                <IoIosArrowDown />
              </span>
            </span>
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

          <li className="relative group list-none duration-300 dark:text-gray-200 hover:text-primary dark:hover:text-primary">
            <NavLink
              to="/treatments"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-1 ${
                  isActive
                    ? "text-primary"
                    : "hover:text-primary dark:hover:text-primary"
                }`
              }
            >
              Treatments
              <span className="mt-1 group-hover:rotate-180 duration-500">
                <IoIosArrowDown />
              </span>
            </NavLink>
            <ul className="absolute left-0 top-full bg-black border-t-4 border-primary text-white shadow-lg w-52 py-2 mt-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              {treatmentSubItems.map((subItem, index) => (
                <li
                  key={subItem.name}
                  className={`px-4 py-2 hover:text-primary text-sm ${
                    index !== treatmentSubItems.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  }`}
                >
                  <NavLink
                    to={subItem.path}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    {subItem.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          {navItems.map((item) => (
            <li
              key={item.name}
              className="list-none duration-300 dark:text-gray-200 dark:hover:text-primary"
            >
              <NavLink
                to={item.path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "hover:text-primary dark:hover:text-primary"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </div>

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

        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black opacity-30 top-0"></div>
        )}

        {/* Mobile Sidebar */}
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

          <div className="p-6 bg-white dark:bg-black">
            <NavLink to={"/"} onClick={handleLinkClick}>
              <img src={logo} alt="logo" className="w-32 mb-6" />
            </NavLink>
            <ul className="flex flex-col gap-6 text-lg">
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
              <li>
                <button
                  onClick={() =>
                    setDropdownOpen({
                      project: !dropdownOpen.project,
                    })
                  }
                  className="w-full text-left hover:text-primary flex items-center gap-1"
                >
                  Our Projects
                  <span>
                    <IoIosArrowDropdownCircle />
                  </span>
                </button>
                {dropdownOpen.project && (
                  <ul className="border shadow-md mt-2 p-2 max-h-40 overflow-y-auto">
                    {projectSubItems.map((subItem, idx) => (
                      <li
                        key={subItem.name}
                        className={`${
                          idx === projectSubItems.length - 1
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
              <li>
                <button
                  onClick={() =>
                    setDropdownOpen({
                      treatments: !dropdownOpen.treatments,
                    })
                  }
                  className="w-full text-left hover:text-primary flex gap-1 items-center"
                >
                  Treatments
                  <span>
                    <IoIosArrowDropdownCircle />
                  </span>
                </button>
                {dropdownOpen.treatments && (
                  <ul className="border shadow-md mt-2 p-2 max-h-60 overflow-y-auto">
                    {treatmentSubItems.map((subItem, idx) => (
                      <li
                        key={subItem.name}
                        className={`${
                          idx === treatmentSubItems.length - 1
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
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="list-none duration-300 hover:text-primary"
                >
                  <NavLink
                    to={item.path}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary"
                        : "hover:text-primary dark:hover:text-primary"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 border-t border-gray-300 bg-white dark:bg-black">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-sm">Phone: +91 9006440240</p>
              <p className="text-sm">Email: dristyeyehospital92@gmail.com</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <DarkMode />
    </div>
  );
};

export default Navbar;

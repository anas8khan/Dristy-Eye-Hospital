import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

const DarkMode = ({ className = "" }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={`grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-lg text-slate-700 transition hover:border-primary-300 hover:text-primary-600 dark:border-slate-700 dark:text-amber-300 dark:hover:border-amber-300 ${className}`}
    >
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
};

export default DarkMode;

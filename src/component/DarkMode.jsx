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
      className={`grid h-11 w-11 place-items-center rounded-2xl border border-cream-200 text-lg text-ink transition hover:border-primary-300 hover:text-primary-600 dark:border-slate-700 dark:text-amber-300 dark:hover:border-amber-300 ${className}`}
    >
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
};

export default DarkMode;

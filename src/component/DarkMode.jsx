import React from "react";
import { useTheme } from "../context/ThemeContext";

const DarkMode = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 flex items-center px-2 py-2 rounded-full shadow-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300 z-50"
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m8-9h1M4 12H3m15.364-6.364l.707.707M6.343 17.657l-.707.707m12.02-12.021l.707-.707M6.343 6.343l-.707-.707M16.243 12a4 4 0 11-8.486 0 4 4 0 018.486 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3h.01a7.5 7.5 0 109.57 9.57h.01z"
            />
          </svg>
        )}
      </button>
    </>
  );
};

export default DarkMode;

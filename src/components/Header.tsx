import React, { useEffect, useState } from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="flex justify-between h-16 bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className="font-bold text-xl content-center pl-10">
        where in the world?
      </div>
      <button
        id="dark-mode"
        onClick={toggleDarkMode}
        className="flex font-bold pr-10 items-center"
      >
        {darkMode ? (
          <IoMoon className="h-5 w-5 m-1" />
        ) : (
          <IoMoonOutline className="h-5 w-5 m-1" />
        )}
        Dark mode
      </button>
    </div>
  );
};

export default Header;

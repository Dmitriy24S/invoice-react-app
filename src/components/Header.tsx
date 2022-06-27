import React from "react";
import { ReactComponent as DarkThemeIcon } from "../images/icon-moon.svg";
import { ReactComponent as LightThemeIcon } from "../images/icon-sun.svg";
import { ReactComponent as Logo } from "../images/logo.svg";

const Header = ({ darkTheme, setDarkTheme }: any) => {
  const toggleDarkTheme = () => {
    setDarkTheme((prevTheme: boolean) => !prevTheme);
  };
  return (
    // bg-[#1e2139] - header bg?
    <header className="bg-indigo-900 bg-opacity-40 flex justify-between">
      <div className="logo-container w-16 h-16 rounded-r-2xl overflow-hidden bg-violet-500  flex justify-center items-center relative after:h-3/6 after:bg-white after:opacity-20 after:w-full after:absolute after:bottom-0 after:rounded-tl-2xl">
        <Logo className="z-10" />
      </div>
      <div className="flex items-center">
        <button
          aria-label="toggle dark theme"
          onClick={toggleDarkTheme}
          className="pr-6 pl-4 h-full"
        >
          {darkTheme ? <DarkThemeIcon /> : <LightThemeIcon />}
        </button>
        {/* #494e6e - border bg? */}
        <button className="avatar-container pl-4 border-l border-[#716da8] h-full flex items-center justify-center pr-6 cursor-pointer">
          <img
            src="../images/image-avatar.jpg"
            alt="avatar"
            className="w-8 rounded-full "
          />
        </button>
      </div>
    </header>
  );
};

export default Header;

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { ReactComponent as DarkThemeIcon } from "../images/icon-moon.svg";
// import { ReactComponent as LightThemeIcon } from "../images/icon-sun.svg";

const Header = ({ darkTheme, setDarkTheme }: any) => {
  const { theme, setTheme } = useTheme();
  const toggleDarkTheme = () => {
    setDarkTheme((prevTheme: boolean) => !prevTheme);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    // bg-[#1e2139] - header bg?
    <header className="bg-white shadow dark:bg-indigo-900 bg-opacity-40 w-full">
      <div className="header-content max-w-5xl mx-auto flex justify-between">
        {/* Header logo - go to main page */}
        <Link href="/" passHref={true} scroll={false}>
          <a className="logo-container w-16 h-16 rounded-r-2xl overflow-hidden bg-violet-500  flex justify-center items-center relative after:h-3/6 after:bg-white after:opacity-20 after:w-full after:absolute after:bottom-0 after:rounded-tl-2xl z-10">
            <Image src="/images/logo.svg" alt="Logo" width={28} height={26} />
          </a>
        </Link>
        {/* Theme toggle */}
        <div className="flex items-center">
          <button
            aria-label="toggle dark theme"
            onClick={toggleDarkTheme}
            className="pr-6 pl-4 h-full flex items-center"
          >
            {/* {darkTheme ? <DarkThemeIcon /> : <LightThemeIcon />} */}
            {darkTheme ? (
              <Image
                src="/images/icon-moon.svg"
                alt="Dark theme icon"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/images/icon-sun.svg"
                alt="Light theme icon"
                width={20}
                height={20}
              />
            )}
          </button>
          {/* #494e6e - border bg? */}
          {/* Profile pic / button */}
          <button
            className="avatar-container pl-4 pr-6 border-l border-slate-300 dark:border-[#716da8] h-full flex items-center justify-centercursor-pointer"
            aria-label="open profile"
          >
            <Image
              src="/images/image-avatar.jpg"
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

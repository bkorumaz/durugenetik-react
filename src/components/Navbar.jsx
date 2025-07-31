import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar({ darkMode, toggleLang, toggleDark }) {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base =
    "fixed top-0 w-full z-30 shadow-md backdrop-blur transition-colors";
  const themeBg = darkMode
    ? "bg-black bg-opacity-90"
    : "bg-white bg-opacity-90";
  const opacity = scrolled ? "bg-opacity-80" : "";
  const bgClasses = `${base} ${themeBg} ${opacity}`;

  const switchFlag = i18n.language === "en" ? "🇹🇷" : "🇬🇧";
  const menuItems = [
    "home",
    "products",
    "blog",
    "partners",
    "aboutus",
    "contact",
  ];

  const Sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M12 4.5..." />
    </svg>
  );
  const Moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M21 12.79..." />
    </svg>
  );
  const Hamburger = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  return (
    <nav className={bgClasses}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <span className="font-extrabold text-2xl flex">
          <span className="text-green-800 dark:text-green-300">Duru</span>
          <span className="text-teal-500 dark:text-teal-200 ml-1">genetik</span>
        </span>
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="whitespace-nowrap hover:text-teal-500 dark:hover:text-teal-300 capitalize"
            >
              {t(`nav.${item}`)}
            </a>
          ))}
          <button onClick={toggleLang} className="font-semibold text-2xl">
            {switchFlag}
          </button>
          <button
            onClick={toggleDark}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? Sun : Moon}
          </button>
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {Hamburger}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-700">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="whitespace-nowrap hover:text-teal-500 dark:hover:text-teal-300 capitalize"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <button onClick={toggleLang} className="font-semibold text-2xl">
                {switchFlag}
              </button>
              <button
                onClick={toggleDark}
                className="p-2 rounded bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? Sun : Moon}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

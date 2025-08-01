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

  const TRFlag = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 24"
      className="w-6 h-6"
    >
      <rect width="36" height="24" fill="#e30a17" />
      <circle cx="14" cy="12" r="6" fill="#fff" />
      <circle cx="16" cy="12" r="5" fill="#e30a17" />
      <polygon
        fill="#fff"
        points="21,15 20.29,12.97 18.15,12.93 19.86,11.63 19.24,9.57 21,10.8 22.76,9.57 22.14,11.63 23.85,12.93 21.71,12.97"
      />
    </svg>
  );

  const ENFlag = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 24"
      className="w-6 h-6"
    >
      <rect width="36" height="24" fill="#fff" />
      <rect x="14" width="8" height="24" fill="#ce1126" />
      <rect y="8" width="36" height="8" fill="#ce1126" />
    </svg>
  );

  const switchFlag = i18n.language === "en" ? TRFlag : ENFlag;
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
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  );
  const Moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M21.752 15.002A9 9 0 1111.998 2.248a7 7 0 109.754 12.754z" />
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
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleLang}
              className="p-2 rounded bg-gray-200 dark:bg-gray-700"
            >
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
              <button
                onClick={toggleLang}
                className="p-2 rounded bg-gray-200 dark:bg-gray-700"
              >
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

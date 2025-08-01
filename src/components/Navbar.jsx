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
      ? "bg-neutral-900 bg-opacity-95"
      : "bg-white bg-opacity-90";
  const opacity = scrolled ? "bg-opacity-80" : "";
  const bgClasses = `${base} ${themeBg} ${opacity}`;

  // İngilizce ise Türk bayrağı, Türkçe ise İngiltere bayrağı göster
  const switchFlag = i18n.language === "en"
      ? (
          // Türkiye bayrağı SVG
          <span className="inline-block align-middle w-6 h-6" title="Türkçe">
        <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6">
          <circle cx="18" cy="18" r="18" fill="#E30A17" />
          <circle cx="15" cy="18" r="7" fill="#fff" />
          <circle cx="17" cy="18" r="5" fill="#E30A17" />
          <path d="M22.5 18l3 1.618-3 1.618v-3.236z" fill="#fff" />
        </svg>
      </span>
      )
      : (
          // İngiltere bayrağı SVG
          <span className="inline-block align-middle w-6 h-6" title="English">
        <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6">
          <rect width="36" height="36" rx="18" fill="#00247D" />
          <path fill="#FFF" d="M0 14.4h36v7.2H0z" />
          <path fill="#FFF" d="M14.4 0h7.2v36h-7.2z" />
          <path fill="#CF142B" d="M0 16.2h36v3.6H0z" />
          <path fill="#CF142B" d="M16.2 0h3.6v36h-3.6z" />
          <path fill="#FFF" d="M0 0l36 36M36 0L0 36" stroke="#FFF" strokeWidth="2.4"/>
          <path fill="#CF142B" d="M2.2 0l33.6 33.6-2.2 2.2L0 2.2zM33.6 0L0 33.6l2.2 2.2L36 2.2z"/>
        </svg>
      </span>
      );

  const menuItems = ["home", "products", "blog", "partners", "aboutus", "contact"];

  // Güneş ve Ay ikonları (değişmedi)
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
          {/* Logo */}
          <span className="font-extrabold text-2xl flex">
          <span className="text-green-800 dark:text-green-300">Duru</span>
          <span className="text-teal-500 dark:text-teal-200 ml-1">genetik</span>
        </span>
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
                <a
                    key={item}
                    href={`#${item}`}
                    className="whitespace-nowrap hover:text-teal-500 dark:hover:text-teal-300 capitalize"
                >
                  {t(`nav.${item}`)}
                </a>
            ))}

            {/* Dil Değiştir */}
            <button
                onClick={toggleLang}
                className="p-1 rounded hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition focus:outline-none"
                aria-label="Toggle Language"
            >
              {switchFlag}
            </button>

            {/* Tema Değiştir */}
            <button
                onClick={toggleDark}
                className="p-1 rounded hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition focus:outline-none"
                aria-label="Toggle Theme"
            >
              {darkMode ? Sun : Moon}
            </button>
          </div>
          {/* Hamburger Menu */}
          <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Menu"
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
                      className="p-1 rounded hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition focus:outline-none"
                      aria-label="Toggle Language"
                  >
                    {switchFlag}
                  </button>
                  <button
                      onClick={toggleDark}
                      className="p-1 rounded hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition focus:outline-none"
                      aria-label="Toggle Theme"
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

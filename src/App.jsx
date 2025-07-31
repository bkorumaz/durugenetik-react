import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Blog from "./sections/Blog";
import Partners from "./sections/Partners";
import About from "./sections/About";
import Contact from "./sections/Contact";
import "./i18n";
import { useTranslation } from "react-i18next";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  const toggleDark = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200">
      <Navbar
        darkMode={darkMode}
        toggleLang={toggleLang}
        toggleDark={toggleDark}
      />

      {/* Global fixed background video */}
      <video
        autoPlay
        loop
        muted
        style={{
          filter: darkMode
            ? "brightness(1) saturate(2) sepia(1) hue-rotate(80deg)"
            : "invert(1) hue-rotate(120deg)",
        }}
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/dna-bg-video2.mp4" type="video/mp4" />
      </video>

      {/* Light mode: white overlay; Dark mode: transparent */}
      <div
        className={`fixed inset-0 -z-10 ${
          darkMode ? "bg-transparent" : "bg-gray-100/40"
        }`}
      />

      <main className="relative z-10 pt-16">
        <Hero darkMode={darkMode} />
        <Products />
        <Blog />
        <Partners />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

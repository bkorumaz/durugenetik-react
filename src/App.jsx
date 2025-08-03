// src/App.jsx
import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Products from "./sections/Products";
import Blog from "./sections/Blog";
import Partners from "./sections/Partners";
import About from "./sections/About";
import Approach from "./sections/Approach";
import Contact from "./sections/Contact";
import "./i18n";
import { useTranslation } from "react-i18next";

const SECTION_IDS = [
  "home", "services", "products", "blog", "partners", "aboutus", "approach", "contact",
];

export default function App() {
  // Dark Mode
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const userPref = localStorage.getItem("theme");
      if (userPref) return userPref === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  const toggleDark = () => setDarkMode((prev) => !prev);

  // Language
  const { i18n } = useTranslation();
  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(newLang);
  };

  // Section scroll & highlight
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef(
    SECTION_IDS.reduce((acc, id) => {
      acc[id] = React.createRef();
      return acc;
    }, {})
  );

  // Video yüklenme takibi (white flash fix)
  const [videoLoaded, setVideoLoaded] = useState(true);
  const videoSrc = "/videos/dna-bg-video2.mp4";
  const poster = "/images/bg-mobile.jpg";
  useEffect(() => {
    setVideoLoaded(false);
  }, [videoSrc]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 65;
      let current = SECTION_IDS[0];
      for (let i = 0; i < SECTION_IDS.length; i++) {
        const ref = sectionRefs.current[SECTION_IDS[i]].current;
        if (ref) {
          const offsetTop = ref.offsetTop;
          if (scrollPos >= offsetTop) {
            current = SECTION_IDS[i];
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (sectionId) => {
    const ref = sectionRefs.current[sectionId];
    if (ref?.current) {
      window.scrollTo({
        top:
          ref.current.getBoundingClientRect().top +
          window.scrollY - 64,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200">
      <Navbar
        darkMode={darkMode}
        toggleLang={toggleLang}
        toggleDark={toggleDark}
        activeSection={activeSection}
        onMenuClick={handleMenuClick}
      />

      {/* poster fallback during load */}
      <div
        className={`fixed inset-0 w-full h-full -z-20 transition-opacity duration-150`}
        style={{
          background: `url(${poster}) center/cover no-repeat`,
          opacity: videoLoaded ? 0 : 1,
        }}
      />


      {/* background video with only the sepia/hue-rotate on darkMode;
          light mode has NO hue-rotate (→ no blue tint) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        poster={poster}
        className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none select-none"
        style={{
          filter: darkMode
            ? "brightness(1) saturate(2) sepia(1) hue-rotate(80deg)"
            : "invert(1) hue-rotate(120deg)"  /* original light-mode tint */
        }}
        key={videoSrc}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <main className="relative z-10 pt-16">
        {SECTION_IDS.map((id) => (
          <section
            key={id}
            id={id}
            ref={sectionRefs.current[id]}
            className="bg-transparent"
          >
            {{
              home: <Hero darkMode={darkMode} />,
              services: <Services />,
              products: <Products />,
              blog: <Blog />,
              partners: <Partners />,
              aboutus: <About />,
              approach: <Approach />,
              contact: <Contact />,
            }[id]}
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}

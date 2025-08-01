import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Hero({ darkMode }) {
  const { t } = useTranslation();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade out hero video as user scrolls.
  const fadeOpacity = 1 - Math.min(offsetY / (window.innerHeight * 0.75), 1);

  return (
    <section id="home" className="h-screen pt-16 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        style={{ opacity: fadeOpacity }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      {darkMode && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      )}
      {/* No gradient fade to avoid white flash */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-transparent to-transparent z-10" />
      <div className="relative z-20 text-center px-6 mt-16">
        <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          {t("hero.title")}
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-900 dark:text-white">
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  );
}


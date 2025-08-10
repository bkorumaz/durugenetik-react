// src/sections/Products.jsx
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();
  const products = t("products.list", { returnObjects: true });
  const [videoLoaded, setVideoLoaded] = useState(true);
  const [loadVideo, setLoadVideo] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (loadVideo) setVideoLoaded(false);
  }, [loadVideo]);

  useEffect(() => {
    if (loadVideo && videoRef.current) {
      const p = videoRef.current.play();
      if (p?.catch) p.catch(() => {});
    }
  }, [loadVideo]);

  return (
    <section ref={sectionRef} id="products" className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden scroll-mt-16">
      {/* hero.mp4 sadece bu bölüm için */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/products-placeholder.svg"
        preload="none"
        className="absolute inset-0 w-full h-full object-cover -z-20"
        onLoadedData={() => setVideoLoaded(true)}
      >
        {loadVideo && <source src="/videos/products-bg.mp4" type="video/mp4" />}
      </video>
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* yarı saydam okunabilirlik katmanı */}
      <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-sm dark:bg-neutral-900 dark:bg-opacity-60 -z-10" />

      <div className="relative z-10 flex flex-col items-center w-full px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">{t("products.title")}</h2>
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto">
          {products.map((prod) => (
            <div
              key={prod.name}
              className="flex flex-col items-center justify-between p-6 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-60 h-full"
            >
                <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-teal-300 dark:border-teal-600 shadow">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-teal-600/20 dark:bg-teal-500/20 mix-blend-multiply hover:bg-teal-600/10 dark:hover:bg-teal-500/10 transition-colors" />
                </div>
              <h3 className="text-lg font-bold text-teal-900 dark:text-teal-300 mb-1">
                {prod.name}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 text-center">
                {prod.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex sm:hidden overflow-x-auto snap-x snap-mandatory w-screen px-6 h-[calc(100vh-12rem)] gap-6 pb-4">
          {products.map((prod) => (
            <div
              key={prod.name}
              className="flex-shrink-0  w-[90vw] snap-center snap-start flex flex-col items-center justify-center p-6 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-60 h-full"
            >
                <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-teal-300 dark:border-teal-600 shadow">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-teal-600/20 dark:bg-teal-500/20 mix-blend-multiply hover:bg-teal-600/10 dark:hover:bg-teal-500/10 transition-colors" />
                </div>
              <h3 className="text-lg font-bold text-teal-900 dark:text-teal-300 mb-1">
                {prod.name}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 text-center">
                {prod.desc}
              </p>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero({ darkMode }) {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden select-none"
    >
      {/* Üstten çok hafif bir blur/fade */}
      <div className="absolute inset-0 z-0 pointer-events-none backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-green-900 dark:text-green-300 drop-shadow-xl tracking-tight">
          {t("hero.title") || "Veteriner Medikal Ürünleri San.Tic.Ltd.Şti"}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 dark:text-gray-100 mb-7 max-w-3xl mx-auto drop-shadow">
          {t("hero.subtitle") ||
            "Geleceğin genetiği, sürdürülebilir tarım ve yüksek verimlilik için yeni nesil çözümler."}
        </p>
        <a
          href="#products"
          className="inline-block mt-3 px-8 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 transition text-lg font-bold text-white shadow-xl hover:scale-105 active:scale-95"
        >
          {t("hero.cta") || "Ürünlerimizi Keşfet"}
        </a>
      </div>
      {/* Aşağı ok animasyonu */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <a href="#products" aria-label="Scroll to products" className="animate-bounce">
          <svg
            width="38"
            height="38"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="text-teal-600 dark:text-teal-300"
          >
            <circle cx="19" cy="19" r="17" strokeOpacity=".15" />
            <path d="M12 18l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 10v14" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}

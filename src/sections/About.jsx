// src/sections/About.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="aboutus" className="min-h-screen flex flex-col justify-center items-center scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6 space-y-6 text-center">
        <h2 className="text-4xl font-bold">{t("about.title")}</h2>
        <p className="text-gray-700 dark:text-gray-300">{t("about.description")}</p>
      </div>
    </section>
  );
}

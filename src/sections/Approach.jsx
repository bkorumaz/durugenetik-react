// src/sections/Approach.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Approach() {
  const { t } = useTranslation();
  const steps = t("approach.steps", { returnObjects: true });
  return (
    <section id="approach" className="min-h-screen flex flex-col justify-center items-center bg-transparent scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">{t("approach.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map(({ step, desc }) => (
            <div key={step} className="p-6 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-60">
              <div className="text-2xl font-semibold text-teal-600 mb-2">{step}</div>
              <p className="text-gray-700 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

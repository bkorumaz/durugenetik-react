import React from "react";
import { useTranslation } from "react-i18next";

export default function Approach() {
  const { t } = useTranslation();
  const points = t("approach.points", { returnObjects: true });

  return (
    <section id="approach" className="scroll-mt-16 min-h-screen px-6 py-12 relative text-center">
      <h2 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-gray-200">
        {t("approach.title")}
      </h2>
      <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
        {t("approach.description")}
      </p>
      <ul className="max-w-2xl mx-auto space-y-4 text-left">
        {points.map((p, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <span className="text-teal-600 dark:text-teal-300 mt-1">•</span>
            <span className="text-gray-700 dark:text-gray-300">{p}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  const services = t("services.list", { returnObjects: true });

  return (
    <section id="services" className="scroll-mt-16 min-h-screen px-6 py-12 relative">
      <h2 className="text-4xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-200">
        {t("services.title")}
      </h2>
      <p className="max-w-3xl mx-auto mb-10 text-center text-lg text-gray-700 dark:text-gray-300">
        {t("services.intro")}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-8 rounded-lg shadow-lg bg-white/70 dark:bg-gray-700/60 border border-teal-200 dark:border-teal-600/50"
          >
            <h3 className="text-2xl font-semibold mb-3 text-teal-700 dark:text-teal-300">
              {service.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

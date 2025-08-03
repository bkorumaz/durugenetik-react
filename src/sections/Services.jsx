// src/sections/Services.jsx
import React from "react";

const services = [
  {
    title: "Genetik Danışmanlık",
    icon: (
      <svg
        className="w-12 h-12 text-green-800 dark:text-green-300 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
    desc: "Sürüdünüzün genetik potansiyelini açığa çıkarmak için saha analizleri."
  },
  {
    title: "Suni Tohumlama",
    icon: (
      <svg
        className="w-12 h-12 text-green-800 dark:text-green-300 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M6 12h12M12 6v12" />
      </svg>
    ),
    desc: "En yeni tekniklerle yüksek verimli damızlık hizmeti."
  },
  {
    title: "Embriyo Transferi",
    icon: (
      <svg
        className="w-12 h-12 text-green-800 dark:text-green-300 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    desc: "Yüksek başarı oranlı embriyo transfer çözümleri.",
  },
];

export default function Services() {
  return (
    <section id="services" className="h-[100vh] py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Hizmetlerimiz
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ title, icon, desc }) => (
            <div
              key={title}
              className="p-6 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-60"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

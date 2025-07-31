import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="aboutus" className="scroll-mt-16 min-h-screen px-6 py-12 relative text-center">
      <h2 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-gray-200">{t("about.title")}</h2>
      <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">{t("about.description")}</p>
    </section>
  );
}
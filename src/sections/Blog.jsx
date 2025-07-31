import React from "react";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  return (
    <section id="blog" className="scroll-mt-16 min-h-screen px-6 py-12 relative">
      <h2 className="text-4xl font-semibold mb-8 text-center text-gray-900 dark:text-gray-200">{t("blog.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-6 border rounded-lg bg-white/50 dark:bg-gray-800/50">
            <h4 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-200">{t("blog.post", { number: i + 1 })}</h4>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{t("blog.excerpt")}</p>
            <a href="#" className="text-teal-600 dark:text-teal-300 font-medium">{t("blog.readMore")}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
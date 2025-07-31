import React from "react";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();
  return (
    <section id="products" className="scroll-mt-16 min-h-screen px-6 py-12 relative">
      <h2 className="text-4xl font-semibold mb-8 text-center text-gray-900 dark:text-gray-200">{t("products.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-8 border rounded-lg bg-white/50 dark:bg-gray-700/50">
            <h3 className="text-2xl font-medium mb-2 text-gray-900 dark:text-gray-200">{t("products.item", { number: i + 1 })}</h3>
            <p className="text-gray-700 dark:text-gray-300">{t("products.description")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
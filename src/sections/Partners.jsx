import React from "react";
import { useTranslation } from "react-i18next";

export default function Partners() {
  const { t } = useTranslation();
  return (
    <section id="partners" className="scroll-mt-16 min-h-screen px-6 py-12 relative">
      <h2 className="text-4xl font-semibold mb-8 text-center text-gray-900 dark:text-gray-200">{t("partners.title")}</h2>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-40 h-24 bg-white/50 dark:bg-gray-700/50 flex items-center justify-center rounded-lg text-gray-900 dark:text-gray-200">
            {t("partners.partner", { number: i + 1 })}
          </div>
        ))}
      </div>
    </section>
  );
}
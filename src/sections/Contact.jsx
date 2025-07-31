import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="scroll-mt-16 min-h-screen px-6 py-12 relative flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-gray-200">{t("contact.title")}</h2>
      <form className="w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-900 dark:text-gray-200">
        <input className="p-3 border rounded bg-white/50 dark:bg-gray-800/50" type="text" placeholder={t("contact.name")} />
        <input className="p-3 border rounded bg-white/50 dark:bg-gray-800/50" type="email" placeholder="Email" />
        <textarea className="p-3 border rounded bg-white/50 dark:bg-gray-800/50 md:col-span-2" rows="5" placeholder={t("contact.message")} />
        <button type="submit" className="md:col-span-2 py-3 bg-teal-600/80 text-white rounded-lg font-medium">{t("contact.send")}</button>
      </form>
    </section>
  );
}
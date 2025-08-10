// src/sections/Contact.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-transparent scroll-mt-16">
      <div className="max-w-3xl mx-auto px-6 text-gray-900 dark:text-gray-100">
        <h2 className="text-4xl font-bold mb-8 text-center">{t("contact.title")}</h2>
        <div className="space-y-4 mb-8">
          <p><strong>{t("contact.addressLabel")}:</strong> {t("contact.address")}</p>
          <p><strong>{t("contact.phoneLabel")}:</strong> {t("contact.phone")}</p>
          <p><strong>{t("contact.emailLabel")}:</strong> {t("contact.email")}</p>
        </div>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder={t("contact.name")}
            className="p-4 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-80 placeholder-gray-400 focus:ring-2 focus:ring-green-600"
          />
          <input
            type="email"
            placeholder={t("contact.emailField")}
            className="p-4 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-80 placeholder-gray-400 focus:ring-2 focus:ring-green-600"
          />
          <textarea
            rows="4"
            placeholder={t("contact.message")}
            className="p-4 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-80 placeholder-gray focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-teal-700 hover:bg-green-800 dark:bg-green-300 dark:hover:bg-teal-400 text-white dark:text-gray-800 rounded-xl transition"
          >
            {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
}

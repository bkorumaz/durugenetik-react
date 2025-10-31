// src/sections/Contact.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="relative py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-emerald-400/15 bg-slate-950/80 px-6 py-12 text-emerald-50 shadow-2xl backdrop-blur">
        <h2 className="text-4xl font-bold text-center text-white drop-shadow mb-8">{t("contact.title")}</h2>
        <div className="space-y-4 mb-10 text-sm sm:text-base">
          <p><strong className="text-emerald-200/80">{t("contact.addressLabel")}:</strong> {t("contact.address")}</p>
          <p><strong className="text-emerald-200/80">{t("contact.phoneLabel")}:</strong> {t("contact.phone")}</p>
          <p><strong className="text-emerald-200/80">{t("contact.emailLabel")}:</strong> {t("contact.email")}</p>
        </div>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder={t("contact.name")}
            className="p-4 rounded-xl border border-emerald-400/20 bg-slate-950/70 text-white placeholder-emerald-100/40 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="email"
            placeholder={t("contact.emailField")}
            className="p-4 rounded-xl border border-emerald-400/20 bg-slate-950/70 text-white placeholder-emerald-100/40 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <textarea
            rows="4"
            placeholder={t("contact.message")}
            className="p-4 rounded-xl border border-emerald-400/20 bg-slate-950/70 text-white placeholder-emerald-100/40 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
}

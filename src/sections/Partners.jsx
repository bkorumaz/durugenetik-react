// src/sections/Partners.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const partnerCards = [
  { id: "bayer", logo: "https://logo.clearbit.com/bayer.com?size=512", accent: "from-emerald-200/70 via-emerald-100/60 to-transparent" },
  { id: "zoetis", logo: "https://logo.clearbit.com/zoetis.com?size=512", accent: "from-teal-200/70 via-teal-100/60 to-transparent" },
  { id: "semex", logo: "https://logo.clearbit.com/semex.com?size=512", accent: "from-lime-200/70 via-lime-100/60 to-transparent" },
  { id: "syngenta", logo: "https://logo.clearbit.com/syngenta.com?size=512", accent: "from-cyan-200/60 via-emerald-100/50 to-transparent" },
  { id: "cargill", logo: "https://logo.clearbit.com/cargill.com?size=512", accent: "from-green-200/70 via-green-100/50 to-transparent" },
  { id: "dupont", logo: "https://logo.clearbit.com/dupont.com?size=512", accent: "from-sky-200/70 via-sky-100/60 to-transparent" },
  { id: "basf", logo: "https://logo.clearbit.com/basf.com?size=512", accent: "from-indigo-200/60 via-indigo-100/40 to-transparent" },
  { id: "elanco", logo: "https://logo.clearbit.com/elanco.com?size=512", accent: "from-purple-200/60 via-purple-100/40 to-transparent" },
  { id: "pfizer", logo: "https://logo.clearbit.com/pfizer.com?size=512", accent: "from-blue-200/70 via-blue-100/50 to-transparent" },
  { id: "boehringer", logo: "https://logo.clearbit.com/boehringer-ingelheim.com?size=512", accent: "from-amber-200/60 via-amber-100/40 to-transparent" },
  { id: "merck", logo: "https://logo.clearbit.com/merck.com?size=512", accent: "from-emerald-200/70 via-teal-100/50 to-transparent" },
  { id: "novartis", logo: "https://logo.clearbit.com/novartis.com?size=512", accent: "from-rose-200/60 via-rose-100/40 to-transparent" },
];

export default function Partners() {
  const { t } = useTranslation();
  const partnerContent = t("partners.items", { returnObjects: true });

  return (
    <section
      id="partners"
      className="relative py-24 sm:py-28 lg:py-32 scroll-mt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/20" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 dark:text-emerald-300 drop-shadow">
          {t("partners.title")}
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {t("partners.subtitle")}
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
          {partnerCards.map((partner, index) => {
            const content = partnerContent?.[partner.id] ?? {};
            const label = content.name || t("partners.partner", { number: index + 1 });
            const focus = content.focus || "";
            const description = content.description || "";
            const highlightClass = index % 4 === 0 ? "xl:col-span-2" : "";

            return (
              <article
                key={partner.id}
                className={`group relative overflow-hidden rounded-3xl border border-teal-100/60 dark:border-teal-900/50 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm shadow-2xl p-10 flex flex-col items-center text-center gap-8 transition-transform duration-500 hover:-translate-y-2 ${highlightClass}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${partner.accent} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
                />
                <div className="absolute -top-24 right-10 h-32 w-32 rounded-full bg-white/30 blur-2xl dark:bg-slate-100/10" />
                <div className="relative w-full flex flex-col items-center gap-6">
                  {focus && (
                    <span className="inline-flex items-center px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-200 bg-white/70 dark:bg-slate-800/70 border border-white/60 dark:border-slate-700/60 shadow">
                      {focus}
                    </span>
                  )}
                  <img
                    src={partner.logo}
                    alt={label}
                    className="h-24 sm:h-28 lg:h-32 xl:h-36 w-auto object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                      {label}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// src/sections/Partners.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const partnerCards = [
  { id: "bayer", logo: "https://logo.clearbit.com/bayer.com?size=512", accent: "from-emerald-300/70 via-emerald-100/70 to-transparent" },
  { id: "zoetis", logo: "https://logo.clearbit.com/zoetis.com?size=512", accent: "from-green-300/70 via-green-100/60 to-transparent" },
  { id: "semex", logo: "https://logo.clearbit.com/semex.com?size=512", accent: "from-lime-300/70 via-lime-100/60 to-transparent" },
  { id: "syngenta", logo: "https://logo.clearbit.com/syngenta.com?size=512", accent: "from-emerald-200/70 via-lime-100/60 to-transparent" },
  { id: "cargill", logo: "https://logo.clearbit.com/cargill.com?size=512", accent: "from-green-200/70 via-emerald-100/60 to-transparent" },
  { id: "dupont", logo: "https://logo.clearbit.com/dupont.com?size=512", accent: "from-emerald-300/70 via-green-100/60 to-transparent" },
  { id: "basf", logo: "https://logo.clearbit.com/basf.com?size=512", accent: "from-lime-300/70 via-emerald-100/60 to-transparent" },
  { id: "elanco", logo: "https://logo.clearbit.com/elanco.com?size=512", accent: "from-green-300/70 via-emerald-100/60 to-transparent" },
  { id: "pfizer", logo: "https://logo.clearbit.com/pfizer.com?size=512", accent: "from-emerald-300/70 via-lime-100/60 to-transparent" },
  { id: "boehringer", logo: "https://logo.clearbit.com/boehringer-ingelheim.com?size=512", accent: "from-green-200/70 via-emerald-100/60 to-transparent" },
  { id: "merck", logo: "https://logo.clearbit.com/merck.com?size=512", accent: "from-lime-200/70 via-emerald-100/60 to-transparent" },
  { id: "novartis", logo: "https://logo.clearbit.com/novartis.com?size=512", accent: "from-green-300/70 via-lime-100/60 to-transparent" },
];

export default function Partners() {
  const { t } = useTranslation();
  const partnerContent = t("partners.items", { returnObjects: true });
  const marqueeItems = [...partnerCards, ...partnerCards];

  return (
    <section
      id="partners"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-emerald-950 dark:via-slate-950 dark:to-emerald-900 scroll-mt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/10" />
        <div className="absolute bottom-10 right-0 h-80 w-80 translate-x-1/4 rounded-full bg-lime-200/40 blur-3xl dark:bg-emerald-700/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),_transparent_55%)]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-emerald-300/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 shadow-sm dark:border-emerald-500/40 dark:bg-emerald-900/40 dark:text-emerald-200">
          {t("partners.badge")}
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 drop-shadow-sm dark:text-emerald-100">
          {t("partners.title")}
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-emerald-900/70 dark:text-emerald-100/70 max-w-3xl mx-auto">
          {t("partners.subtitle")}
        </p>
        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-emerald-50 via-emerald-50/60 to-transparent dark:from-emerald-950 dark:via-emerald-950/60" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-emerald-50 via-emerald-50/60 to-transparent dark:from-emerald-900 dark:via-emerald-900/60" />
          <div className="flex w-[200%] gap-8 animate-marquee [--marquee-duration:38s]">
            {marqueeItems.map((partner, index) => {
              const content = partnerContent?.[partner.id] ?? {};
              const label = content.name || t("partners.partner", { number: (index % partnerCards.length) + 1 });
              const focus = content.focus || "";
              const description = content.description || "";

              return (
                <article
                  key={`${partner.id}-${index}`}
                  className="group relative flex w-[320px] shrink-0 flex-col gap-6 overflow-hidden rounded-3xl border border-emerald-200/70 bg-white/80 px-8 py-10 text-left shadow-xl backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 dark:border-emerald-800/40 dark:bg-emerald-900/70"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${partner.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-90`} />
                  <div className="absolute -top-16 right-10 h-24 w-24 rounded-full bg-white/30 blur-2xl dark:bg-emerald-700/30" />
                  <div className="relative flex flex-col items-start gap-5">
                    {focus && (
                      <span className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800 shadow-sm dark:border-emerald-700/60 dark:bg-emerald-950/70 dark:text-emerald-200">
                        {focus}
                      </span>
                    )}
                    <img
                      src={partner.logo}
                      alt={label}
                      className="h-24 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-emerald-950 dark:text-white">{label}</h3>
                      <p className="text-sm text-emerald-900/70 dark:text-emerald-100/70 leading-relaxed">{description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

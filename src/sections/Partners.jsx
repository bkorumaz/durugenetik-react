// src/sections/Partners.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const partnerCards = [
  { id: "bayer", logo: "https://logo.clearbit.com/bayer.com?size=512", accent: "from-emerald-300/80 via-emerald-200/50 to-transparent", size: "xl" },
  { id: "zoetis", logo: "https://logo.clearbit.com/zoetis.com?size=512", accent: "from-green-300/80 via-emerald-200/40 to-transparent", size: "md" },
  { id: "semex", logo: "https://logo.clearbit.com/semex.com?size=512", accent: "from-lime-300/80 via-emerald-200/40 to-transparent", size: "lg" },
  { id: "syngenta", logo: "https://logo.clearbit.com/syngenta.com?size=512", accent: "from-emerald-200/80 via-green-200/40 to-transparent", size: "sm" },
  { id: "cargill", logo: "https://logo.clearbit.com/cargill.com?size=512", accent: "from-emerald-300/70 via-emerald-200/40 to-transparent", size: "lg" },
  { id: "dupont", logo: "https://logo.clearbit.com/dupont.com?size=512", accent: "from-green-300/80 via-emerald-200/40 to-transparent", size: "sm" },
  { id: "basf", logo: "https://logo.clearbit.com/basf.com?size=512", accent: "from-lime-300/80 via-emerald-200/40 to-transparent", size: "md" },
  { id: "elanco", logo: "https://logo.clearbit.com/elanco.com?size=512", accent: "from-emerald-300/80 via-green-200/40 to-transparent", size: "lg" },
  { id: "pfizer", logo: "https://logo.clearbit.com/pfizer.com?size=512", accent: "from-green-300/80 via-emerald-200/40 to-transparent", size: "sm" },
  { id: "boehringer", logo: "https://logo.clearbit.com/boehringer-ingelheim.com?size=512", accent: "from-emerald-200/80 via-green-200/40 to-transparent", size: "md" },
  { id: "merck", logo: "https://logo.clearbit.com/merck.com?size=512", accent: "from-lime-300/80 via-emerald-200/40 to-transparent", size: "lg" },
  { id: "novartis", logo: "https://logo.clearbit.com/novartis.com?size=512", accent: "from-green-300/80 via-emerald-200/40 to-transparent", size: "md" },
];

const sizeClasses = {
  xl: "min-w-[420px] lg:min-w-[480px] min-h-[320px]",
  lg: "min-w-[360px] lg:min-w-[400px] min-h-[260px]",
  md: "min-w-[300px] lg:min-w-[340px] min-h-[220px]",
  sm: "min-w-[240px] lg:min-w-[280px] min-h-[180px]",
};

const offsetClasses = [
  "lg:-translate-y-10",
  "lg:translate-y-6",
  "lg:-translate-y-4",
  "lg:translate-y-10",
];

export default function Partners() {
  const { t } = useTranslation();
  const partnerContent = t("partners.items", { returnObjects: true });

  const trackConfigurations = [
    {
      items: partnerCards.filter((_, index) => index % 3 !== 2),
      animation: "animate-marquee",
      durationVar: "--marquee-duration",
      duration: "40s",
    },
    {
      items: partnerCards.filter((_, index) => index % 3 !== 0),
      animation: "animate-marquee-reverse",
      durationVar: "--marquee-reverse-duration",
      duration: "55s",
    },
    {
      items: partnerCards.filter((_, index) => index % 3 === 2).concat(partnerCards.filter((_, index) => index % 3 === 0)),
      animation: "animate-marquee-slow",
      durationVar: "--marquee-slow-duration",
      duration: "68s",
    },
  ];

  return (
    <section id="partners" className="relative py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100">
          {t("partners.badge")}
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow">{t("partners.title")}</h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-emerald-100/80 max-w-3xl mx-auto">
          {t("partners.subtitle")}
        </p>

        <div className="relative mt-16 -mx-4 sm:-mx-6 lg:-mx-12">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-black/45 py-12 backdrop-blur">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/70 via-black/20 to-transparent" />
            <div className="flex flex-col gap-12 px-8">
              {trackConfigurations.map((track, trackIndex) => {
                const marqueeItems = [...track.items, ...track.items];

                return (
                  <div
                    key={`track-${trackIndex}`}
                    className={`flex w-[230%] items-stretch gap-10 ${track.animation}`}
                    style={{ [track.durationVar]: track.duration }}
                  >
                    {marqueeItems.map((partner, index) => {
                      const content = partnerContent?.[partner.id] ?? {};
                      const label = content.name || t("partners.partner", { number: (index % track.items.length) + 1 });
                      const focus = content.focus || "";
                      const description = content.description || "";
                      const sizeClass = sizeClasses[partner.size] || sizeClasses.md;
                      const offsetClass = offsetClasses[(index + trackIndex) % offsetClasses.length];

                      return (
                        <article
                          key={`${partner.id}-${trackIndex}-${index}`}
                          className={`group relative flex shrink-0 flex-col justify-between overflow-hidden rounded-[2.5rem] bg-white/85 px-8 py-8 text-left text-slate-900 shadow-2xl ring-1 ring-black/5 transition-transform duration-500 hover:-translate-y-3 ${sizeClass} ${offsetClass}`}
                        >
                          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${partner.accent} opacity-30 transition-opacity duration-500 group-hover:opacity-60`} />
                          <div className="relative flex flex-col gap-5">
                            {focus && (
                              <span className="inline-flex w-fit items-center rounded-full bg-emerald-50/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                                {focus}
                              </span>
                            )}
                            <img
                              src={partner.logo}
                              alt={label}
                              className="h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="space-y-2">
                              <h3 className="text-xl font-semibold">{label}</h3>
                              <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

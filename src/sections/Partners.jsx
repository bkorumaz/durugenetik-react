// src/sections/Partners.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const partnerCards = [
  { id: "bayer", logo: "https://logo.clearbit.com/bayer.com?size=512", accent: "from-emerald-300/80 via-emerald-200/50 to-transparent", size: "lg" },
  { id: "zoetis", logo: "https://logo.clearbit.com/zoetis.com?size=512", accent: "from-green-300/80 via-emerald-200/40 to-transparent", size: "md" },
  { id: "semex", logo: "https://logo.clearbit.com/semex.com?size=512", accent: "from-lime-300/80 via-emerald-200/40 to-transparent", size: "sm" },
  { id: "syngenta", logo: "https://logo.clearbit.com/syngenta.com?size=512", accent: "from-emerald-200/80 via-green-200/40 to-transparent", size: "lg" },
  { id: "cargill", logo: "https://logo.clearbit.com/cargill.com?size=512", accent: "from-emerald-300/70 via-emerald-200/40 to-transparent", size: "md" },
  { id: "dupont", logo: "https://logo.clearbit.com/dupont.com?size=512", accent: "from-green-300/80 via-emerald-200/40 to-transparent", size: "sm" },
  { id: "basf", logo: "https://logo.clearbit.com/basf.com?size=512", accent: "from-lime-300/80 via-emerald-200/40 to-transparent", size: "md" },
  { id: "elanco", logo: "https://logo.clearbit.com/elanco.com?size=512", accent: "from-emerald-300/80 via-green-200/40 to-transparent", size: "lg" },
  { id: "pfizer", logo: "https://logo.clearbit.com/pfizer.com?size=512", accent: "from-green-300/80 via-emerald-200/40 to-transparent", size: "sm" },
  { id: "boehringer", logo: "https://logo.clearbit.com/boehringer-ingelheim.com?size=512", accent: "from-emerald-200/80 via-green-200/40 to-transparent", size: "md" },
  { id: "merck", logo: "https://logo.clearbit.com/merck.com?size=512", accent: "from-lime-300/80 via-emerald-200/40 to-transparent", size: "lg" },
  { id: "novartis", logo: "https://logo.clearbit.com/novartis.com?size=512", accent: "from-green-300/80 via-emerald-200/40 to-transparent", size: "md" },
];

const sizeClasses = {
  lg: "min-w-[360px] lg:min-w-[400px] min-h-[240px]",
  md: "min-w-[300px] lg:min-w-[320px] min-h-[210px]",
  sm: "min-w-[260px] lg:min-w-[280px] min-h-[180px]",
};

export default function Partners() {
  const { t } = useTranslation();
  const partnerContent = t("partners.items", { returnObjects: true });
  const partnerRows = [
    partnerCards.slice(0, 6),
    partnerCards.slice(6),
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

        <div className="mt-14 flex flex-col gap-12">
          {partnerRows.map((row, rowIndex) => {
            const marqueeItems = [...row, ...row];
            const animationClass = rowIndex % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse";

            return (
              <div key={`row-${rowIndex}`} className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 p-6 backdrop-blur">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
                <div className={`flex w-[200%] items-stretch gap-8 ${animationClass}`} style={{ '--marquee-duration': rowIndex === 0 ? '36s' : undefined, '--marquee-reverse-duration': rowIndex !== 0 ? '46s' : undefined }}>
                  {marqueeItems.map((partner, index) => {
                    const content = partnerContent?.[partner.id] ?? {};
                    const label = content.name || t("partners.partner", { number: (index % row.length) + 1 });
                    const focus = content.focus || "";
                    const description = content.description || "";
                    const sizeClass = sizeClasses[partner.size] || sizeClasses.md;

                    return (
                      <article
                        key={`${partner.id}-${rowIndex}-${index}`}
                        className={`group relative flex shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-black/50 px-8 py-8 text-left shadow-xl transition-transform duration-500 hover:-translate-y-2 ${sizeClass}`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${partner.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-90`} />
                        <div className="absolute -top-10 right-6 h-20 w-20 rounded-full bg-white/20 blur-2xl" />
                        <div className="relative flex flex-col gap-5">
                          {focus && (
                            <span className="inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100">
                              {focus}
                            </span>
                          )}
                          <img
                            src={partner.logo}
                            alt={label}
                            className="h-20 w-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-white">{label}</h3>
                            <p className="text-sm text-emerald-100/80 leading-relaxed">{description}</p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

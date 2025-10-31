// src/sections/Partners.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const partnerDetails = {
  bayer: {
    id: "bayer",
    logo: "https://logo.clearbit.com/bayer.com?size=512",
    accent: "from-emerald-400/70 via-emerald-300/30 to-transparent",
  },
  zoetis: {
    id: "zoetis",
    logo: "https://logo.clearbit.com/zoetis.com?size=512",
    accent: "from-lime-400/60 via-emerald-300/30 to-transparent",
  },
  semex: {
    id: "semex",
    logo: "https://logo.clearbit.com/semex.com?size=512",
    accent: "from-emerald-300/70 via-green-300/25 to-transparent",
  },
  syngenta: {
    id: "syngenta",
    logo: "https://logo.clearbit.com/syngenta.com?size=512",
    accent: "from-lime-300/60 via-emerald-200/30 to-transparent",
  },
  cargill: {
    id: "cargill",
    logo: "https://logo.clearbit.com/cargill.com?size=512",
    accent: "from-emerald-300/70 via-emerald-200/30 to-transparent",
  },
  dupont: {
    id: "dupont",
    logo: "https://logo.clearbit.com/dupont.com?size=512",
    accent: "from-lime-300/60 via-green-200/30 to-transparent",
  },
  basf: {
    id: "basf",
    logo: "https://logo.clearbit.com/basf.com?size=512",
    accent: "from-emerald-400/60 via-emerald-200/25 to-transparent",
  },
  elanco: {
    id: "elanco",
    logo: "https://logo.clearbit.com/elanco.com?size=512",
    accent: "from-emerald-300/70 via-green-200/25 to-transparent",
  },
  pfizer: {
    id: "pfizer",
    logo: "https://logo.clearbit.com/pfizer.com?size=512",
    accent: "from-lime-300/60 via-emerald-200/30 to-transparent",
  },
  boehringer: {
    id: "boehringer",
    logo: "https://logo.clearbit.com/boehringer-ingelheim.com?size=512",
    accent: "from-emerald-300/60 via-green-300/25 to-transparent",
  },
  merck: {
    id: "merck",
    logo: "https://logo.clearbit.com/merck.com?size=512",
    accent: "from-emerald-400/60 via-emerald-200/30 to-transparent",
  },
  novartis: {
    id: "novartis",
    logo: "https://logo.clearbit.com/novartis.com?size=512",
    accent: "from-lime-300/60 via-emerald-200/30 to-transparent",
  },
};

const partnerClusters = [
  {
    id: "cluster-a",
    widthClass: "min-w-[420px] sm:min-w-[460px] lg:min-w-[540px]",
    offsetClass: "lg:-rotate-1 lg:-translate-y-6",
    cards: [
      { partnerId: "bayer", variant: "tall" },
      { partnerId: "zoetis", variant: "wide" },
      { partnerId: "semex", variant: "medium" },
    ],
  },
  {
    id: "cluster-b",
    widthClass: "min-w-[420px] sm:min-w-[460px] lg:min-w-[520px]",
    offsetClass: "lg:translate-y-8",
    cards: [
      { partnerId: "cargill", variant: "medium" },
      { partnerId: "dupont", variant: "short" },
      { partnerId: "basf", variant: "tall" },
    ],
  },
  {
    id: "cluster-c",
    widthClass: "min-w-[400px] sm:min-w-[440px] lg:min-w-[520px]",
    offsetClass: "lg:-translate-y-4",
    cards: [
      { partnerId: "elanco", variant: "wide" },
      { partnerId: "pfizer", variant: "medium" },
      { partnerId: "syngenta", variant: "short" },
    ],
  },
  {
    id: "cluster-d",
    widthClass: "min-w-[400px] sm:min-w-[460px] lg:min-w-[540px]",
    offsetClass: "lg:translate-y-10",
    cards: [
      { partnerId: "boehringer", variant: "tall" },
      { partnerId: "merck", variant: "medium" },
      { partnerId: "novartis", variant: "wide" },
    ],
  },
];

const variantClasses = {
  tall: "lg:row-span-2 min-h-[200px] lg:min-h-[320px]",
  medium: "min-h-[180px] lg:min-h-[220px]",
  short: "min-h-[150px] lg:min-h-[200px]",
  wide: "lg:col-span-2 min-h-[180px] lg:min-h-[220px]",
};

export default function Partners() {
  const { t } = useTranslation();
  const partnerContent = t("partners.items", { returnObjects: true });

  return (
    <section id="partners" className="relative overflow-hidden py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <span className="inline-flex items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100">
          {t("partners.badge")}
        </span>
        <h2 className="mt-6 text-3xl font-bold text-white drop-shadow sm:text-4xl lg:text-5xl">{t("partners.title")}</h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-emerald-100/80 max-w-3xl mx-auto">
          {t("partners.subtitle")}
        </p>

        <div className="relative mt-16 left-1/2 w-screen -translate-x-1/2 px-4 sm:px-6 lg:px-16">
          <div className="relative overflow-hidden rounded-[3rem] border border-emerald-300/15 bg-slate-950/75 py-14 backdrop-blur">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950/80 via-slate-950/10 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950/80 via-slate-950/10 to-transparent" />

            <div
              className="flex w-max items-start gap-12 animate-marquee"
              style={{ "--marquee-duration": "55s" }}
            >
              {[...partnerClusters, ...partnerClusters].map((cluster, clusterIndex) => (
                <div
                  key={`${cluster.id}-${clusterIndex}`}
                  className={`grid auto-rows-[minmax(160px,1fr)] grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 ${cluster.widthClass} ${cluster.offsetClass}`}
                >
                  {cluster.cards.map((card, cardIndex) => {
                    const detail = partnerDetails[card.partnerId];
                    const content = partnerContent?.[card.partnerId] ?? {};
                    const label = content.name || t("partners.partner", { number: cardIndex + 1 });
                    const focus = content.focus || "";
                    const description = content.description || "";
                    const variantClass = variantClasses[card.variant] || variantClasses.medium;

                    return (
                      <article
                        key={`${cluster.id}-${card.partnerId}-${cardIndex}`}
                        className={`group relative flex flex-col justify-between overflow-hidden rounded-[2.25rem] border border-emerald-300/20 bg-slate-950/75 px-7 py-8 text-left text-white shadow-2xl transition-transform duration-500 hover:-translate-y-2 ${variantClass}`}
                      >
                        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${detail?.accent ?? "from-emerald-300/60 via-emerald-200/20 to-transparent"} opacity-20 transition-opacity duration-500 group-hover:opacity-60`} />
                        <div className="relative flex flex-col gap-5">
                          {focus && (
                            <span className="inline-flex w-fit items-center rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100">
                              {focus}
                            </span>
                          )}
                          {detail?.logo && (
                            <img
                              src={detail.logo}
                              alt={label}
                              className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          )}
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-white drop-shadow sm:text-xl">{label}</h3>
                            {description && <p className="text-sm text-emerald-100/80 leading-relaxed">{description}</p>}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

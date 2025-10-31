// src/sections/Products.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const highlightIcons = [
  (
    <svg
      className="h-8 w-8 text-emerald-200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l2.4 5.6 6.1.5-4.6 3.9 1.4 6-5.3-3.2L6.7 19l1.4-6L3.5 9.1l6.1-.5L12 3z" />
    </svg>
  ),
  (
    <svg
      className="h-8 w-8 text-emerald-200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
      <path d="M12 12l3-3" />
    </svg>
  ),
  (
    <svg
      className="h-8 w-8 text-emerald-200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h16" />
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </svg>
  ),
];

export default function Products() {
  const { t } = useTranslation();
  const productsContent = t("products", { returnObjects: true }) || {};
  const {
    title,
    tagline,
    intro,
    highlights = [],
    list = [],
    metrics = [],
  } = productsContent;
  const featuredBreeds = list.slice(0, 4);
  const galleryBreeds = list.slice(4);

  return (
    <section id="products" className="relative py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div className="space-y-8 rounded-3xl border border-emerald-300/20 bg-slate-950/60 p-8 shadow-2xl backdrop-blur">
            {tagline && (
              <span className="inline-flex items-center rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100">
                {tagline}
              </span>
            )}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl drop-shadow">{title}</h2>
              {intro && <p className="text-base text-emerald-100/80 sm:text-lg">{intro}</p>}
            </div>
            {highlights?.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="flex items-start gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-5 py-4 text-white shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-emerald-200">
                      {highlightIcons[index % highlightIcons.length]}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      {item.description && <p className="mt-1 text-sm text-emerald-100/80">{item.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {metrics?.length > 0 && (
              <dl className="grid gap-4 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <div
                    key={`${metric.value}-${index}`}
                    className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-5 text-center text-emerald-100 shadow-xl"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                      {metric.label}
                    </dt>
                    <dd className="mt-3 text-3xl font-bold text-white">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="space-y-8">
            {featuredBreeds.length > 0 && (
              <div className="grid gap-5">
                {featuredBreeds.map((prod, index) => (
                  <article
                    key={`${prod.name}-${index}`}
                    className="flex items-start gap-5 rounded-3xl border border-emerald-300/20 bg-slate-950/60 p-5 text-white shadow-xl backdrop-blur"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-emerald-300/40 bg-emerald-400/10">
                      {prod.image ? (
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="text-xl font-semibold text-emerald-200">
                          {prod.name?.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white drop-shadow">{prod.name}</h3>
                      <p className="text-sm text-emerald-100/80">{prod.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {galleryBreeds.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2">
                {galleryBreeds.map((prod, index) => (
                  <article
                    key={`${prod.name}-${index}`}
                    className="group overflow-hidden rounded-3xl border border-emerald-300/10 bg-slate-950/60 text-white shadow-xl backdrop-blur transition-transform duration-500 hover:-translate-y-2"
                  >
                    {prod.image && (
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}
                    <div className="space-y-2 px-5 py-4">
                      <h3 className="text-lg font-semibold text-white drop-shadow">{prod.name}</h3>
                      <p className="text-sm text-emerald-100/80">{prod.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

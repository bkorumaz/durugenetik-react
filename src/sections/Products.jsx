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
  const { title, tagline, intro, highlights = [], list = [], metrics = [] } = productsContent;
  const featuredBreeds = list.slice(0, 3);
  const spotlightBreeds = list.slice(3, 6);
  const galleryBreeds = list.slice(6);

  return (
    <section id="products" className="relative py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-12">
          <div className="space-y-10 xl:col-span-5">
            <div className="space-y-8 rounded-[2.5rem] border border-emerald-400/15 bg-slate-950/80 p-8 shadow-2xl backdrop-blur">
              {tagline && (
                <span className="inline-flex items-center rounded-full border border-emerald-300/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100">
                  {tagline}
                </span>
              )}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl drop-shadow">{title}</h2>
                {intro && <p className="text-base text-emerald-50/90 sm:text-lg leading-relaxed">{intro}</p>}
              </div>
              {highlights?.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {highlights.map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="flex items-start gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-900/40 px-5 py-4 text-white shadow-xl"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-200">
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
            </div>

            {metrics?.length > 0 && (
              <dl className="grid gap-4 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <div
                    key={`${metric.value}-${index}`}
                    className="rounded-2xl border border-emerald-400/20 bg-slate-900/80 px-4 py-5 text-center text-emerald-100 shadow-xl backdrop-blur"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">{metric.label}</dt>
                    <dd className="mt-3 text-3xl font-bold text-white">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="space-y-10 xl:col-span-7">
            {featuredBreeds.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2">
                {featuredBreeds.map((prod, index) => (
                  <article
                    key={`${prod.name}-${index}`}
                    className="group relative overflow-hidden rounded-[2.5rem] border border-emerald-400/20 bg-slate-950/80 text-white shadow-2xl backdrop-blur transition-transform duration-500 hover:-translate-y-1 hover:border-emerald-300/30 sm:col-span-1"
                  >
                    {prod.image && (
                      <div className="relative h-44 w-full overflow-hidden">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                      </div>
                    )}
                    <div className="space-y-2 px-6 py-5">
                      <h3 className="text-xl font-semibold text-white drop-shadow">{prod.name}</h3>
                      <p className="text-sm text-emerald-50/80 leading-relaxed">{prod.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {spotlightBreeds.length > 0 && (
              <div className="grid gap-6 md:grid-cols-3">
                {spotlightBreeds.map((prod, index) => (
                  <article
                    key={`${prod.name}-${index}`}
                    className="group relative flex flex-col overflow-hidden rounded-[2.25rem] border border-emerald-400/15 bg-slate-950/75 text-white shadow-xl backdrop-blur transition-transform duration-500 hover:-translate-y-1"
                  >
                    {prod.image && (
                      <div className="relative h-36 w-full overflow-hidden">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      </div>
                    )}
                    <div className="space-y-2 px-5 py-4">
                      <h3 className="text-lg font-semibold text-white drop-shadow">{prod.name}</h3>
                      <p className="text-sm text-emerald-50/80 leading-relaxed">{prod.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {galleryBreeds.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {galleryBreeds.map((prod, index) => (
                  <article
                    key={`${prod.name}-${index}`}
                    className="group relative overflow-hidden rounded-[2rem] border border-emerald-400/10 bg-slate-950/70 text-white shadow-xl backdrop-blur transition-transform duration-500 hover:-translate-y-1"
                  >
                    {prod.image && (
                      <div className="relative h-32 w-full overflow-hidden">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      </div>
                    )}
                    <div className="space-y-2 px-5 py-4">
                      <h3 className="text-base font-semibold text-white drop-shadow">{prod.name}</h3>
                      <p className="text-sm text-emerald-100/75 leading-relaxed">{prod.desc}</p>
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

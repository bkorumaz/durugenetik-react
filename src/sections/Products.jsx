// src/sections/Products.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const highlightIcons = [
  (
    <svg
      className="h-8 w-8 text-emerald-700 dark:text-emerald-300"
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
      className="h-8 w-8 text-emerald-700 dark:text-emerald-300"
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
      className="h-8 w-8 text-emerald-700 dark:text-emerald-300"
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

const productIcons = [
  (
    <svg
      className="h-10 w-10 text-emerald-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16v12H4z" />
      <path d="M4 10h16" />
    </svg>
  ),
  (
    <svg
      className="h-10 w-10 text-emerald-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16l-2 10H6L4 6z" />
      <path d="M10 16l-1 4" />
      <path d="M14 16l1 4" />
    </svg>
  ),
  (
    <svg
      className="h-10 w-10 text-emerald-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l6 6-6 6-6-6 6-6z" />
      <path d="M12 14v8" />
    </svg>
  ),
  (
    <svg
      className="h-10 w-10 text-emerald-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 11l7-7 7 7" />
      <path d="M4 10v10h16V10" />
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

  return (
    <section id="products" className="relative py-24 sm:py-32 text-white scroll-mt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur">
            {tagline && (
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100">
                {tagline}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{title}</h2>
            {intro && (
              <p className="text-base sm:text-lg text-emerald-100/80">
                {intro}
              </p>
            )}
            {highlights?.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-emerald-200">
                      {highlightIcons[index % highlightIcons.length]}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      {item.description && (
                        <p className="mt-1 text-sm text-emerald-100/70">{item.description}</p>
                      )}
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
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-5 text-center shadow-lg"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100/70">
                      {metric.label}
                    </dt>
                    <dd className="mt-3 text-3xl font-bold text-white">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {list.slice(0, 4).map((prod, index) => (
                <article
                  key={`${prod.name}-${index}`}
                  className="flex items-start gap-4 rounded-3xl border border-white/10 bg-black/45 p-5 shadow-xl backdrop-blur"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-emerald-200">
                    {productIcons[index % productIcons.length]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{prod.name}</h3>
                    <p className="mt-2 text-sm text-emerald-100/70">{prod.desc}</p>
                  </div>
                </article>
              ))}
            </div>
            {list.length > 4 && (
              <div className="grid gap-4 sm:grid-cols-3">
                {list.slice(4).map((prod, index) => (
                  <article
                    key={`${prod.name}-${index}`}
                    className="rounded-3xl border border-white/10 bg-black/45 p-4 text-center shadow-lg backdrop-blur"
                  >
                    {prod.image && (
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="mx-auto h-28 w-full rounded-2xl object-cover"
                        loading="lazy"
                      />
                    )}
                    <h3 className="mt-3 text-lg font-semibold text-white">{prod.name}</h3>
                    <p className="mt-2 text-sm text-emerald-100/70">{prod.desc}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        {list.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((prod, index) => (
              <article
                key={`${prod.name}-${index}`}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-lg backdrop-blur transition-transform duration-500 hover:-translate-y-2"
              >
                {prod.image && (
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="h-44 w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    loading="lazy"
                  />
                )}
                <div className="space-y-2 px-6 py-5">
                  <h3 className="text-lg font-semibold text-white">{prod.name}</h3>
                  <p className="text-sm text-emerald-100/70">{prod.desc}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

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
    <section
      id="products"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50 to-white py-24 sm:py-32 dark:from-emerald-950 dark:via-slate-950 dark:to-emerald-900 scroll-mt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-700/20" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 translate-y-1/4 rounded-full bg-lime-200/30 blur-3xl dark:bg-emerald-800/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.1),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="text-left">
            {tagline && (
              <span className="inline-flex items-center rounded-full border border-emerald-300/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 shadow-sm dark:border-emerald-500/40 dark:bg-emerald-900/40 dark:text-emerald-200">
                {tagline}
              </span>
            )}
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-950 dark:text-white">
              {title}
            </h2>
            {intro && (
              <p className="mt-6 text-base sm:text-lg text-emerald-900/80 dark:text-emerald-100/80">
                {intro}
              </p>
            )}
            {highlights?.length > 0 && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="group relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/80 px-6 py-5 shadow-lg backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 dark:border-emerald-800/40 dark:bg-emerald-900/70"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-white/70 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90 dark:from-emerald-800/40 dark:via-emerald-900/60" />
                    <div className="relative flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shadow-inner dark:bg-emerald-800/60 dark:text-emerald-200">
                        {highlightIcons[index % highlightIcons.length]}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-emerald-950 dark:text-white">{item.title}</h3>
                        {item.description && (
                          <p className="mt-2 text-sm text-emerald-900/70 dark:text-emerald-100/70">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {metrics?.length > 0 && (
              <dl className="mt-10 grid gap-6 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <div
                    key={`${metric.value}-${index}`}
                    className="rounded-2xl border border-emerald-200/70 bg-white/60 px-5 py-6 text-center shadow-inner dark:border-emerald-800/40 dark:bg-emerald-900/60"
                  >
                    <dt className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-200">
                      {metric.label}
                    </dt>
                    <dd className="mt-3 text-3xl font-bold text-emerald-950 dark:text-white">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-40 w-40 rounded-3xl bg-gradient-to-br from-emerald-200/60 via-white/40 to-transparent blur-2xl dark:from-emerald-700/50 dark:via-emerald-900/40" />
            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-200/70 bg-white/80 p-6 shadow-2xl backdrop-blur-lg dark:border-emerald-800/50 dark:bg-emerald-900/70">
              <div className="space-y-6">
                {list.slice(0, 3).map((prod, index) => (
                  <article
                    key={`${prod.name}-${index}`}
                    className="flex items-start gap-4 rounded-2xl border border-emerald-200/70 bg-white/70 p-5 shadow-md transition-transform duration-500 hover:-translate-y-1 dark:border-emerald-800/50 dark:bg-emerald-950/60"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-inner dark:bg-emerald-800/60 dark:text-emerald-200">
                      {productIcons[index % productIcons.length]}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-950 dark:text-white">{prod.name}</h3>
                      <p className="mt-2 text-sm text-emerald-900/70 dark:text-emerald-100/70">{prod.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {list.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((prod, index) => (
              <article
                key={`${prod.name}-${index}`}
                className="group relative overflow-hidden rounded-3xl border border-emerald-200/70 bg-white/70 shadow-lg backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 dark:border-emerald-800/40 dark:bg-emerald-900/70"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-emerald-100/60 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90 dark:from-emerald-800/30 dark:via-emerald-900/50" />
                {prod.image && (
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="relative space-y-3 px-6 py-6">
                  <h3 className="text-xl font-semibold text-emerald-950 dark:text-white">{prod.name}</h3>
                  <p className="text-sm text-emerald-900/70 dark:text-emerald-100/70 leading-relaxed">{prod.desc}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

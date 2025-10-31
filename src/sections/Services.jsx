// src/sections/Services.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const serviceIcons = [
  (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l2.5 7.5H22l-6 4.5 2.5 7.5L12 18l-6 4.5 2.5-7.5-6-4.5h7.5z" />
    </svg>
  ),
  (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v20" />
      <path d="M5 8l7-6 7 6" />
      <path d="M5 22h14" />
    </svg>
  ),
  (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h18" />
      <path d="M12 3v18" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16v16H4z" />
      <path d="M4 10h16" />
    </svg>
  ),
];

export default function Services() {
  const { t } = useTranslation();
  const servicesContent = t("services", { returnObjects: true }) || {};
  const { title, intro, highlights = [], list = [] } = servicesContent;

  return (
    <section id="services" className="relative py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-8 rounded-3xl bg-white/90 p-8 shadow-2xl ring-1 ring-black/5 backdrop-blur">
            <span className="inline-flex w-fit items-center rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700">
              {t("services.badge")}
            </span>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">{title}</h2>
              {intro && <p className="text-base text-slate-600 sm:text-lg">{intro}</p>}
            </div>
            {highlights.length > 0 && (
              <dl className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className="rounded-2xl bg-slate-900 px-4 py-5 text-center text-white shadow-xl"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-200/80">{item.label}</dt>
                    <dd className="mt-3 text-3xl font-bold">{item.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="space-y-8">
            {list.map((service, index) => (
              <article
                key={`${service.title}-${index}`}
                className="flex flex-col gap-4 rounded-3xl bg-white/85 p-6 shadow-xl ring-1 ring-emerald-500/10 backdrop-blur transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    {serviceIcons[index % serviceIcons.length]}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700/80">{service.pillar}</span>
                    <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-600">{service.description}</p>
                {service.points?.length > 0 && (
                  <ul className="grid gap-2 text-sm text-slate-500 sm:grid-cols-2">
                    {service.points.map((point, idx) => (
                      <li key={`${point}-${idx}`} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

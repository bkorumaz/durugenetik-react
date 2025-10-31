// src/sections/Approach.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Approach() {
  const { t } = useTranslation();
  const approachContent = t("approach", { returnObjects: true }) || {};
  const { title, description, steps = [], highlights = [] } = approachContent;

  return (
    <section id="approach" className="relative py-24 sm:py-32 text-white scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white drop-shadow sm:text-4xl">{title}</h2>
          {description && <p className="mt-4 text-base text-emerald-100/80 sm:text-lg">{description}</p>}
        </div>

        {highlights.length > 0 && (
          <dl className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="rounded-3xl border border-emerald-300/20 bg-slate-950/70 px-6 py-6 text-center shadow-lg backdrop-blur"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-200/80">{item.label}</dt>
                <dd className="mt-3 text-2xl font-semibold text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={`${step.step}-${index}`}
              className="flex flex-col gap-3 rounded-3xl border border-emerald-300/20 bg-slate-950/70 p-6 text-left shadow-lg backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/40 bg-emerald-400/10 text-lg font-bold text-emerald-200">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-white drop-shadow">{step.step}</h3>
              </div>
              <p className="text-sm text-emerald-100/80">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

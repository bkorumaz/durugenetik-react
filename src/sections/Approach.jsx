// src/sections/Approach.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Approach() {
  const { t } = useTranslation();
  const approachContent = t("approach", { returnObjects: true }) || {};
  const { title, description, steps = [] } = approachContent;

  return (
    <section id="approach" className="relative py-24 sm:py-32 text-white scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
          {description && (
            <p className="mt-4 text-base sm:text-lg text-emerald-100/80">{description}</p>
          )}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={`${step.step}-${index}`}
              className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-black/45 p-6 text-left shadow-lg backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-emerald-200">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-white">{step.step}</h3>
              </div>
              <p className="text-sm text-emerald-100/80">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

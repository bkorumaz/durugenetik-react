// src/sections/Blog.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  const posts = t("blog.posts", { returnObjects: true });
  return (
    <section id="blog" className="relative py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-4xl font-bold text-center text-white drop-shadow mb-12">{t("blog.title")}</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              className="group block overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-slate-950/75 shadow-xl backdrop-blur transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-xl font-semibold text-white drop-shadow">{p.title}</h3>
                <p className="text-sm text-emerald-100/80 leading-relaxed">{p.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

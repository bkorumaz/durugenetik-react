// src/sections/Blog.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  const posts = t("blog.posts", { returnObjects: true });
  return (
    <section id="blog" className="min-h-screen flex flex-col justify-center items-center scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">{t("blog.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
              <a key={idx} href={p.link} className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg dark:bg-neutral-800">
                <div className="relative w-full h-48 overflow-hidden border-b-4 border-teal-300 dark:border-teal-600">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-teal-600/20 dark:bg-teal-500/20 mix-blend-multiply hover:bg-teal-600/10 dark:hover:bg-teal-500/10 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-teal-700 dark:text-teal-300">{p.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{p.excerpt}</p>
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}

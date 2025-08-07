// src/sections/Blog.jsx
import React from "react";

const posts = [
  {
    title: "Yeni Suni Tohumlama Teknikleri",
    img: "https://picsum.photos/seed/artificial-insemination/800/600",
    excerpt: "Modern laboratuvar şartlarında verim optimizasyonu...",
    link: "#"
  },
  {
    title: "Çiftlikte Sağlık Takibi",
    img: "https://images.unsplash.com/photo-1530268782463-418534b0affa?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Hayvan sağlığı verilerini düzenli takip ederek hastalıkları erkenden tespit edin...",
    link: "#"
  },
  {
    title: "Genetik Seçim Stratejileri",
    img: "https://picsum.photos/seed/genetic-selection/800/600",
    excerpt: "Irk seçiminin süt ve et verimine etkisi üzerine bilimsel makale özeti...",
    link: "#"
  },
];

export default function Blog() {
  return (
    <section id="blog" className="min-h-screen flex flex-col justify-center items-center scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Blog & Haberler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(p => (
              <a key={p.title} href={p.link} className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg dark:bg-neutral-800">
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

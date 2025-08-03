// src/sections/Blog.jsx
import React from "react";

const posts = [
  {
    title: "Yeni Suni Tohumlama Teknikleri",
    img: "/images/blog/tohumlama.jpg",
    excerpt: "Modern laboratuvar şartlarında verim optimizasyonu...",
    link: "#"
  },
  {
    title: "Çiftlikte Sağlık Takibi",
    img: "/images/blog/saglik.jpg",
    excerpt: "Hayvan sağlığı verilerini düzenli takip ederek hastalıkları erkenden tespit edin...",
    link: "#"
  },
  {
    title: "Genetik Seçim Stratejileri",
    img: "/images/blog/genetik.jpg",
    excerpt: "Irk seçiminin süt ve et verimine etkisi üzerine bilimsel makale özeti...",
    link: "#"
  },
];

export default function Blog() {
  return (
    <section id="blog" className="h-[100vh] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Blog & Haberler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(p => (
            <a key={p.title} href={p.link} className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg dark:bg-neutral-800">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
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

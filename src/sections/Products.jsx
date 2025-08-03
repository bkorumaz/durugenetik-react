// src/sections/Products.jsx
import React from "react";

const products = [
  { name: "Holstein Dişi",          image: "/images/products/holstein-disi.jpg",        desc: "Yüksek verimli Holstein dişi genomları." },
  { name: "Holstein",               image: "/images/products/holstein.jpg",             desc: "Dünyaca ünlü süt verimi taçlı Holstein hattı." },
  { name: "Montbéliarde",           image: "/images/products/montbeliarde.jpg",         desc: "Sağlam dizi ve yüksek süt verimi için Montbéliarde." },
  { name: "Montbéliarde Dişi",      image: "/images/products/montbeliarde-disi.jpg",    desc: "Seçkin Montbéliarde dişi genomları." },
  { name: "Brown Swiss (Montofon)",  image: "/images/products/brown-swiss-montofon.jpg", desc: "Dayanıklı Brown Swiss (Montofon) genomları." },
  { name: "Etçi Boğalar",           image: "/images/products/etci-bogalar.jpg",         desc: "En iyi etçi boğalarla damızlık iyileştirme." },
  { name: "Kırmızı Holstein",       image: "/images/products/kirmizi-holstein.jpg",     desc: "Güçlü ve renkli Kırmızı Holstein genomları." },
  { name: "Jersey",                 image: "/images/products/jersey.jpg",               desc: "Yoğun yağlı süt için seçkin Jersey hattı." },
  { name: "Simmental",              image: "/images/products/simmental.jpg",            desc: "Çift yönlü verim: Et & süt için Simmental." },
];

export default function Products() {
  return (
    <section id="products" className="relative h-screen pt-16 bg-transparent overflow-hidden">
      {/* hero.mp4 sadece bu bölüm için */}
      <video
        autoPlay loop muted playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* yarı saydam okunabilirlik katmanı */}
      <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-sm dark:bg-neutral-900 dark:bg-opacity-60 -z-10" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Ürünlerimiz
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto">
          {products.map((prod) => (
            <div
              key={prod.name}
              className="flex flex-col items-center p-6 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-60"
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-teal-300 dark:border-teal-600 shadow"
                loading="lazy"
              />
              <h3 className="text-lg font-bold text-teal-900 dark:text-teal-300 mb-1">
                {prod.name}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 text-center">
                {prod.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

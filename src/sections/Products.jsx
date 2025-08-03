// src/sections/Products.jsx
import React, { useState } from "react";

const products = [
  {
    name: "Holstein Dişi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Holstein_Friesian_UK_Yorkshire_July_2011.jpg/960px-Holstein_Friesian_UK_Yorkshire_July_2011.jpg",
    desc: "Yüksek verimli Holstein dişi genomları.",
  },
  {
    name: "Holstein",
    image:
      "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=compress&cs=tinysrgb&w=800",
    desc: "Dünyaca ünlü süt verimi taçlı Holstein hattı.",
  },
  {
    name: "Montbéliarde",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Vache_Montb%C3%A9liarde.jpg/960px-Vache_Montb%C3%A9liarde.jpg",
    desc: "Sağlam dizi ve yüksek süt verimi için Montbéliarde.",
  },
  {
    name: "Montbéliarde Dişi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Vache_Montb%C3%A9liarde.jpg/1200px-Vache_Montb%C3%A9liarde.jpg",
    desc: "Seçkin Montbéliarde dişi genomları.",
  },
  {
    name: "Brown Swiss (Montofon)",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Brown_swiss.jpg",
    desc: "Dayanıklı Brown Swiss (Montofon) genomları.",
  },
  {
    name: "Etçi Boğalar",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/A_Friesian_Bull%2C_Llandeilo_Graban_-_geograph.org.uk_-_579885.jpg",
    desc: "En iyi etçi boğalarla damızlık iyileştirme.",
  },
  {
    name: "Kırmızı Holstein",
    image:
      "https://images.unsplash.com/photo-1561043394-9f7d16d9ae37?auto=compress&cs=tinysrgb&w=800",
    desc: "Güçlü ve renkli Kırmızı Holstein genomları.",
  },
  {
    name: "Jersey",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Bou%C3%ABts_d%27J%C3%A8rri_%C3%8Agypte_5_J%C3%A8rri_Mai_2009.jpg/960px-Bou%C3%ABts_d%27J%C3%A8rri_Mai_2009.jpg",
    desc: "Yoğun yağlı süt için seçkin Jersey hattı.",
  },
  {
    name: "Simmental",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Simmentaler_Fleckvieh.jpg/960px-Simmentaler_Fleckvieh.jpg",
    desc: "Çift yönlü verim: Et & süt için Simmental.",
  },
];

export default function Products() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <section id="products" className="relative min-h-screen pt-16 pb-12 bg-transparent overflow-hidden">
      {/* hero.mp4 sadece bu bölüm için */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=compress&cs=tinysrgb&w=1600"
        className="absolute inset-0 w-full h-full object-cover -z-20"
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="/videos/products-bg.mp4" type="video/mp4" />
      </video>
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* yarı saydam okunabilirlik katmanı */}
      <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-sm dark:bg-neutral-900 dark:bg-opacity-60 -z-10" />

      <div className="relative z-10 flex flex-col items-center w-full px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Ürünlerimiz
        </h2>
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto">
          {products.map((prod) => (
            <div
              key={prod.name}
              className="flex flex-col items-center p-6 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-60"
            >
                <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-teal-300 dark:border-teal-600 shadow">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-teal-600/20 dark:bg-teal-500/20 mix-blend-multiply hover:bg-teal-600/10 dark:hover:bg-teal-500/10 transition-colors" />
                </div>
              <h3 className="text-lg font-bold text-teal-900 dark:text-teal-300 mb-1">
                {prod.name}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 text-center">
                {prod.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex sm:hidden gap-6 overflow-x-auto snap-x snap-mandatory w-full pb-4">
          {products.map((prod) => (
            <div
              key={prod.name}
              className="min-w-[250px] flex-shrink-0 snap-center flex flex-col items-center p-6 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-60"
            >
                <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-teal-300 dark:border-teal-600 shadow">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-teal-600/20 dark:bg-teal-500/20 mix-blend-multiply hover:bg-teal-600/10 dark:hover:bg-teal-500/10 transition-colors" />
                </div>
              <h3 className="text-lg font-bold text-teal-900 dark:text-teal-300 mb-1">
                {prod.name}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 text-center">
                {prod.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex sm:hidden gap-6 overflow-x-auto snap-x snap-mandatory w-full pb-4">
          {products.map((prod) => (
            <div
              key={prod.name}
              className="min-w-[250px] flex-shrink-0 snap-center flex flex-col items-center p-6 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-60"
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

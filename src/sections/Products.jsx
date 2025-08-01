import React from "react";
import { useTranslation } from "react-i18next";

const products = [
  {
    name: "Sexed Montbéliarde",
    image: "/images/products/montbeliarde.jpg",
    desc: "High-yield, sex-sorted Montbéliarde genetics, ideal for dairy and beef production.",
  },
  {
    name: "Beef Bulls",
    image: "/images/products/beef-bull.jpg",
    desc: "Superior beef sires for maximizing meat quality and growth rates.",
  },
  {
    name: "Red Holstein",
    image: "/images/products/red-holstein.jpg",
    desc: "Red Holsteins, combining dairy performance with robust health.",
  },
  {
    name: "Jersey",
    image: "/images/products/jersey.jpg",
    desc: "Jersey cattle, renowned for rich, high-fat milk and efficient production.",
  },
  {
    name: "Simmental",
    image: "/images/products/simmental.jpg",
    desc: "Versatile Simmental, excelling in both dairy and beef with strong genetics.",
  },
  {
    name: "Brown Swiss (Montbéliarde variant)",
    image: "/images/products/brown-swiss.jpg",
    desc: "Brown Swiss (Montofon), known for durability and quality milk yields.",
  },
];

export default function Products({ darkMode }) {
  const { t } = useTranslation();

  return (
    <section id="products" className="h-screen pt-16 relative overflow-hidden">
      {/* Üstten çok hafif bir blur/fade */}
      <div className="absolute inset-0 z-0 pointer-events-none backdrop-blur-[2px]" />
      {/* Karanlık overlay */}
      {darkMode && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      )}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-transparent to-transparent z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white drop-shadow-lg">
          {t("products.title") || "Our Products"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          {products.map((prod) => (
            <div
              key={prod.name}
              className="flex flex-col items-center bg-white/80 dark:bg-neutral-900/80 p-6 rounded-2xl shadow-md"
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-teal-300 dark:border-teal-600 shadow"
                loading="lazy"
                style={{ background: "#eee" }}
              />
              <h3 className="text-lg font-bold text-teal-900 dark:text-teal-300 mb-1">{prod.name}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 text-center">{prod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

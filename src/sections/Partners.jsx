// src/sections/Partners.jsx
import React from "react";

const partners = [
  "https://logo.clearbit.com/bayer.com?size=256",
  "https://logo.clearbit.com/zoetis.com?size=256",
  "https://logo.clearbit.com/semex.com?size=256",
  "https://logo.clearbit.com/syngenta.com?size=256",
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 min-h-screen bg-transparent">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">İş Ortaklarımız</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center items-center">
          {partners.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Partner ${i + 1}`}
              className="h-20 md:h-24 w-auto object-contain filter grayscale hover:filter-none transition"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

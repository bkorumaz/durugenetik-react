// src/sections/Partners.jsx
import React from "react";

const partners = [
  "https://logo.clearbit.com/bayer.com",
  "https://logo.clearbit.com/collins.com",
  "https://logo.clearbit.com/semex.com",
  "https://placehold.co/150x80?text=Logo",
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 h-[100vh] bg-transparent">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">İş Ortaklarımız</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Partner ${i + 1}`}
              className="h-16 object-contain filter grayscale hover:filter-none transition"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

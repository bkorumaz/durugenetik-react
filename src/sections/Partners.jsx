// src/sections/Partners.jsx
import React from "react";
import Marquee from "react-fast-marquee";

const partnersRow1 = [
  "https://logo.clearbit.com/bayer.com?size=256",
  "https://logo.clearbit.com/zoetis.com?size=256",
  "https://logo.clearbit.com/semex.com?size=256",
  "https://logo.clearbit.com/syngenta.com?size=256",
  "https://logo.clearbit.com/cargill.com?size=256",
  "https://logo.clearbit.com/dupont.com?size=256",
];

const partnersRow2 = [
  "https://logo.clearbit.com/basf.com?size=256",
  "https://logo.clearbit.com/elanco.com?size=256",
  "https://logo.clearbit.com/pfizer.com?size=256",
  "https://logo.clearbit.com/boehringer-ingelheim.com?size=256",
  "https://logo.clearbit.com/merck.com?size=256",
  "https://logo.clearbit.com/novartis.com?size=256",
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="min-h-screen flex flex-col justify-center items-center bg-transparent scroll-mt-16"
    >
      <div className="w-full px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">İş Ortaklarımız</h2>
        <div className="flex flex-col gap-6 md:gap-8">
          <Marquee
            direction="right"
            speed={30}
            pauseOnHover
            pauseOnClick
            gradient={false}
            className="flex items-center gap-4 md:gap-8"
          >
            {partnersRow1.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Partner ${i + 1}`}
                className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain mx-4 md:mx-8 filter grayscale hover:filter-none transition"
                loading="lazy"
              />
            ))}
          </Marquee>
          <Marquee
            direction="left"
            speed={30}
            pauseOnHover
            pauseOnClick
            gradient={false}
            className="flex items-center gap-4 md:gap-8"
          >
            {partnersRow2.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Partner ${i + partnersRow1.length + 1}`}
                className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain mx-4 md:mx-8 filter grayscale hover:filter-none transition"
                loading="lazy"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

// Hero.jsx

import React from "react";

export default function Hero({ darkMode }) {
    return (
        <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center overflow-hidden">
            {/* Hero background video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                poster="/images/hero-poster.jpg" // poster jpeg ekle, hızlı açılır
                className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none select-none"
                style={{
                    filter: darkMode
                        ? "brightness(1) saturate(1.5) sepia(0.8) hue-rotate(80deg)"
                        : "invert(1) hue-rotate(120deg)",
                }}
            >
                <source src="/videos/hero-optimized.mp4" type="video/mp4" />
            </video>

            {/* HERO CONTENT */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-teal-600 dark:text-teal-300 drop-shadow-lg">
                    Bilimin Geleceği: DuruGenetik
                </h1>
                <p className="max-w-xl text-lg md:text-xl text-gray-800 dark:text-gray-200 font-medium drop-shadow">
                    Genetik ve biyoteknolojide inovasyonun öncüsü!
                </p>
            </div>
        </section>
    );
}

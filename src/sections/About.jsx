// src/sections/About.jsx
import React from "react";

export default function About() {
  return (
    <section id="aboutus" className="h-[100vh] py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-6 text-center">
        <h2 className="text-4xl font-bold">Hakkımızda</h2>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Duru Genetik</strong> 2010’dan bu yana Burdur merkezli, veteriner medikal ve hayvan genetiği alanında uzman bir kuruluş. Çiftçilere
          sürdürülebilir, verimli ve kârlı ırk yönetimi çözümleri sunuyoruz.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Misyonumuz, en yeni genomik teknolojileri Türkiye tarımına transfer ederek çiftliklerin verimini ve hayvan refahını en üst düzeye çıkarmak.
        </p>
      </div>
    </section>
  );
}

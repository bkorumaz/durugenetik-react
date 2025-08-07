// src/sections/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center bg-transparent">
      <div className="max-w-3xl mx-auto px-6 py-16 text-gray-900 dark:text-gray-100">
        <h2 className="text-4xl font-bold mb-8 text-center">
          İletişim
        </h2>
        <div className="space-y-4 mb-8">
          <p><strong>Adres:</strong> Hızır İlyas Mah. İ. Zeki Burdurlu Cad. No:75/A, Burdur</p>
          <p><strong>Telefon:</strong> 0536 298 30 31</p>
          <p><strong>Email:</strong> osmanacar@durugenetik.com</p>
        </div>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Adınız Soyadınız"
            className="p-4 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-80 placeholder-gray-400 focus:ring-2 focus:ring-green-600"
          />
          <input
            type="email"
            placeholder="Email Adresiniz"
            className="p-4 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-80 placeholder-gray-400 focus:ring-2 focus:ring-green-600"
          />
          <textarea
            rows="4"
            placeholder="Mesajınız"
            className="p-4 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-lg dark:bg-neutral-800 dark:bg-opacity-80 placeholder-gray focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-teal-700 hover:bg-green-800 dark:bg-green-300 dark:hover:bg-teal-400 text-white dark:text-gray-800 rounded-xl transition"
          >
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
}

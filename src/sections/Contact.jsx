// src/sections/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="h-[100vh] py-20 bg-transparent">
      <div className="max-w-3xl mx-auto px-6 text-gray-900 dark:text-gray-100">
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
            className="p-3 border border-gray-700 bg-transparent rounded text-gray-900 dark:text-gray-100 placeholder-gray-600 focus:ring-2 focus:ring-green-600"
          />
          <input
            type="email"
            placeholder="Email Adresiniz"
            className="p-3 border border-gray-700 bg-transparent rounded text-gray-900 dark:text-gray-100 placeholder-gray-600 focus:ring-2 focus:ring-green-600"
          />
          <textarea
            rows="4"
            placeholder="Mesajınız"
            className="p-3 border border-gray-700 bg-transparent rounded text-gray-900 dark:text-gray-100 placeholder-gray-600 focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-800 hover:bg-green-900 text-white rounded transition"
          >
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
}

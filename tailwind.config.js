/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',        // ← force “class” mode only
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
}

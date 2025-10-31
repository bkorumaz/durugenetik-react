/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',        // ← force “class” mode only
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        league: ['"League Spartan"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-slow': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-60%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 38s) linear infinite',
        'marquee-slow': 'marquee-slow var(--marquee-slow-duration, 55s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-reverse-duration, 42s) linear infinite',
      },
    },
  },
  plugins: [],
}

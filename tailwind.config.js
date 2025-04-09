/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          text: 'var(--brand-text)',
          hover: 'var(--brand-hover)',
          darkHover: 'var(--brand-dark-hover)',

          // Backgrounds
          bg: 'var(--brand-bg)',
          screen: 'var(--brand-screen)',
          header: 'var(--brand-header)',
          footer: 'var(--brand-footer)',
        },
      },
    },
  },

  plugins: [],
};

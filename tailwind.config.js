/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#59CE8F',
        dark: {
          100: '#030B1DF0',
          200: '#0F172A',
        },
      },
    },
  },
  plugins: [],
}

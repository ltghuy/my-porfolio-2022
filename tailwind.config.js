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
          100: '#030d24',
          200: '#0F172A',
        },
      },
      keyframes: {
        blink: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        spin: 'spin 3s linear infinite',
        blink: 'blink 0.75s infinite',
      },
      backgroundImage: {
        'hero-bg': "url('/images/herosection-bg.png')",
      },
    },
  },
  plugins: [],
}

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
        fadeIn: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out 1',
        fadeOut: 'fadeOut 0.8s ease-in-out 1',
      },
    },
  },
  plugins: [],
}

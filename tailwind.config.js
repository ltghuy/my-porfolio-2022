/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#59CE8F',
        dark: {
          50: '#0f172a',
          100: '#010e22',
          200: '#070e1f',
        },
      },
      keyframes: {
        blink: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        lefttoright: {
          '0%': { left: '0' },
          '100%': { left: '100%' },
        },
        bgtowhite: {
          to: { backgroundColor: '#ffffff30' },
        },
      },
      animation: {
        spin: 'spin 3s linear infinite',
        blink: 'blink 0.75s infinite',
        lefttoright: 'lefttoright 2s ease-in-out infinite',
        bgtowhite: 'bgtowhite 5s ease-in-out infinite alternate',
      },
      backgroundImage: {
        'hero-bg': "url('/images/herosection-bg.png')",
      },
    },
  },
  plugins: [],
}

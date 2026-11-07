/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f7f5ef',
        ink: '#202b25',
        moss: '#526b55',
        clay: '#c8795d',
      },
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        editorial: ['Instrument Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

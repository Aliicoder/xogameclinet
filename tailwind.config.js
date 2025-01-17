/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "x-sm": "0px",
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans'], // 'Lato' is the font family name, 'sans' is the generic fallback
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Цей рядок каже шукати у всіх підпапках src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

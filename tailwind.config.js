/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F02D3A",
        secondary: "#ed2d00",
      },
    },
  },
  plugins: [],
};

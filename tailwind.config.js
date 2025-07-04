/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkNavyBlue: "#0F172A",
        softGray: "#F1F5F9",
        vibrantOrange: "#F97316",
        skyBlue: "#38BDF8",
        goldenYellow: "#FACC15",
        lavenderMist: "#E6ECF5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

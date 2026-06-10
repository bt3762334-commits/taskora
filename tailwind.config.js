/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D5DFC",
        secondary: "#8B7FFF",
        dark: "#0F172A",
        card: "#111827",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31,38,135,0.37)",
      },
    },
  },
  plugins: [],
};

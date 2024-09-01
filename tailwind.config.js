/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Lora", "serif"],
      },
      colors: {
        olive: "#8C8C3D", // Olive Green
        primaryForeground: "#f4ce14", // Yellow
        primary: "#495e57", // Dark Green
        secondary: "#ee9972", // Light Orange
        secondaryForeground: "#fbdabb", // Light Peach
        highlight: "#edefee", // Light Gray
        highlightForeground: "#333333", // Dark Gray
      },
    },
    container: {
      padding: "12rem",
    },
  },
  plugins: [],
};

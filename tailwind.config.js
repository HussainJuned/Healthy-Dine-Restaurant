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
        primary: "#f4ce14", // Yellow
        secondary: "#495e57", // Dark Green
        lightOrange: "#ee9972", // Light Orange
        lightPeach: "#fbdabb", // Light Peach
        lightGray: "#edefee", // Light Gray
        darkGray: "#333333", // Dark Gray
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "8rem",
      },
    },
  },
  plugins: [],
};

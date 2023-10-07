/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      keyframes: {
        dropdown: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      colors: {
        fgColor: "rgb(var(--foreground-rgb))",
        bgColor: "rgb(var(--background-rgb))",
        priColor: "rgb(var(--primary-rgb))",
        secColor: "rgb(var(--secondary-rgb))",
        shadowColor: "rgb(var(--shadow-rgb))",
      },
    },
  },
  plugins: [],
};

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
      typography: ({ theme }) => ({
        custom: {
          css: {
            "--tw-prose-body": "rgb(var(--foreground-rgb))",
            "--tw-prose-headings": "rgb(var(--foreground-rgb))",
            "--tw-prose-lead": "rgb(var(--foreground-rgb))",
            "--tw-prose-links": "rgb(var(--foreground-rgb))",
            "--tw-prose-bold": "rgb(var(--foreground-rgb))",
            "--tw-prose-counters": "rgb(var(--foreground-rgb))",
            "--tw-prose-bullets": "rgb(var(--foreground-rgb))",
            "--tw-prose-hr": "rgb(var(--secondary-rgb))",
            "--tw-prose-quotes": "rgb(var(--foreground-rgb))",
            "--tw-prose-quote-borders": "rgb(var(--secondary-rgb))",
            "--tw-prose-captions": "rgb(var(--foreground-rgb))",
            "--tw-prose-kbd": "rgb(var(--foreground-rgb))",
            "--tw-prose-kbd-shadows": "rgb(var(--foreground-rgb))",
            "--tw-prose-code": "rgb(var(--foreground-rgb))",
            "--tw-prose-pre-code": "rgb(var(--foreground-rgb))",
            "--tw-prose-pre-bg": "rgb(var(--secondary-rgb))",
            "--tw-prose-th-borders": "rgb(var(--foreground-rgb))",
            "--tw-prose-td-borders": "rgb(var(--foreground-rgb))",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

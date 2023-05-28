/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "text-main": "#363636",
        "text-sub": "#6F6F6F",
        "text-sub-alternate": "#B6B8E5",
        hero: "#F4F5F7",
        "main-color": "#6F74F1",
        "main-color-dark": "#6469DD",
      },
    },
  },
  plugins: [],
};

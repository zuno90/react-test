/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: ({ theme }) => ({
        "body-bg": `linear-gradient(${theme("colors.blue.500")},${theme(
          "colors.green.500",
        )},${theme("colors.red.500")},${theme("colors.yellow.500")})`,
      }),
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      "light-shadow": "rgba(50, 50, 93, 0.25) 0px 4px 12px",
      "dark-shadow": "#A445ED 0px 4px 12px",
    },
    colors: {
      dark: "#050505",
      darkTwo: "#1F1F1F",
      darkThree: "#2D2D2D",
      darkFour: "#3A3A3A",

      light: "#FFFFFF",
      lightTwo: "#F4F4F4",
      lightThree: "#E9E9E9",
      lightFour: "#757575",
      purple: "#A445ED",
      red: "#FF5252",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

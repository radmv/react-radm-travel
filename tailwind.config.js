/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mn: {
          primary: "#152C5B",
          blue: "#3252DF",
          grey: {
            0: "#B0B0B0",
            1: "#F5F6F8",
            2: "#E5E5E5",
            3: "#898989",
          },
          pink: "#FF498B",
          red: "#E74C3C",
          green: "#1ABC9C",
        },
      },
    },
    plugins: [],
  },
};

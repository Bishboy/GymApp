 /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)",
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      screens:{
        "1.5xl":"1547px",
        "sxl":"1148px"
      }
    },
  },
  plugins: [],
};

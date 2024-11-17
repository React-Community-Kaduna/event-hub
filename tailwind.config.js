/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      backgroundImage:{
        "coming_soon":"url('src/assets/Saly-2.svg')",
        "coming_soon2":"url('src/assets/Saly-2.jpg')",
        "error":"url('src/assets/bg.png')"
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    extend: {
      colors: {
        primary: "#FDB00D",
        primaryHover: "#A65A00",
        primaryDark: "#161616",
        secondaryDark: "#1B1B1B",
        shade: "#888888",
      },
      fontFamily: {
        poppins: ['Poppins'],
        sendFlower: ['Send Flowers'],
        saira: ['Saira Extra Condensed']
      }
    },
  },
  plugins: [],
}

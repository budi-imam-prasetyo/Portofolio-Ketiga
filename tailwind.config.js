/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0ea5e9",
        light: "#e0f2fe",
        slate: {
          850: '#182637'
        }
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sw-main": "#EDE7E0",
        "sw-light": "#F4EFEA",
      },
    },
  },
  plugins: [],
};

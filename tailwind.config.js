/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-brown": "#74512D",
        "medium-brown": "#AF8F6F",
        "light-brown": "#F8F4E1"
      },
    },
  },
  plugins: [],
};

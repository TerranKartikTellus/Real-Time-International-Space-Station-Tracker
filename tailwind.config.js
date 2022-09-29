/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'Dust-Clouds-of-the-Pacman-Nebula': "url('/img/bg3.jpg')",
      }
    },
  },
  plugins: [],
}
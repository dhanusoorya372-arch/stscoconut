/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coconut-light': '#fdfbf7',
        'coconut-cream': '#f5f5dc',
        'coconut-green-light': '#a8d5ba',
        'coconut-green': '#5d8a66',
        'coconut-green-dark': '#2d4c33',
        'coconut-forest': '#1b3022',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

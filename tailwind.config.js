/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto Slab','serif'],
        poppins:['Poppins', 'sans-serif'],
        workSans:['Work Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}


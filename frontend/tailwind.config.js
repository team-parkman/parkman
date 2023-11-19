/** @type {import('tailwindcss').Config} */
export default {
  
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textColor: '#ffffff',
        background: '#010014',
        primary: '#002795',
        secondary: '#fcfcfc',
        accent: '#8bf708',
      }
    },
  },
  plugins: [],
}


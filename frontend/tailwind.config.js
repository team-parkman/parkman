/** @type {import('tailwindcss').Config} */
export default {
  
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],

  theme: {
    extend: {
      colors:{
        textColor: '#ffffff',
        background: '#010014',
        primary: '#002795',
        secondary: '#fcfcfc',
        accent: '#8bf708',
      },
      backgroundImage: {
        bgA: "url('../src/assets/bgA.png')"
      },
      boxShadow: {
        shadow1: `3px 3px 10px rgba(0,0,0,1),
        -1px -1px 6px rgba(255, 255, 255, 0.4);`,
        shadow2: `3px 3px 10px rgba(0,0,0,1),
        -1px -1px 6px rgba(255, 255, 255, 0.4),
        inset 3px 3px 10px rgba(0,0,0,1),
        inset -1px -1px 6px rgba(255, 255, 255, 0.4);`,
       
      },
      borderRadius: {
        NewRadius: `71% 29% 57% 43% / 31% 44% 56% 69% `
      }
    },
  },

  plugins: [
    require("flowbite/plugin")
  ],

}


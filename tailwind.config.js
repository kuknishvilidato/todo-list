/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'main':"#6C63FF",
        'light':"#F7F7F7",
        'dark':"#252525",
        'grey':"#8D8D8D",
        'red':"#E50000",
        'halfmain':"#DCDAF9",

      },
    },
  },
  plugins: [],
}


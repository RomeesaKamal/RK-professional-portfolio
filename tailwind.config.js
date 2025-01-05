/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html"],
  theme: {
    extend: {transitionTimingFunction:{
      'jump': "cubic-bezier(0.68, -0.55. 0.265, 1.55)"
    },
    boxShadow: {
      'custom-glow': '0 0 0 3px rgba(15, 4, 180, 0.26), 0 0 10px #006bff, 0 0 50px #006bff',
    },
  },
  plugins: [],
}
}

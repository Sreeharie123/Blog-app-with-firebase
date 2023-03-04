/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#026467",
        secondary:"#EF5EA",
        textColor:"#596392"
      },
      fontFamily:{
           lora:'"lora",serif',
           dm:"'DM Mono',monospace"
      }
    },
  },
  plugins: [],
}

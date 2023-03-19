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
      },
      backgroundImage:{
        'hero-pattern': "url('https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        'pencil': "url('https://images.unsplash.com/photo-1501349800519-48093d60bde0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
        'pen':"url('')",
      },
      backgroundColor:{
         bgimg:"#dadde4"
      }

    },
  },
  plugins: [],
}

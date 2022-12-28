/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#A0047D",
        backdrop:"rgba(0,0,0,.6)"
      },
      screens: {

        'pd': '375px',
        
         'sm': '640px',
      

      'md': '768px',
     

      'lg': '1024px',
     
      'xl': '1280px',
     

      '2xl': '1536px',
      
      }
    },
  },
  plugins: [],
}

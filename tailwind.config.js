/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': "'Playfair Display', serif"
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1280px",
          '2xl': "1340px",
        },
      },
      colors: {
        'off-black': "#331B3B",
        'off-yellow': "#FDC221",
        'off-blue': "#ECF7FF",
      },
      fontSize: {
        'custom-2xl': "17px",
        'custom-40': "40px",
        'custom-3xl': "87px",
      },
      lineHeight: {
        'custom-xl': "51.2px",
        'custom-2xl': "86.83px",
      },
      dropShadow: {
        '3xl': "0px 0px 2px #FDC221",
      },
      boxShadow: {
        '4xl': "0px 0px 0px 2px #331B3B, 2px 2px 0px 2px #FFFFFF, 4px 4px 0px 2px #FDC221",
      },
    },
  },
  plugins: [],
}
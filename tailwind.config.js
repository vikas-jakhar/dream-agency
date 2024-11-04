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
          'xl': "1340px",
        },
      },
      colors: {
        'off-black': "#331B3B",
        'off-yellow': "#FDC221",
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Merge custom breakpoints with built-in screens
      screens: {
        '3xl': '1560px',   // small 4K-ish
        '4xl': '3840px',   // 4K resolution
        '5xl': '5260px',   // ultra-wide
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        opensans: ['"Open Sans"', 'sans-serif'],

      },
    },
  },
  plugins: [],
};

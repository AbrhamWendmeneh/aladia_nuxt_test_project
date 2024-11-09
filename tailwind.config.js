/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#4D4D4D",
        "secondary": "#FFD700",
        "tertiary": "#FFA500",
        "quaternary": "#FF6347",
        "quinary": "#FF4500",
        "senary": "#FF8C00",
        "septenary": "#FFA07A",
        "octonary": "#FFDAB9",
        "nonary": "#FFE4B5",
        "denary": "#FFF8DC",
      },
    },
    fontFamily:{
      'sans': ['"Open Sans"', 'sans-serif'],
      'serif': ['"Merriweather"', 'serif'],
      'mono': ['"Roboto Mono"', 'monospace'],
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};

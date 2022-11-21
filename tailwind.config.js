/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        cyberpunk: {
          ...require("daisyui/src/colors/themes")["[data-theme=cyberpunk]"],
          primary: "#CC162F"
        }
      },
      {
        cyberdark: {      
          "primary": "#FF7598",
          "secondary": "#75D1F0",
          "accent": "#C07EEC",
          "neutral": "#423F00",
          "base-100": "#1f2937",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
        },
      },
    ],
  },
}
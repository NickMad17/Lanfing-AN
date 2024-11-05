import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "second": '#DEF1FF',
        "tertiary": '#C7D7D0',
        "boxcol": "#EBEBEB",
        "main": "#FFF0DC"
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "wireframe",
    ]
  }
}


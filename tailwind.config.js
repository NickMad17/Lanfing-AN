import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "second": '#121C22',
        "main": "#9EB8CE"
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "sunset",
    ]
  }
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'fira': ['fira-sans', 'monospace'],
    },
    extend: {

    },
  },
  plugins: [ require('tailwindcss-animated')],
}


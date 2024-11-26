/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
       'purple-100': '#15173c',
       'purple-200': '#090c31',
       'orange-100': '#f9544c',
       'aqua': '#f3f3f3'
      },
    },
  },
  plugins: [],
}


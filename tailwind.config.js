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
      boxShadow: {
        'sm': '0px 0px 15px -5px rgba(0, 0, 60, 1)',
      }
    },
  },
  plugins: [],
}


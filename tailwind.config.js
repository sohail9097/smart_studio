/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      font:{
        'myfont':'font-family: "Merriweather", serif;'
      },
      heigh:{
        'custom-900':'900px'
      },
      zIndex: {
        '999': '999',
      },

      backgroundImage:{
        bannerImg: "url('/public/images/banner.jpeg')"
      },
    },
  },
  plugins: [],
}


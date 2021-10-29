module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#96e0f5",
        "light": "#ffffff",
        "black": "#000100"
      },
      backgroundImage: {
        'happy-family': "url(/src/assets/family-happy.jpg)",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

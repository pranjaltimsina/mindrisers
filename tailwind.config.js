module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      backgroundImage: {
        'splash-bg': "url('/src/assets/splash-bg.jpg')",
      }, colors: {
        'mask': 'rgba(0,0,0,0.75)',
      },
    },
  },
  plugins: [],
}

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
        'office-bg': "url('/src/assets/office.jpg')",
      }, colors: {
        'mask': 'rgba(0,0,0,0.75)',
        'light-mask': 'rgba(0,0,0,0.50)',
      },
    },
  },
  plugins: [],
}

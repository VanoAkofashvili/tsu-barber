module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
    fill: {
      current: 'currentColor',
      black: '#121212',
      primary: '#B7FF00',
      mag: '#FF5C83',
      transparent: 'rgba(0, 0, 0, 0)',
    },
    extend: {
      backgroundImage: () => ({
        blurredWp: 'url(./src/static/auth.jpg)',
      }),
    },
  },
  plugins: [],
};

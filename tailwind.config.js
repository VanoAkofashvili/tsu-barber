module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },

    fontSize: {
      xxs: '.7rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.375rem',
      xl: '1.75rem',
      '2xl': '2rem',
      '3xl': ['3rem', '3.250rem'],
      '4xl': '4rem',
      '5xl': '5rem',
    },
    extend: {
      backgroundImage: () => ({
        blurredWp: 'url(./src/static/auth.jpg)',
      }),
      colors: {
        black: '#121212',
        white: '#ffffff',
        negative: '#ff2b00',
        grey: {
          90: '#1C1C1E',
          80: '#404044',
          70: '#595959',
          50: '#9A9A9A',
          30: '#CCCCCC',
          10: '#EAEAEA',
          5: '#F5F5F5',
        },
        purple: {
          light: '#5138ED',
          dark: '#3521B5',
          bg: '#DCDFFF',
        },
      },
    },
  },
  plugins: [],
};

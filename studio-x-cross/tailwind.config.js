/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F5F2EB',
          300: '#ECE8DF',
          400: '#DFD8CC',
          500: '#C9BEAD',
        },
        charcoal: {
          950: '#0F0F0E',
          900: '#141413',
          850: '#1A1A18',
          800: '#222220',
          700: '#2E2D2A',
          600: '#484641',
          500: '#696660',
          400: '#8C8880',
        },
        taupe: {
          100: '#F3EFEA',
          200: '#E4DDD4',
          300: '#C9BEAD',
          400: '#AFA18E',
          500: '#8E7F6D',
          600: '#756756',
          700: '#5C5043',
          800: '#423930',
        },
        accent: {
          gold: '#C5A880',
          bronze: '#9B7E58',
          sand: '#D8CEBF'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Manrope"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.28em'
      }
    },
  },
  plugins: [],
}

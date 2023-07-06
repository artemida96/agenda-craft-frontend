/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    screens: {
      sm: '640px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px', //2xl needs quotes because it starts with a number
    },
    extend: {
      colors: {
        gray: {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '',
        },
        yellow: {
          100: '#f9d889',
          200: '#f9c64e',
          300: '#ecbd2c',
          400: '#cc9f13',
          500: '#a57d00',
        },
        red: {
          100: '#dea7a7',
          200: '#e68a8a',
          300: '#d54e4e',
          400: '#cc2f00',
          500: '#ac0404',
        },
        blue: {
          100: '#77aaff',
          200: '#99ccff',
          300: '#bbeeff',
          400: '#5588ff',
          500: '#3366ff',
        },
        
      },
      backgroundColor:{
        primary: '#f9d889',
        secondary: '#77aaff',
        info: '#99ccff',
        warning: '#cc2f00',
        danger: '#ac0404',
        light: '#f8f9fa',
        dark: '#212529',
     }
    },
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'class', // only generate classes
  }),],
};
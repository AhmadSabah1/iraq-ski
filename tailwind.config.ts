// tailwind.config.js

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0052CC',
        secondary: '#172B4D',
        accent: '#00B8D9',
        success: '#36B37E',
        warning: '#FFAB00',
        danger: '#FF5630',
        background: '#F4F5F7',
        surface: '#FFFFFF',
        muted: '#6B778C',
        'primary-dark': '#003D99',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 4px rgba(0,0,0,0.1)',
        dropdown: '0 4px 8px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
};

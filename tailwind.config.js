/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./prod/*.html', './prod/pages/*.html', './prod/scripts/*.js'],
  theme: {
    screens: {
      xxs: '375px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xlg: '1440px',
    },
    extend: {
      colors: {
        light: '#f5f6f8',
        lightAccents: '#f0f1f2',
        lightText: '#1e293b',
        brown: '#875244',
        dark: '#475760',
        darkAccents: '#3a454c',
        darkText: '#cbe5e5',
      },
      objectPosition: {
        'center-bottom': 'center bottom',
      },
    },
  },
  plugins: [],
};

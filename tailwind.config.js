/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'contributor': '5px 5px 0px -2px rgba(0,0,0,1), 10px 10px 6px -4px rgba(155,155,155,1)'
      },
      backgroundImage: {},
      colors: {
        "ACMPrimary": "#D90000",
        "ACMDARK": "#242526",
        "ACMLIGHT": "#E6AF2E",
        "ACMBLUE": "#34A3D9",
        "SHOPTEXTSHADOW": "rgba(0, 0, 0, 0.25)",
        "HEROSHADOW": "rgba(255, 255, 255, 0.50)"
      },
      textShadow: {
        hero: '3px 6px 4px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      animation:{
        typewriter: 'typewriter 2s steps(44) 1s 1 normal both, blinkTextCursor 500ms steps(44) 5 normal',
        dropTop: 'dropTop 0.2s ease-in',
        slideIn: 'slideIn 0.3s ease-out',
        loading: 'loading 2s infinite ease-in-out'
      },
      keyframes:{
        dropTop:{
            '0%': {transform: 'translate(50%,50%)', opacity:'0',scale:'0.5' },
            '100%': {transform:'translate(0%,0%)',opacity:'1',scale:'1'}
        },
        slideIn:{
          '0%':{transform:'skewX(53deg) translateX(500px)',opacity:'0'},
          '100%':{transform:'skewX(0deg)', opacity:'1'}
        },
        loading:{
          '50%':{opacity:'0',scale:'0.7',transform:'translateY(10px)'}
        },
        typewriter: {
          from: {
            width: '0',
          },
          to: {
            width: '100%',
          },
        },
        blinkTextCursor: {
          from: {
            borderColor: 'transparent',
          },
          to: {
            borderColor: 'white',
          },
          '50%': {
            borderColor: 'white',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

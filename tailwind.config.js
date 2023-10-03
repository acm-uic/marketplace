/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "ACMPrimary": "#D90000",
        "ACMDARK": "#242526",
        "ACMLIGHT": "#E6AF2E",
        "ACMBLUE": "#34A3D9",
        "SHOPTEXTSHADOW": "rgba(217, 0, 0, 0.25)",
        "HEROSHADOW": "rgba(255, 255, 255, 0.50)"
      },
      textShadow: {
        hero: '3px 6px 4px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
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

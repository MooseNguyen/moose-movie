/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      fontFamily: {
        netflix: ['Netflix'],
        varsity: ['Varsity']
      },
      colors: {
        mainOrange: '#f78c1f',
        secondColor: '#181b1f',
        line: '74747fa0'
      },
      borderRadius: {
        main: '20px'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        },
        '.container-fluid': {
          maxWidth: theme('columns.2xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.7'),
          paddingRight: theme('spacing.7')
        }
      })
    })
  ]
}

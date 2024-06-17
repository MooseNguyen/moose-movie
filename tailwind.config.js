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
        gray: '#aaa',
        line: '#74747fa0'
      },
      borderRadius: {
        main: '20px'
      },
      boxShadow: {
        poster: '0px 0px 27px 0px #000000',
        main: '0px 0px 27px 0px #f78c1f'
      },
      transitionDuration: {
        main: '500ms'
      },
      keyframes: {
        flicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            textShadow:
              '0 0 4px #f78c1f, 0 0 11px #f78c1f, 0 0 19px #f78c1f, 0 0 40px #f78c1f, 0 0 80px #f78c1f, 0 0 90px #f78c1f, 0 0 100px #f78c1f, 0 0 150px #f78c1f',
            animation: 'flicker 1.5s infinite alternate'
          },
          '20%, 24%, 55%': { textShadow: 'none' }
        }
      },
      animation: {
        flicker: 'flicker 1.5s infinite alternate'
      }
    },
    textShadow: {
      flicker:
        '0 0 4px #f78c1f, 0 0 11px #f78c1f, 0 0 19px #f78c1f, 0 0 40px #f78c1f, 0 0 80px #f78c1f, 0 0 90px #f78c1f, 0 0 100px #f78c1f, 0 0 150px #f78c1f'
    }
  },
  plugins: [
    plugin(function ({ addComponents, matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value
          })
        },
        {
          values: theme('textShadow')
        }
      )
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        },
        '.container-fluid': {
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.8'),
          paddingRight: theme('spacing.8')
        },
        '.hero-visible': {
          visible: 'visible',
          opacity: 1,
          pointerEvent: 'auto',
          transform: 'translateY(0%)',
          transition: '0.5s'
        },
        '.hero-invisible': {
          visible: 'invisible',
          opacity: 0,
          pointerEvent: 'none',
          transform: 'translateY(-100%)',
          transition: '0.5s'
        },
        '.button-hero': {
          padding: '0.75rem 2.5rem',
          backgroundColor: '#181b1f',
          textTransform: 'uppercase',
          transition: '0.3s'
        },
        '.button-hero-hover': {
          border: '4px solid #f78c1f',
          color: '#f78c1f',
          transition: '0.3s',
          boxShadow: '0px 0px 27px 0px #f78c1f'
        }
      })
    })
  ]
}

/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{ts,tsx}'
  ],
  presets: [],
  darkMode: 'media', // or 'class'
  important: true,
  theme: {
    ...defaultTheme,
    extend: {
      screens: {
        'mobile': { max: '767px' },                 // * => @media (max-width: 767px) { ... }
        'tablet': { min: '768px', max: '1023px' },  // * => @media (min-width: 768px && max-width: 1023px) { ... }
        'laptop': '1024px',                         // * => @media (min-width: 1024px) { ... }
        'desktop': '1280px',                        // * => @media (min-width: 1280px) { ... }
        'desktop-xl': '1600px',                     // * => @media (min-width: 1600px) { ... }
      },
      colors: {
        // Primary color
        'space-blue': '#181c23',
        'toy-red': '#e73439',
        // Secondary color
        'lapis-blue': '#1762c1',
        'soft-lapis-blue': '#e5f0fc',
        // Neutral color
        'onyx-gray': '#3b4050',
        'iron-gray': '#626672',
        'surface-gray': '#83899b',
        'shark-gray': '#a3a8af',
        'smoke-gray': '#b5b9c3',
        'dolphin-gray': '#c3c9d1',
        'jade-gray': '#d7dbe0',
        'glory-gray': '#e5e8ec',
        'wolf-gray': '#e5e8ec',
        'bright-gray': '#f8f9fa',
      },
      borderRadius: {
        '4xl': '30px',
      },
      boxShadow: {
        ...defaultTheme.boxShadow,
        round: '0 0 4px 4px rgb(0 0 0 / 8%)',
        t: '0 -4px 4px 0 rgb(0 0 0 / 8%)',
        tr: '4px -4px 4px 0 rgb(0 0 0 / 8%)',
        b: '0 4px 4px 0 rgb(0 0 0 / 8%)',
        l: '-4px 0 4px 0 rgb(0 0 0 / 8%)',
        r: '4px 0 4px 0 rgb(0 0 0 / 8%)',
        around: '4px 4px 4px 4px rgb(0 0 0 / 8%)',
      },
      gridTemplateColumns: {
        '30': 'repeat(30, minmax(0, 1fr))',
        '32': 'repeat(32, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-30': 'span 30 / span 30',
        'span-32': 'span 32 / span 32',
      },
      gridColumnStart: {
        '30': '30',
        '32': '32',
      },
      gridColumnEnd: {
        '30': '30',
        '32': '32',
      },
      gridRowStart: {
        '7': '7',
        '16': '16',
        '18': '18',
      },
      gridRowEnd: {
        '7': '7',
        '16': '16',
        '18': '18',
      },
    },
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled',
  ],
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.grid-self-center': {
          'align-self': 'center',
          'justify-self': 'center',
        },
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      })
    })
  ],
}

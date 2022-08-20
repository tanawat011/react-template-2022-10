/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{ts,tsx}'
  ],
  presets: [],
  darkMode: 'media', // or 'class'
  theme: {
    ...defaultTheme,
    extend: {
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
      }
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
  plugins: [],
}

import React from 'react'

import { themes } from '@storybook/theming'

import { useDarkMode } from 'storybook-dark-mode'

import { DocsContainer } from './DocsContainer'

import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css'
import 'tailwindcss/tailwind.css'
import { theme } from 'twin.macro'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'dark',
  },
  docs: {
    theme: { ...themes.dark }
  },
}
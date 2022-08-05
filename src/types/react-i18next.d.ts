/* eslint-disable @typescript-eslint/no-empty-interface */
// import the original type declarations
import 'react-i18next'
// import all namespaces (for the default language, only)
import { defaultNs, resources } from '../locales/i18n'

// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  type DefaultResources = typeof resources['en']
  // and extend them!
  interface Resources extends DefaultResources {}
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: typeof defaultNs
    // custom resources type
    resources: typeof resources['en']
  }
}

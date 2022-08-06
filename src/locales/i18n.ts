import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from './en/common.json'
import thCommon from './th/common.json'

import { LANG } from 'constants/language'
import { isDevelopmentMode } from 'utils/envMode'

export const defaultNs = ['common']
export const resources = {
  en: {
    common: enCommon,
  },
  th: {
    common: thCommon,
  },
}

export const setupLocales = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      ns: defaultNs,
      lng: LANG.EN, // if you're using a language detector, do not define the lng option
      fallbackLng: LANG.EN,
      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
      debug: isDevelopmentMode(),
    })

  i18n.languages = [LANG.EN, LANG.TH]
}

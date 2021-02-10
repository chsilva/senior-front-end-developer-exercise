import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import fr from './fr.json'

type Languages = 'en' | 'fr'

function setupI18n(): void {
  let lng = window.localStorage.getItem('lng')

  if (!lng) {
    lng = navigator.language || 'en'
    window.localStorage.setItem('lng', lng)
  }

  i18n.use(initReactI18next).init({
    resources: {
      en,
      fr,
    },
    lng,
    fallbackLng: 'en',
  })
}

function changeLanguage(lng: Languages): void {
  i18n.changeLanguage(lng)
  window.localStorage.setItem('lng', lng)
}

export { changeLanguage }
export default setupI18n

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const en = require('./en');

export default i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: ['en'],
  supportedLngs: ['en'],
  resources: { en: en },
  debug: true,
  interpolation: {
    escapeValue: false
  }
});

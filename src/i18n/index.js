import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

const config = {
  resources,
  lng: localStorage.getItem('lenguage')
    ? localStorage.getItem('lenguage')
    : navigator.language.split('-')[0],
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(initReactI18next).init(config);

export default i18n;

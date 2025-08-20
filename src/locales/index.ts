import i18n from 'i18next';

import en from './en';

i18n.init({
  resources: {
    en: {
      translation: { ...en },
    },
  },
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  ns: ['translation'],
  defaultNS: 'translation',
});

export default i18n;

import { createI18n } from 'vue-i18n';
import esp from './esp.json';
import eng from './eng.json';

const i18n = createI18n({
  locale: 'esp',
  fallbackLocale: 'eng',
  messages: {
    esp,
    eng,
  },
});

export default i18n;
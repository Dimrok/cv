import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import enMessages, { type MessageSchema } from './localization/en-EN';
import frMessages from './localization/fr-FR';

const i18n = createI18n<[MessageSchema], 'en-GB' | 'fr-FR'>({
  locale: 'en-GB',
  fallbackLocale: 'fr-FR',
  messages: {
    'en-GB': enMessages,
    'fr-FR': frMessages
  },
  availableLocales: ['en', 'fr'],

})

createApp(App).use(router).use(i18n).mount('#app')

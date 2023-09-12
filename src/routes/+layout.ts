
export function load({ url }): { url: string } {
  return {
    url: url.pathname,
  };
}


// i18n
// src/i18n.js
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('../i18n/en.json'));
register('es', () => import('../i18n/es.json'));
// en, en-US and pt are not available yet

init({
  fallbackLocale: 'es'
});
// starts loading 'en-US' and 'en'
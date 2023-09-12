import { writable } from 'svelte/store';

export const enum LangEnum {
    ENGLISH = 'en',
    SPANISH = 'es',
}

const storedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : LangEnum.ENGLISH;
const lang = writable(storedLang || LangEnum.ENGLISH);

lang.subscribe(value => {
    console.log('lang', value);
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', value);
  }
});



export default lang;

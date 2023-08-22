import { writable } from 'svelte/store';

export const enum ThemeEnum {
    DARK = 'Dark',
    LIGHT = 'light',
}

const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : ThemeEnum.DARK;
const theme = writable(storedTheme || ThemeEnum.DARK);

theme.subscribe(value => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', value);
  }
});

export default theme;

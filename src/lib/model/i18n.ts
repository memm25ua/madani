export interface ILang {
  code: string;
  name: string;
  flag: string;
}

export const langs: ILang[] = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w80/gb.png" },
  { code: "es", name: "Español", flag: "https://flagcdn.com/w80/es.png" },
];

export const DefaultLang = langs[0];

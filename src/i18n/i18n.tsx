export type Translations = {
  [key: string]: string;
}

interface TranslationSingleton {
  entries: Translations;
  initialized: boolean;
  init(translations: Translations): void;
}

export const translationSingleton: TranslationSingleton = {
  entries: {},
  initialized: false,
  init(translations: Translations) {
    this.entries = translations;
    this.initialized = true;
  }
};

export const i18n = (key: string, ...replacements: string[]): string => {
  let value = translationSingleton.entries[key];
  if (replacements.length) {
    let i = 0;
    const replaceFn = () => replacements[i++];
    value = value.replace(/{(.*?)}/gim, replaceFn);
  }
  return value;
};
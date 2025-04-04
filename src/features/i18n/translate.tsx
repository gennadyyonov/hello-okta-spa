import { Translations } from './index';

export const translate = (key: string, entries?: Translations, ...replacements: string[]): string => {
  if (!entries) {
    return key as string;
  }
  const value = entries[key] || (key as string);
  if (replacements && replacements.length && replacements.length > 0) {
    let i = 0;
    const replaceFn = () => replacements[i++];
    return value.replace(/{(.*?)}/gim, replaceFn);
  }
  return value;
};

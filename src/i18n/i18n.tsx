import {store} from '../App/store';
import {Langs} from '../reducers';

export const i18n = (key: string, ...replacements: string[]): string => {
  const langs = store.getState().translation.entries;
  return translate(langs, key, ...replacements);
};

export const translate = (langs: Langs, key: string, ...replacements: string[]) => {
  let  value = langs[key] ? langs[key] : key;
  if (replacements.length) {
    let i = 0;
    const replaceFn = () => replacements[i++];
    value = value.replace(/{(.*?)}/gim, replaceFn);
  }
  return value;
};
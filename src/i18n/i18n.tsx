import {store} from '../App/store';
import {Langs} from '../reducers';

export const i18n = (key: string, index: number = 0, ...replacements: string[]): string => {
  const langs = store.getState().translation.entries;
  return translate(langs, key, index, ...replacements);
};

export const translate = (langs: Langs, key: string, index: number = 0, ...replacements: string[]) => {
  const values = langs[key];
  let value = values ? values[index] : key;
  if (replacements.length) {
    let i = 0;
    const replaceFn = () => replacements[i++];
    value = value.replace(/{(.*?)}/gim, replaceFn);
  }
  return value;
};
import {Translations} from '../i18n/i18n';
import { TranslationsMapEntries } from './fetchTranslations';

export const parseTranslations = (translationEntries: TranslationsMapEntries[]): Translations => {
  const result: Partial<Translations> = {};
  translationEntries.map(({ key, value }) => result[key] = value);
  return result as Translations;
};

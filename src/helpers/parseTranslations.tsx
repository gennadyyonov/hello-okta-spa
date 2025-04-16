import { TranslationsMapEntries } from '../api/getTranslationMap';
import { Translations } from '../features/i18n';

export const parseTranslations = (translationEntries: TranslationsMapEntries[]): Translations => {
  const result: Partial<Translations> = {};
  translationEntries.map(({ key, value }) => (result[key] = value));
  return result as Translations;
};

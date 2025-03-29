import { client } from '../graphql/Client';
import { translationMap } from '../graphql/queries/translationMap';
import { translationSingleton } from '../i18n/i18n';
import { parseTranslations } from './parseTranslations';

interface InitTranslations {
  translationMap: TranslationsMap;
}

export interface TranslationsMapEntries {
  key: string;
  value: string;
}

export interface TranslationsMap {
  entries: TranslationsMapEntries[];
}

export const initTranslations = async () => {
  if (translationSingleton.initialized) {
    return;
  }
  const {
    data: {
      translationMap: { entries },
    },
  } = await client.query<InitTranslations>({
    query: translationMap,
  });
  translationSingleton.init(parseTranslations(entries));
};

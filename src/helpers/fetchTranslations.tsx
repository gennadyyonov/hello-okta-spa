import { client } from 'graphql/Client';
import { translationMap } from 'graphql/queries/translationMap';
import { parseTranslations } from 'helpers/parseTranslations';
import {translationSingleton} from 'i18n/i18n';

interface FetchTranslations {
  translationMap: TranslationsMap;
}

export interface TranslationsMapEntries {
  key: string;
  value: string;
}

export interface TranslationsMap {
  entries: TranslationsMapEntries[];
}

export const fetchTranslations = () => {
  if (translationSingleton.initialized) {
    return;
  }
  client.query<FetchTranslations>({
    query: translationMap,
  }).then(response => {
    const { data: { translationMap : { entries } } } = response;
    translationSingleton.init(parseTranslations(entries));
  });
};

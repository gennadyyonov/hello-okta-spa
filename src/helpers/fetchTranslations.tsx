import {client} from 'graphql/Client';
import {translationMap} from 'graphql/queries/translationMap';
import {parseTranslations} from 'helpers/parseTranslations';
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

export const fetchTranslations = async () => {
  if (translationSingleton.initialized) {
    return;
  }
  const {data: {translationMap: {entries}}} = await client.query<FetchTranslations>({
    query: translationMap,
  });
  translationSingleton.init(parseTranslations(entries));
};

import CsrfService from '../services/CsrfService';

export const translationMapUrl = '/bff/translationmap';

export interface TranslationsMapEntries {
  key: string;
  value: string;
}

export interface TranslationsMap {
  locale: string;
  entries: TranslationsMapEntries[];
}

export const getTranslationMap = async (): Promise<TranslationsMap> => {
  const headers = { 'content-type': 'application/json' };
  CsrfService.addCsrfToken(headers);
  const response = await fetch(translationMapUrl, { headers });
  return response.json();
};

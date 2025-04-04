import { useCallback } from 'react';

import { useAppSelector } from '../../App/hooks';
import { translate } from './translate';
import { selectTranslationEntries } from './selectTranslationEntries';

export const useI18n = () => {
  const translationEntries = useAppSelector(selectTranslationEntries);

  const i18n = useCallback(
    (key: string, ...replacements: string[]): string => translate(key, translationEntries, ...replacements),
    [translationEntries],
  );

  return { i18n };
};

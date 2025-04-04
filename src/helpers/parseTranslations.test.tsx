import { parseTranslations } from './parseTranslations';
import { TranslationsMapEntries } from '../api/getTranslationMap';

describe('parseTranslations', () => {
  it('should return translations', () => {
    const translationEntries: TranslationsMapEntries[] = [
      {
        key: 'home_button_ping',
        value: 'Ping',
      },
      {
        key: 'button_logout',
        value: 'Logout',
      },
    ];

    const actual = parseTranslations(translationEntries);

    expect(actual).toStrictEqual({
      home_button_ping: 'Ping',
      button_logout: 'Logout',
    });
  });
});

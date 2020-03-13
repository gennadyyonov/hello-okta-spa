import {translate} from './i18n';

const langs = {
  "key1": ["value1"],
  "key2": ["value2 {1}"],
  "key3": ["{key}: {value}"],
  "key4": [
    "value41",
    "value42",
    "value43"
  ],
  "key5": [
    "key51 {value51}.",
    "key52 {value52}.",
    "key53",
    "key54",
    "key55"
  ]
};

describe('translate', () => {
  it('should get correct translation', () => {
    expect(translate(langs, 'key1')).toEqual('value1');
  });

  it('should replace placeholder with passed value', () => {
    expect(translate(langs, 'key2', 0, '123')).toEqual('value2 123');
  });

  it('should replace two placeholders with passed values', () => {
    expect(translate(langs, 'key3', 0, 'foo', 'bar')).toEqual('foo: bar');
  });

  it('should get correct value from array', () => {
    expect(translate(langs, 'key4', 1)).toEqual('value42');
  });

  it('should get correct value from array with passed value', () => {
    expect(translate(langs, 'key5', 1, 'Dex Morgan'))
      .toEqual('key52 Dex Morgan.');
  });
});

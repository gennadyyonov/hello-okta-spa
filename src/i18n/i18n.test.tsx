import {translate} from './i18n';

const langs = {
  "key1": "value1",
  "key2": "value2 {1}",
  "key3": "{key}: {value}",
};

describe('translate', () => {
  it('should get correct translation', () => {
    expect(translate(langs, 'key1')).toEqual('value1');
  });

  it('should replace placeholder with passed value', () => {
    expect(translate(langs, 'key2', '123')).toEqual('value2 123');
  });

  it('should replace two placeholders with passed values', () => {
    expect(translate(langs, 'key3', 'foo', 'bar')).toEqual('foo: bar');
  });
});

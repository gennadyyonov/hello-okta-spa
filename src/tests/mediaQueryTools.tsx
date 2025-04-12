import mediaQuery from 'css-mediaquery';

export const defineWindowMatchMedia = (width: number = 0) => {
  vi.stubGlobal(
    'matchMedia',
    (query: string): MediaQueryList => ({
      media: query,
      matches: query === '(pointer: fine)' || (width > 0 && mediaQuery.match(query, { width })),
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(() => false),
    }),
  );
};

export const defineDesktopSizeWindowMatchMedia = () => {
  defineWindowMatchMedia(1200);
};

export const defineMobileSizeWindowMatchMedia = () => {
  defineWindowMatchMedia(375);
};

export const clearWindowMatchMedia = () => {
  // @ts-expect-error @typescript-eslint/ban-ts-comment
  delete window.matchMedia;
};

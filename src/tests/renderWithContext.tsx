import { render } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { setupStore } from '../App/store';
import { ExtendedRenderOptions } from './index';
import { MemoryRouter } from 'react-router';

export const renderWithContext = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    initialEntries = ['/'],
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): React.JSX.Element => (
    <MemoryRouter initialEntries={initialEntries}>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

import '../../tests/oktaMock';
import { renderWithContext } from '../../tests/renderWithContext';
import { ErrorPage } from './ErrorPage';
import { expectUnauthorizedErrorPage } from '../../tests/testUtils';
import {
  clearWindowMatchMedia,
  defineDesktopSizeWindowMatchMedia,
  defineMobileSizeWindowMatchMedia,
} from '../../tests/mediaQueryTools';
import React from 'react';
import { testInitialState } from '../../tests';

describe('ErrorPage', () => {
  const prepareState = () => ({
    ...testInitialState,
    i18n: {
      ...testInitialState.i18n,
      entries: {
        'HO.ER.UNAUTHORIZED.TITLE': 'Unauthorized Access',
        'HO.ER.UNAUTHORIZED.TEXT':
          'You are not authenticated or your session has expired. Please log in again to continue.',
        button_go_home: 'Go Home',
      },
    },
  });

  afterEach(() => {
    clearWindowMatchMedia();
  });

  it('should render on desktop', async () => {
    defineDesktopSizeWindowMatchMedia();

    renderWithContext(<ErrorPage id="HO.ER.UNAUTHORIZED" />, { preloadedState: prepareState() });

    await expectUnauthorizedErrorPage();
  });

  it('should render on mobile', async () => {
    defineMobileSizeWindowMatchMedia();

    renderWithContext(<ErrorPage id="HO.ER.UNAUTHORIZED" />, { preloadedState: prepareState() });

    await expectUnauthorizedErrorPage();
  });
});

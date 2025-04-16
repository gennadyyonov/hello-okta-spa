import '../tests/oktaMock';

import { testInitialState } from '../tests';
import {
  clearWindowMatchMedia,
  defineDesktopSizeWindowMatchMedia,
  defineMobileSizeWindowMatchMedia,
} from '../tests/mediaQueryTools';
import { renderWithContext } from '../tests/renderWithContext';
import { expectAppHeader, expectHome } from '../tests/testUtils';
import { AppRoutes } from './AppRoutes';

describe('AppRoutes', () => {
  afterEach(() => {
    clearWindowMatchMedia();
  });

  it('should render on desktop', async () => {
    defineDesktopSizeWindowMatchMedia();

    renderWithContext(<AppRoutes />, { preloadedState: testInitialState });

    await expectAppHeader();
    await expectHome();
  });

  it('should render on mobile', async () => {
    defineMobileSizeWindowMatchMedia();

    renderWithContext(<AppRoutes />, { preloadedState: testInitialState });

    await expectAppHeader();
    await expectHome();
  });
});

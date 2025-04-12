import '../tests/oktaMock';
import { renderWithContext } from '../tests/renderWithContext';
import { testInitialState } from '../tests';
import { AppRoutes } from './AppRoutes';
import { expectAppHeader, expectHome } from '../tests/testUtils';
import {
  clearWindowMatchMedia,
  defineDesktopSizeWindowMatchMedia,
  defineMobileSizeWindowMatchMedia,
} from '../tests/mediaQueryTools';

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

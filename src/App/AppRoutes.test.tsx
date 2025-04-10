import '../tests/oktaMock';
import { renderWithContext } from '../tests/renderWithContext';
import { testInitialState } from '../tests';
import { AppRoutes } from './AppRoutes';
import { expectAppHeader, expectHome } from '../tests/testUtils';

describe('AppRoutes', () => {
  it('should render', async () => {
    renderWithContext(<AppRoutes />, { preloadedState: testInitialState });

    await expectAppHeader();
    await expectHome();
  });
});

import { renderWithContext } from '../../tests/renderWithContext';
import { AppHeader } from './AppHeader';
import { testInitialState } from '../../tests';
import { RootState } from '../../App/store';
import { expectAppHeader } from '../../tests/testUtils';

describe('AppHeader', () => {
  it('should render', async () => {
    const state: RootState = {
      ...testInitialState,
    };

    renderWithContext(<AppHeader />, { preloadedState: state });

    await expectAppHeader();
  });
});

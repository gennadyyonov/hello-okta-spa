import { RootState } from '../../App/store';
import { testInitialState } from '../../tests';
import { renderWithContext } from '../../tests/renderWithContext';
import { expectAppHeader } from '../../tests/testUtils';
import { AppHeader } from './AppHeader';

describe('AppHeader', () => {
  it('should render', async () => {
    const state: RootState = {
      ...testInitialState,
    };

    renderWithContext(<AppHeader />, { preloadedState: state });

    await expectAppHeader();
  });
});

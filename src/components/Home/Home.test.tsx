import { screen } from '@testing-library/react';
import { renderWithContext } from '../../tests/renderWithContext';
import { Home } from './Home';
import { testInitialState } from '../../tests';
import { userEvent } from '@testing-library/user-event';
import { expectHome } from '../../tests/testUtils';

describe('Home', () => {
  const prepareState = () => ({
    ...testInitialState,
    i18n: {
      ...testInitialState.i18n,
      entries: {
        home_button_ping: 'Ping',
        logout_hint: "Pressing 'Logout' button will sign current user out",
        button_logout: 'Logout',
      },
    },
  });

  it('should render', async () => {
    renderWithContext(<Home />, { preloadedState: prepareState() });

    await expectHome();
  });

  it('should handle ping', async () => {
    renderWithContext(<Home />, { preloadedState: prepareState() });

    const pingButton = await screen.findByRole('button', { name: 'Ping' });
    expect(pingButton).toBeInTheDocument();

    await userEvent.click(pingButton);

    expect(
      await screen.findByText(
        "If you play Pink Floyd's 'Dark Side Of The Moon' while watching Delta Force 2, Chuck Norris' boot heel will sync up with your face.",
      ),
    ).toBeInTheDocument();
  });
});

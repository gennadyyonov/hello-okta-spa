import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { AppContextProvider } from './AppContextProvider';
import { useAppContext } from './useAppContext';

const STORAGE_KEY = 'hello-okta:ui-context';

describe('AppContextProvider', () => {
  const TestComponent = () => {
    const { originalUri, setOriginalUri } = useAppContext();
    return (
      <div>
        <span data-testid="uri">{originalUri}</span>
        <button onClick={() => setOriginalUri('/new-uri')}>Set URI</button>
      </div>
    );
  };

  beforeEach(() => {
    sessionStorage.clear();
  });

  it('provides defaultUri when no sessionStorage is present', () => {
    render(
      <AppContextProvider>
        <TestComponent />
      </AppContextProvider>,
    );

    expect(screen.getByTestId('uri')).toHaveTextContent('/');
  });

  it('falls back to default state if sessionStorage has invalid JSON', () => {
    sessionStorage.setItem(STORAGE_KEY, 'INVALID_JSON');

    render(
      <AppContextProvider>
        <TestComponent />
      </AppContextProvider>,
    );

    expect(screen.getByTestId('uri')).toHaveTextContent('/');

    const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) as string);

    expect(stored.originalUri).toBe('/');
  });

  it('restores originalUri from sessionStorage', () => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ originalUri: '/stored-uri' }));

    render(
      <AppContextProvider>
        <TestComponent />
      </AppContextProvider>,
    );

    expect(screen.getByTestId('uri')).toHaveTextContent('/stored-uri');
  });

  it('updates originalUri and saves to sessionStorage', async () => {
    render(
      <AppContextProvider>
        <TestComponent />
      </AppContextProvider>,
    );

    const button = screen.getByRole('button', { name: 'Set URI' });
    await userEvent.click(button);

    expect(screen.getByTestId('uri')).toHaveTextContent('/new-uri');
    const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) as string);
    expect(stored.originalUri).toBe('/new-uri');
  });

  it('throws error when useAppContext is used outside provider', () => {
    const ConsoleErrorMock = vi.spyOn(console, 'error').mockImplementation(() => {}); // suppress React error output

    const BrokenComponent = () => {
      useAppContext();
      return null;
    };

    expect(() => render(<BrokenComponent />)).toThrow('useAppContext must be used within AppContextProvider');

    ConsoleErrorMock.mockRestore();
  });
});

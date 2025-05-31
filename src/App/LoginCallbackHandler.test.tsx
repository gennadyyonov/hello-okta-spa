import '../tests/oktaMock';

import { useOktaAuth } from '@okta/okta-react';
import { IOktaContext } from '@okta/okta-react/bundles/types/OktaContext';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { useNavigate } from 'react-router';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

import { AppContextProps } from './AppContext';
import { LoginCallbackHandler } from './LoginCallbackHandler';
import { useAppContext } from './useAppContext';

vi.mock('./useAppContext', () => ({
  useAppContext: vi.fn(),
}));

vi.mock('react-router', async () => {
  const actual = await vi.importActual<typeof import('react-router')>('react-router');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('LoginCallbackHandler', () => {
  it('renders LoginCallback if user is not authenticated', () => {
    vi.mocked(useOktaAuth).mockReturnValue({ authState: { isAuthenticated: false } } as IOktaContext);
    vi.mocked(useAppContext).mockReturnValue({ originalUri: '/' } as AppContextProps);

    render(
      <MemoryRouter>
        <LoginCallbackHandler />
      </MemoryRouter>,
    );

    expect(screen.getByText('LoginCallback Component')).toBeInTheDocument();
  });

  it('navigates to originalUri if authenticated', async () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    vi.mocked(useOktaAuth).mockReturnValue({ authState: { isAuthenticated: true } } as IOktaContext);
    vi.mocked(useAppContext).mockReturnValue({ originalUri: '/dashboard' } as AppContextProps);

    render(
      <MemoryRouter>
        <LoginCallbackHandler />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard', { replace: true });
    });
  });
});

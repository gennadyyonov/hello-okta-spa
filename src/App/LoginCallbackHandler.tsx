import { LoginCallback, useOktaAuth } from '@okta/okta-react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useAppContext } from './useAppContext';

export const LoginCallbackHandler = () => {
  const { authState } = useOktaAuth();
  const { originalUri } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState?.isAuthenticated) {
      console.debug(`[LoginCallbackHandler] Authenticated. Navigating to original URI: ${originalUri}`);
      navigate(originalUri, { replace: true });
    }
  }, [authState, originalUri, navigate]);

  return authState?.isAuthenticated ? null : <LoginCallback />;
};

import React, { ReactNode, useCallback, useMemo, useState } from 'react';

import { AppContext, AppContextState } from './AppContext';

const APP_CONTEXT_KEY = 'hello-okta:ui-context';

interface AppContextProviderProps {
  defaultUri?: string;
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ defaultUri = '/', children }) => {
  const createInitialState = (): AppContextState => {
    const initialState = { originalUri: defaultUri };
    sessionStorage.setItem(APP_CONTEXT_KEY, JSON.stringify(initialState));
    return initialState;
  };

  const [state, setState] = useState<AppContextState>(() => {
    const stored = sessionStorage.getItem(APP_CONTEXT_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as AppContextState;
      } catch {
        return createInitialState();
      }
    } else {
      return createInitialState();
    }
  });

  const setOriginalUri = useCallback((uri: string) => {
    setState((prevState) => {
      const updatedState = { ...prevState, originalUri: uri };
      sessionStorage.setItem(APP_CONTEXT_KEY, JSON.stringify(updatedState));
      return updatedState;
    });
  }, []);

  const contextValue = useMemo(() => ({ ...state, setOriginalUri }), [state, setOriginalUri]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

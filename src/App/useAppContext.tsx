import { useContext } from 'react';

import { AppContext, AppContextProps } from './AppContext';

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }
  return context;
};

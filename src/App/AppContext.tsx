import { createContext } from 'react';

export interface AppContextState {
  originalUri: string;
}

export interface AppContextProps extends AppContextState {
  setOriginalUri: (uri: string) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

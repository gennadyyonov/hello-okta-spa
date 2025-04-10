import { RenderOptions } from '@testing-library/react';

import { AppStore, RootState } from '../App/store';
import { initialState as i18nInitialState } from '../features/i18n';
import { initialMessageState } from '../features/message';
import { initialUserInfoState } from '../features/userInfo';
import * as H from 'history';

export const testInitialState: RootState = {
  i18n: i18nInitialState,
  message: initialMessageState,
  userInfo: initialUserInfoState,
};

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
export interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
  initialEntries?: H.LocationDescriptor[];
}

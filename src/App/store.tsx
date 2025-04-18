import { combineReducers, configureStore } from '@reduxjs/toolkit';

import i18n from '../features/i18n/i18nSlice';
import message from '../features/message/messageSlice';
import userInfo from '../features/userInfo/userInfoSlice';

const rootReducer = combineReducers({
  i18n,
  message,
  userInfo,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];

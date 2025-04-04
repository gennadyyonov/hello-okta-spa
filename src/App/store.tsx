import { combineReducers, configureStore } from '@reduxjs/toolkit';
import i18n from '../features/i18n/i18nSlice';
import message from '../features/message/messageSlice';
import userInfo from '../features/userInfo/userInfoSlice';

const rootReducer = combineReducers({
  i18n,
  message,
  userInfo,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

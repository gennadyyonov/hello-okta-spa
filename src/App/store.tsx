import { combineReducers, configureStore } from '@reduxjs/toolkit';
import message from '../features/message/messageSlice';
import userInfo from '../features/userInfo/userInfoSlice';

const rootReducer = combineReducers({
  message,
  userInfo,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

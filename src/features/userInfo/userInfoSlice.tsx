import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { client } from '../../graphql/Client';
import { me } from '../../graphql/queries/me';
import { initialUserInfoState, UserInfoState } from '.';

export const meThunk = createAsyncThunk<UserInfoState | undefined, void>('userInfo/me', async () => {
  const { data } = await client.query<{ me: UserInfoState }>({ query: me });
  return data?.me;
});

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: initialUserInfoState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(meThunk.fulfilled, (state, action) => {
      const payload = action.payload;
      if (payload) {
        state.userId = payload.userId;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
      }
    });
  },
});

export default userInfoSlice.reducer;

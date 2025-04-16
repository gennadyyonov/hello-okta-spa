import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { client } from '../../graphql/Client';
import { AuthType, hello } from '../../graphql/queries/hello';
import { ping } from '../../graphql/queries/ping';
import { initialMessageState, MessageState, PingState } from '.';

export const helloThunk = createAsyncThunk<MessageState, AuthType>('message/hello', async (authType) => {
  const { data } = await client.query({
    query: hello,
    variables: { authType: authType },
  });
  return data.hello;
});

export const pingThunk = createAsyncThunk<PingState, void>('message/ping', async () => {
  const { data } = await client.query({ query: ping });
  return data.ping;
});

export const messageSlice = createSlice({
  name: 'message',
  initialState: initialMessageState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(helloThunk.fulfilled, (state, action) => {
      state.text = action.payload.text;
    });
    builder.addCase(pingThunk.fulfilled, (state, action) => {
      state.text = action.payload;
    });
  },
});

export default messageSlice.reducer;

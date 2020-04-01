import {client} from 'graphql/Client';
import {AuthType, hello} from 'graphql/queries/hello';
import {ActionTypes} from './actionTypes';

export const helloThunk = (authType: AuthType) => async (dispatch): Promise<void> => {
  const {data} = await client.query({
    query: hello,
    variables: {authType: authType},
  });
  if (data) {
    dispatch({
      type: ActionTypes.HELLO_ACTION,
      payload: data.hello,
    });
  }
};
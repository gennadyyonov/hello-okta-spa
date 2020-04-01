import {client} from 'graphql/Client';
import {me} from 'graphql/queries/me';
import {ActionTypes} from './actionTypes';

export const meThunk = () => async (dispatch): Promise<void> => {
  const {data} = await client.query({query: me});
  if (data) {
    dispatch({
      type: ActionTypes.USER_INFO_ACTION,
      payload: data.me,
    });
  }
};
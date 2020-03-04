import {client} from '../graphql/Client';
import {ActionTypes} from '../constants/actionTypes';
import {me} from '../graphql/queries/me';

export const meThunk = () => async (dispatch): Promise<void> => {
  const {data} = await client.query({query: me});
  if (data) {
    dispatch({
      type: ActionTypes.USER_INFO_ACTION,
      payload: data.me,
    });
  }
};
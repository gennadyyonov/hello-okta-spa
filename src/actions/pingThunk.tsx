import {client} from '../graphql/Client';
import {ping} from '../graphql/queries/ping';
import {ActionTypes} from './actionTypes';

export const pingThunk = () => async (dispatch): Promise<void> => {
  const {data} = await client.query({query: ping});
  if (data) {
    dispatch({
      type: ActionTypes.PING_ACTION,
      payload: data.ping,
    });
  }
};

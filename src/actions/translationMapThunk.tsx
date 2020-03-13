import {client} from '../graphql/Client';
import {translationMap} from '../graphql/queries/translationMap';
import {ActionTypes} from '../constants/actionTypes';

export const translationMapThunk = () => async (dispatch): Promise<void> => {
  const {data} = await client.query({query: translationMap});
  if (data) {
    dispatch({
      type: ActionTypes.TRANSLATION_MAP_ACTION,
      payload: data.translationMap,
    });
  }
};
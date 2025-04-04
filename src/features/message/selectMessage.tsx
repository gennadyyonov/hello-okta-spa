import { RootState } from '../../App/store';

export const selectMessage = (state: RootState) => state.message;

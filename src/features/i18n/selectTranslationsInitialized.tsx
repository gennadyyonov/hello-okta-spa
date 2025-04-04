import { RootState } from '../../App/store';

export const selectTranslationsInitialized = (state: RootState) => state.i18n.initialized;

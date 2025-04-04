import { RootState } from '../../App/store';

export const selectTranslationEntries = (state: RootState) => state.i18n.entries;

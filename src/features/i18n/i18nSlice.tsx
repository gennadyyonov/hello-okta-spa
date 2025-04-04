import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '.';
import { parseTranslations } from '../../helpers/parseTranslations';
import { getTranslationMap, TranslationsMap } from '../../api/getTranslationMap';

export const getTranslationMapThunk = createAsyncThunk<TranslationsMap, void>(
  'i18n/translationmap',
  async () => await getTranslationMap(),
);

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTranslationMapThunk.fulfilled, (state, action) => {
      state.entries = parseTranslations(action.payload.entries);
      state.initialized = true;
    });
  },
});

export default i18nSlice.reducer;

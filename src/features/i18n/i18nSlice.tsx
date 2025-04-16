import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getTranslationMap, TranslationsMap } from '../../api/getTranslationMap';
import { parseTranslations } from '../../helpers/parseTranslations';
import { initialState } from '.';

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

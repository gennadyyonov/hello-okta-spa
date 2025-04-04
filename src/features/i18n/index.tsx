export type Translations = {
  [key in string]?: string;
};

export interface I18nState {
  entries?: Translations;
  initialized: boolean;
}

export const initialState: I18nState = {
  initialized: false,
};

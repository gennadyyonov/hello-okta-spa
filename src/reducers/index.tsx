export interface HomeProps {
  message: string;
}

export interface AppState extends HomeProps {
}

export const defaultState: AppState = {
  message: 'Hello, World!'
};

export const rootReducer = (state: AppState = defaultState) => state;

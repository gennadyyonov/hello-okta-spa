import {ActionTypes} from '../constants/actionTypes';

export interface Action<T> {
  type: ActionTypes;
  payload: T;
}

export interface PingAction extends Action<string> {
}

export interface UserInfoAction extends Action<UserInfoState> {
}

export interface MessageAction extends Action<MessageState> {
}

export interface TranslationAction extends Action<TranslationMap> {
}

export interface UserInfoState {
  userId?: string;
  firstName?: string;
  lastName?: string;
}

export interface MessageState {
  text?: string;
}

interface TranslationMap {
  entries: TranslationMapEntry[]
}

interface TranslationMapEntry {
  key: string
  values: string[]
}

export interface Langs {
  [key: string]: string[];
}

export interface TranslationState {
  entries: Langs;
}

export interface AppState {
  message: string;
  userInfo: UserInfoState;
  translation: TranslationState;
}

export const defaultState: AppState = {
  message: 'Loading...',
  userInfo: {},
  translation: {
    entries: {}
  }
};

const pingReducer = (state: AppState = defaultState, action: PingAction): AppState => {
  if (action.type === ActionTypes.PING_ACTION) {
    return {
      ...state,
      message: action.payload
    };
  } else {
    return state;
  }
};

const userInfoReducer = (state: AppState = defaultState, action: UserInfoAction): AppState => {
  if (action.type === ActionTypes.USER_INFO_ACTION) {
    const userInfo = action.payload;
    return {
      ...state,
      userInfo: {
        userId: userInfo.userId,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      }
    };
  } else {
    return state;
  }
};

const helloReducer = (state: AppState = defaultState, action: MessageAction): AppState => {
  if (action.type === ActionTypes.HELLO_ACTION) {
    const message = action.payload;
    const text = message.text ? message.text : state.message;
    return {
      ...state,
      message: text
    }
  } else {
    return state;
  }
};

const translationReducer = (state: AppState = defaultState, action: TranslationAction): AppState => {
  if (action.type === ActionTypes.TRANSLATION_MAP_ACTION) {
    const translationMap = action.payload;
    const entries = {};
    translationMap.entries.forEach(({ key, values }): void => {
      entries[key] = values;
    });
    return {
      ...state,
      translation: {
        entries: entries
      }
    };
  } else {
    return state;
  }
};

export const rootReducer = (state: AppState = defaultState, action): AppState => {
  const reducers = [userInfoReducer, helloReducer, pingReducer, translationReducer];
  let finalState = state;
  let i;
  for (i = 0; i < reducers.length; i++) {
    finalState = reducers[i](finalState, action);
  }
  return finalState
};

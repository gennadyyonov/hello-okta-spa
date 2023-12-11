export type PingState = string | null;

export interface MessageState {
  text?: string | null;
}

export const initialMessageState: MessageState = {
  text: null
};

import {gql} from '@apollo/client';

export const hello = gql`  
  query Hello($authType: AuthType) {
      hello(authType: $authType) {
          text
      }
  }
`;

export enum AuthType {
  USER = 'USER',
  CLIENT = 'CLIENT'
}

import gql from 'graphql-tag';

export const hello = gql`  
  query Hello($authType: AuthType) {
      hello(authType: $authType) {
          text
      }
  }
`;
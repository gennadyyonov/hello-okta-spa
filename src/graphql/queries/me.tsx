import { gql } from '@apollo/client';

export const me = gql`
  query Me {
    me {
      userId
      firstName
      lastName
      email
      roles
    }
  }
`;

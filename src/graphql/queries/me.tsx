import { gql } from '@apollo/client';

export const me = gql`
  query {
    me {
      userId
      firstName
      lastName
      email
      roles
    }
  }
`;

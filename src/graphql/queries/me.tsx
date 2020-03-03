import gql from 'graphql-tag';

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
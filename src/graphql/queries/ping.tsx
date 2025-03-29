import { gql } from '@apollo/client';

export const ping = gql`
  query {
    ping
  }
`;

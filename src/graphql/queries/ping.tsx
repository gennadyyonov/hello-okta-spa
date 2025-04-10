import { gql } from '@apollo/client';

export const ping = gql`
  query Ping {
    ping
  }
`;

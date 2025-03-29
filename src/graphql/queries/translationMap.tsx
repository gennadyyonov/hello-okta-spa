import { gql } from '@apollo/client';

export const translationMap = gql`
  query {
    translationMap {
      locale
      entries {
        key
        value
      }
    }
  }
`;

import gql from 'graphql-tag';

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
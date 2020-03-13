import gql from 'graphql-tag';

export const translationMap = gql`
    query {
        translationMap {
            entries {
                key
                values
            }
        }
    }
`;
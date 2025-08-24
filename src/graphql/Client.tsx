import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';

import { prepareHeaders } from '../helpers/prepareHeaders';

const backendGQLUri = '/bff/graphql';

const httpLink = new HttpLink({
  uri: backendGQLUri,
  credentials: 'same-origin',
});

const cache = new InMemoryCache();

const authMiddleware = new SetContextLink(({ headers }) => {
  return prepareHeaders(headers);
});

export const client = new ApolloClient({
  link: ApolloLink.from([authMiddleware, httpLink]),
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
    },
  },
});

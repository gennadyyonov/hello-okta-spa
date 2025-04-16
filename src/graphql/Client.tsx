import { ApolloClient, createHttpLink, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { prepareHeaders } from '../helpers/prepareHeaders';

const backendGQLUri = '/bff/graphql';

const httpLink = createHttpLink({
  uri: backendGQLUri,
  credentials: 'same-origin',
});

const cache = new InMemoryCache();

const authMiddleware = setContext((_, { headers }) => {
  return prepareHeaders(headers);
});

export const client = new ApolloClient({
  link: from([authMiddleware, httpLink]),
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
    },
  },
});

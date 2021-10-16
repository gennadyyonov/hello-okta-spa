import {ApolloClient, createHttpLink, from, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {Config} from "../helpers/config";
import {prepareHeaders} from '../helpers/prepareHeaders';

const backendGQLUri = Config.baseUrl + '/bff/graphql';

const httpLink = createHttpLink({
  uri: backendGQLUri,
  credentials: 'include',
});

const cache = new InMemoryCache();

const authMiddleware = setContext((_, {headers}) => {
  return prepareHeaders(headers);
});

export const client = new ApolloClient({
  link: from([authMiddleware, httpLink]),
  cache,
  connectToDevTools: true,
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
    },
  },
});

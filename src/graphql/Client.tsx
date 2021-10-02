import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {ApolloLink, concat} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';
import {Config} from "../helpers/config";
import {prepareHeaders} from '../helpers/prepareHeaders';

const backendGQLUri = Config.nodeEnv === 'production' ? '/bff/graphql' : Config.bffUrl;

const httpLink = new HttpLink({
  uri: backendGQLUri,
  credentials: 'include',
});

const cache = new InMemoryCache();

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({headers = {}}) => prepareHeaders(headers));
  return forward(operation);
});

export const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
    },
  },
});

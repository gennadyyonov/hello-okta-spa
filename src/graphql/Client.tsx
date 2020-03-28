import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {ApolloLink, concat} from 'apollo-link';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {getAccessToken} from '../App/environmentConfig';

const backendGQLUri = process.env.NODE_ENV === 'production' ? '/bff/graphql' : process.env.REACT_APP_BFF;

const httpLink = new HttpLink({
  uri: backendGQLUri,
  credentials: 'include',
});

const cache = new InMemoryCache();

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = getAccessToken();
  if (token) {
    operation.setContext(({headers = {}}) => ({
      headers: {
        ...headers,
        authorization: `${token.tokenType} ${token.accessToken}`,
      }
    }));
  }
  return forward(operation);
});

export const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache,
});

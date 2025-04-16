import { helloGraphqlHandler } from './graphql/helloGraphqlHandler';
import { meGraphqlHandler } from './graphql/meGraphqlHandler';
import { pingGraphqlHandler } from './graphql/pingGraphqlHandler';
import { csrfTokenInfoHttpHandler } from './http/csrfTokenInfoHttpHandler';
import { environmentHttpHandler } from './http/environmentHttpHandler';
import { translationMapHttpHandler } from './http/translationMapHttpHandler';

export const mswHandlers = [
  csrfTokenInfoHttpHandler(),
  environmentHttpHandler(),
  translationMapHttpHandler(),
  meGraphqlHandler(),
  helloGraphqlHandler(),
  pingGraphqlHandler(),
];

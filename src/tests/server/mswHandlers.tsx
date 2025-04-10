import { csrfTokenInfoHttpHandler } from './http/csrfTokenInfoHttpHandler';
import { environmentHttpHandler } from './http/environmentHttpHandler';
import { translationMapHttpHandler } from './http/translationMapHttpHandler';
import { meGraphqlHandler } from './graphql/meGraphqlHandler';
import { helloGraphqlHandler } from './graphql/helloGraphqlHandler';
import { pingGraphqlHandler } from './graphql/pingGraphqlHandler';

export const mswHandlers = [
  csrfTokenInfoHttpHandler(),
  environmentHttpHandler(),
  translationMapHttpHandler(),
  meGraphqlHandler(),
  helloGraphqlHandler(),
  pingGraphqlHandler(),
];

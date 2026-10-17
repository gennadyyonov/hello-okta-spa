import { HttpResponse } from 'msw';

import { backend } from './graphqlLink';

export const helloGraphqlHandler = () =>
  backend.query('Hello', async ({ variables }) => {
    const { authType } = variables;
    const body = await import(`../responses/hello-${authType}.json`);
    return HttpResponse.json(body.default);
  });

import { graphql, HttpResponse } from 'msw';

export const helloGraphqlHandler = () =>
  graphql.query('Hello', async ({ variables }) => {
    const { authType } = variables;
    const body = await import(`../responses/hello-${authType}.json`);
    return HttpResponse.json(body.default);
  });

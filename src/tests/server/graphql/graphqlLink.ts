import { graphql } from 'msw/graphql';

import { backendGQLUri } from '../../../graphql/Client';
import { getFullUrl } from '../index';

export const backend = graphql.link(getFullUrl(backendGQLUri));

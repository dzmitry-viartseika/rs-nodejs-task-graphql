import { Type } from '@fastify/type-provider-typebox';
import { GraphQLSchema } from 'graphql';

import { gqlQueries } from './queries.js';
import { gqlMutations } from './mutations.js';

export const gqlResponseSchema = Type.Partial(
  Type.Object({
    data: Type.Any(),
    errors: Type.Any(),
  }),
);

export const createGqlResponseSchema = {
  body: Type.Object(
    {
      query: Type.String(),
      variables: Type.Optional(Type.Record(Type.String(), Type.Any())),
    },
    {
      additionalProperties: false,
    },
  ),
};

export const gqlSchema: GraphQLSchema = new GraphQLSchema({
  query: gqlQueries,
  mutation: gqlMutations,
});

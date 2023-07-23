import { GraphQLObjectType } from 'graphql';

import { UserMutations } from './user/mutations.js';
import { PostMutations } from './post/mutations.js';
import { ProfileMutations } from './profile/mutations.js';

export const gqlMutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...UserMutations,
    ...PostMutations,
    ...ProfileMutations,
  },
});

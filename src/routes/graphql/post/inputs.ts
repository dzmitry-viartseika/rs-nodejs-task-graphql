import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { UUIDType } from '../types/uuid.js';

export const CreatePostInput = new GraphQLInputObjectType({
  name: 'CreatePostInput',
  fields: {
    authorId: { type: new GraphQLNonNull(UUIDType) },
    content: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
  },
});

export const ChangePostInput = new GraphQLInputObjectType({
  name: 'ChangePostInput',
  fields: {
    authorId: { type: UUIDType },
    content: { type: GraphQLString },
    title: { type: GraphQLString },
  },
});

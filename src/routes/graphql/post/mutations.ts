import { GraphQLBoolean } from 'graphql';

import { PostType } from './post-type.js';
import { UUIDType } from '../types/uuid.js';
import { ChangePostInput, CreatePostInput } from './inputs.js';
import { ContextInterface } from '../types/ContextInterface.js';

export const PostMutations = {
  createPost: {
    type: PostType,
    args: { dto: { type: CreatePostInput } },
    resolve: async (_, { dto }, { db }: ContextInterface) =>
      await db.post.create({ data: dto }),
  },

  changePost: {
    type: PostType,
    args: { id: { type: UUIDType }, dto: { type: ChangePostInput } },
    resolve: async (_, { id, dto }, { db }: ContextInterface) =>
      await db.post.update({ where: { id }, data: dto }),
  },

  deletePost: {
    type: GraphQLBoolean,
    args: { id: { type: UUIDType } },
    resolve: async (_, { id }, { db }: ContextInterface) => {
      try {
        await db.post.delete({ where: { id } });
      } catch (err) {
        return false;
      }

      return true;
    },
  },
};

import { GraphQLBoolean } from 'graphql';

import { UserType } from './user-type.js';
import { ChangeUserInput, CreateUserInput } from './inputs.js';
import { UUIDType } from '../types/uuid.js';
import { ContextInterface } from '../types/ContextInterface.js';

export const UserMutations = {
  createUser: {
    type: UserType,
    args: { dto: { type: CreateUserInput } },
    resolve: async (_, { dto }, { db }: ContextInterface) =>
      db.user.create({ data: dto }),
  },

  changeUser: {
    type: UserType,
    args: { id: { type: UUIDType }, dto: { type: ChangeUserInput } },
    resolve: async (_, { id, dto }, { db }: ContextInterface) =>
      await db.user.update({ where: { id: id }, data: dto }),
  },

  deleteUser: {
    type: GraphQLBoolean,
    args: { id: { type: UUIDType } },
    resolve: async (_, { id }, { db }: ContextInterface) => {
      try {
        await db.user.delete({ where: { id: id } });
      } catch (err) {
        return false;
      }

      return true;
    },
  },

  subscribeTo: {
    type: UserType,
    args: { userId: { type: UUIDType }, authorId: { type: UUIDType } },
    resolve: async (_, { userId, authorId }, { db }: ContextInterface) => {
      await db.subscribersOnAuthors.create({
        data: { subscriberId: userId, authorId: authorId },
      });

      return await db.user.findFirst({ where: { id: userId } });
    },
  },

  unsubscribeFrom: {
    type: GraphQLBoolean,
    args: { userId: { type: UUIDType }, authorId: { type: UUIDType } },
    resolve: async (_, { userId, authorId }, { db }: ContextInterface) => {
      try {
        await db.subscribersOnAuthors.deleteMany({
          where: { subscriberId: userId, authorId: authorId },
        });
      } catch {
        return false;
      }

      return true;
    },
  },
};

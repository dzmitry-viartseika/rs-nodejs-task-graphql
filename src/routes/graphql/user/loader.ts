import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';
import { User } from '../types/User.js';

export const createUserDataloader = (db: PrismaClient) => {
  return new DataLoader<string, User | undefined>(async (keys: readonly string[]) => {
    const result = await db.user.findMany({
      where: { id: { in: keys as string[] } },
      include: { userSubscribedTo: true, subscribedToUser: true },
    });

    const resultMap = new Map<string, User>();

    result.forEach((user) => {
      resultMap.set(user.id, user);
    });

    const sortedInKeysOrder: Array<User | undefined> = [];

    keys.forEach((key) => {
      sortedInKeysOrder.push(resultMap.get(key));
    });

    return sortedInKeysOrder;
  });
};

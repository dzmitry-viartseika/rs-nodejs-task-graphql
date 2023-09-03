import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';

import { Member } from '../types/Member.js';

export const createMemberTypeDataloader = (db: PrismaClient) => {
  return new DataLoader<string, Member | undefined>(async (keys: readonly string[]) => {
    const result = await db.memberType.findMany({
      where: { id: { in: keys as string[] | undefined } },
    });

    const resultMap = new Map<string, Member>();

    result.forEach((memberType) => {
      resultMap.set(memberType.id, memberType);
    });

    const sortedInKeysOrder: Array<Member | undefined> = [];

    keys.forEach((key) => {
      sortedInKeysOrder.push(resultMap.get(key));
    });

    return sortedInKeysOrder;
  });
};

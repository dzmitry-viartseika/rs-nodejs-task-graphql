import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';

import { Profile } from '../types/Profile.js';

export const createProfileDataloader = (db: PrismaClient) => {
  return new DataLoader<string, Profile | undefined>(async (keys: readonly string[]) => {
    const result = await db.profile.findMany({
      where: { userId: { in: keys as string[] | undefined } },
    });

    return keys.map((id) => result.find((x) => x.userId === id));
  });
};

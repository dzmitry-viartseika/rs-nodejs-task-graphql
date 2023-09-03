import { PrismaClient } from '@prisma/client';

import { LoaderInterface } from './types/LoaderInterface.js';
import { createPostDataloader } from './post/loader.js';
import { createProfileDataloader } from './profile/loader.js';
import { createMemberTypeDataloader } from './member/loader.js';
import { createUserDataloader } from './user/loader.js';

export const createDataloader = (db: PrismaClient): LoaderInterface => {
  return {
    user: createUserDataloader(db),
    post: createPostDataloader(db),
    profile: createProfileDataloader(db),
    memberType: createMemberTypeDataloader(db),
  };
};

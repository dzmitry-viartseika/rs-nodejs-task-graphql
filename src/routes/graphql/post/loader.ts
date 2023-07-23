import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';
import { Post } from '../types/Post.js';

export const createPostDataloader = (db: PrismaClient) => {
  return new DataLoader<string, Post[] | undefined>(async (keys: readonly string[]) => {
    const result = await db.post.findMany({
      where: { authorId: { in: keys as string[] | undefined } },
    });

    const resultMap = new Map<string, Post[]>();

    result.forEach((post) => {
      const authorPosts = resultMap.get(post.authorId) || [];

      authorPosts.push(post);

      resultMap.set(post.authorId, authorPosts);
    });

    const sortedInKeysOrder: Array<Post[] | undefined> = [];

    keys.forEach((key) => {
      sortedInKeysOrder.push(resultMap.get(key));
    });

    return sortedInKeysOrder;
  });
};

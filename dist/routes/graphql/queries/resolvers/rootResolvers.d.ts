import DataLoader from 'dataloader';
import { GraphQLResolveInfo } from 'graphql';
export declare const usersDataLoader: DataLoader<unknown, void, unknown>;
export declare const getUsersResolver: ({ prisma }: {
    prisma: any;
}, resolveInfo: GraphQLResolveInfo) => Promise<any>;
export declare const getMemberTypesResolver: ({ prisma }: {
    prisma: any;
}) => Promise<any>;
export declare const getProfilesResolver: ({ prisma }: {
    prisma: any;
}) => Promise<any>;
export declare const getPostsResolver: ({ prisma }: {
    prisma: any;
}) => Promise<any>;
export declare const getUserByIdResolver: ({ id }: {
    id: any;
}, { prisma }: {
    prisma: any;
}) => Promise<any>;
export declare const getMemberTypeByIdResolver: ({ id }: {
    id: any;
}, { prisma }: {
    prisma: any;
}) => Promise<any>;
export declare const getProfileByIdResolver: ({ id }: {
    id: any;
}, { prisma }: {
    prisma: any;
}) => Promise<any>;
export declare const getPostByIdResolver: ({ id }: {
    id: any;
}, { prisma }: {
    prisma: any;
}) => Promise<any>;

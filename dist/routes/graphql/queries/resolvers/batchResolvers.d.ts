import DataLoader from 'dataloader';
export declare const ALL_USERS_CACHE_KEY = "ALL_USERS";
export declare const batchGetUserSubscribedTo: (userIds: any) => Promise<any[]>;
export declare const profileBatchLoader: DataLoader<unknown, any, unknown>;
export declare const postBatchLoader: DataLoader<unknown, any, unknown>;
export declare const memberTypesBatchLoader: DataLoader<unknown, any, unknown>;
export declare const userSubscribedToBatchLoader: DataLoader<unknown, any, unknown>;
export declare const subscribedToUserLoader: DataLoader<unknown, any, unknown>;

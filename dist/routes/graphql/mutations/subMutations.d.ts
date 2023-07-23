export declare const subMutationFields: {
    subscribeTo: {
        type: import("graphql").GraphQLObjectType<any, any>;
        args: {
            userId: {
                type: import("graphql").GraphQLScalarType<string | undefined, string>;
            };
            authorId: {
                type: import("graphql").GraphQLScalarType<string | undefined, string>;
            };
        };
        resolve: (_source: any, args: any) => Promise<import("@prisma/client/runtime/library.js").GetResult<{
            id: string;
            name: string;
            balance: number;
        }, unknown> & {}>;
    };
    unsubscribeFrom: {
        type: import("graphql").GraphQLScalarType<boolean, boolean>;
        args: {
            userId: {
                type: import("graphql").GraphQLScalarType<string | undefined, string>;
            };
            authorId: {
                type: import("graphql").GraphQLScalarType<string | undefined, string>;
            };
        };
        resolve: (_source: any, args: any) => Promise<boolean>;
    };
};

import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql';
export declare const createPostInput: GraphQLInputObjectType;
export declare const createUserInput: GraphQLInputObjectType;
export declare const createProfileInput: GraphQLInputObjectType;
export declare const createMutationFields: {
    createPost: {
        type: import("graphql").GraphQLObjectType<any, any>;
        args: {
            dto: {
                type: GraphQLNonNull<GraphQLInputObjectType>;
            };
        };
        resolve: (_source: any, args: any) => Promise<import("@prisma/client/runtime/library.js").GetResult<{
            id: string;
            title: string;
            content: string;
            authorId: string;
        }, unknown> & {}>;
    };
    createUser: {
        type: import("graphql").GraphQLObjectType<any, any>;
        args: {
            dto: {
                type: GraphQLNonNull<GraphQLInputObjectType>;
            };
        };
        resolve: (_source: any, args: any) => Promise<import("@prisma/client/runtime/library.js").GetResult<{
            id: string;
            name: string;
            balance: number;
        }, unknown> & {}>;
    };
    createProfile: {
        type: import("graphql").GraphQLObjectType<any, any>;
        args: {
            dto: {
                type: GraphQLNonNull<GraphQLInputObjectType>;
            };
        };
        resolve: (_source: any, args: any) => Promise<import("@prisma/client/runtime/library.js").GetResult<{
            id: string;
            isMale: boolean;
            yearOfBirth: number;
            userId: string;
            memberTypeId: string;
        }, unknown> & {}>;
    };
};

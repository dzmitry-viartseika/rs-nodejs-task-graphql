import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql';
export declare const changePostInput: GraphQLInputObjectType;
export declare const changeUserInput: GraphQLInputObjectType;
export declare const changeProfileInput: GraphQLInputObjectType;
export declare const changeMutationFields: {
    changePost: {
        type: import("graphql").GraphQLObjectType<any, any>;
        args: {
            dto: {
                type: GraphQLNonNull<GraphQLInputObjectType>;
            };
            id: {
                type: GraphQLNonNull<import("graphql").GraphQLScalarType<string | undefined, string>>;
            };
        };
        resolve: (_source: any, args: any) => Promise<import("@prisma/client/runtime/library.js").GetResult<{
            id: string;
            title: string;
            content: string;
            authorId: string;
        }, unknown> & {}>;
    };
    changeUser: {
        type: import("graphql").GraphQLObjectType<any, any>;
        args: {
            dto: {
                type: GraphQLNonNull<GraphQLInputObjectType>;
            };
            id: {
                type: GraphQLNonNull<import("graphql").GraphQLScalarType<string | undefined, string>>;
            };
        };
        resolve: (_source: any, args: any) => Promise<import("@prisma/client/runtime/library.js").GetResult<{
            id: string;
            name: string;
            balance: number;
        }, unknown> & {}>;
    };
    changeProfile: {
        type: import("graphql").GraphQLObjectType<any, any>;
        args: {
            dto: {
                type: GraphQLNonNull<GraphQLInputObjectType>;
            };
            id: {
                type: GraphQLNonNull<import("graphql").GraphQLScalarType<string | undefined, string>>;
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

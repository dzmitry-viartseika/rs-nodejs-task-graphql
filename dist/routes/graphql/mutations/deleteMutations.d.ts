import { GraphQLNonNull } from 'graphql';
export declare const deleteMutationFields: {
    deletePost: {
        type: import("graphql").GraphQLScalarType<boolean, boolean>;
        args: {
            id: {
                type: GraphQLNonNull<import("graphql").GraphQLScalarType<string | undefined, string>>;
            };
        };
        resolve: (_source: any, args: any) => Promise<boolean>;
    };
    deleteUser: {
        type: import("graphql").GraphQLScalarType<boolean, boolean>;
        args: {
            id: {
                type: GraphQLNonNull<import("graphql").GraphQLScalarType<string | undefined, string>>;
            };
        };
        resolve: (_source: any, args: any) => Promise<boolean>;
    };
    deleteProfile: {
        type: import("graphql").GraphQLScalarType<boolean, boolean>;
        args: {
            id: {
                type: GraphQLNonNull<import("graphql").GraphQLScalarType<string | undefined, string>>;
            };
        };
        resolve: (_source: any, args: any) => Promise<boolean>;
    };
};

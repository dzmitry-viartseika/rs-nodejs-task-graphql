import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
export declare const postType: GraphQLObjectType<any, any>;
export declare const memberTypeType: GraphQLObjectType<any, any>;
export declare const profileTypeFields: {
    id: {
        type: GraphQLNonNull<import("graphql").GraphQLScalarType<string, string>>;
    };
    isMale: {
        type: import("graphql").GraphQLScalarType<boolean, boolean>;
    };
    yearOfBirth: {
        type: import("graphql").GraphQLScalarType<number, number>;
    };
    memberType: {
        type: GraphQLObjectType<any, any>;
        resolve: (source: any) => Promise<any>;
    };
};
export declare const profileType: GraphQLObjectType<any, any>;
export declare const userType: GraphQLObjectType<any, any>;
export declare const userSubscribedToType: any;
export declare const subscribedToUserType: GraphQLObjectType<any, any>;
export declare const userFields: any;

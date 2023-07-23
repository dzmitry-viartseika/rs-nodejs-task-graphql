export declare const gqlResponseSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    errors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export declare const createGqlResponseSchema: {
    body: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TString;
        variables: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>>;
    }>;
};

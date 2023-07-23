export declare const subscribeToUserSchema: {
    params: import("@sinclair/typebox").TObject<{
        userId: import("@sinclair/typebox").TString;
    }>;
    body: import("@sinclair/typebox").TObject<{
        authorId: import("@sinclair/typebox").TString;
    }>;
};
export declare const unsubscribeFromUserSchema: {
    params: import("@sinclair/typebox").TObject<{
        userId: import("@sinclair/typebox").TString;
        authorId: import("@sinclair/typebox").TString;
    }>;
};

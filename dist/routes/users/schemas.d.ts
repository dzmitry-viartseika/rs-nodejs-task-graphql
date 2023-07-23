export declare const userFields: {
    id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    balance: import("@sinclair/typebox").TNumber;
};
export declare const userSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    balance: import("@sinclair/typebox").TNumber;
}>;
export declare const getUserByIdSchema: {
    params: import("@sinclair/typebox").TObject<{
        userId: import("@sinclair/typebox").TString;
    }>;
};
export declare const createUserSchema: {
    body: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        balance: import("@sinclair/typebox").TNumber;
    }>;
};
export declare const changeUserByIdSchema: {
    params: import("@sinclair/typebox").TObject<{
        userId: import("@sinclair/typebox").TString;
    }>;
    body: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        balance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>;
};

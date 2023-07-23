export declare enum MemberTypeId {
    BASIC = "basic",
    BUSINESS = "business"
}
export declare const memberTypeFields: {
    id: import("@sinclair/typebox").TString;
    discount: import("@sinclair/typebox").TNumber;
    postsLimitPerMonth: import("@sinclair/typebox").TInteger;
};
export declare const memberTypeSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    discount: import("@sinclair/typebox").TNumber;
    postsLimitPerMonth: import("@sinclair/typebox").TInteger;
}>;
export declare const getMemberTypeByIdSchema: {
    params: import("@sinclair/typebox").TObject<{
        memberTypeId: import("@sinclair/typebox").TString;
    }>;
};

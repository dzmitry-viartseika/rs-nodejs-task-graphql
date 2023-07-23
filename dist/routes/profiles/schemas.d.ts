export declare const profileFields: {
    id: import("@sinclair/typebox").TString;
    isMale: import("@sinclair/typebox").TBoolean;
    yearOfBirth: import("@sinclair/typebox").TInteger;
    userId: import("@sinclair/typebox").TString;
    memberTypeId: import("@sinclair/typebox").TString;
};
export declare const profileSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    isMale: import("@sinclair/typebox").TBoolean;
    yearOfBirth: import("@sinclair/typebox").TInteger;
    userId: import("@sinclair/typebox").TString;
    memberTypeId: import("@sinclair/typebox").TString;
}>;
export declare const getProfileByIdSchema: {
    params: import("@sinclair/typebox").TObject<{
        profileId: import("@sinclair/typebox").TString;
    }>;
};
export declare const createProfileSchema: {
    body: import("@sinclair/typebox").TObject<{
        isMale: import("@sinclair/typebox").TBoolean;
        yearOfBirth: import("@sinclair/typebox").TInteger;
        memberTypeId: import("@sinclair/typebox").TString;
        userId: import("@sinclair/typebox").TString;
    }>;
};
export declare const changeProfileByIdSchema: {
    params: import("@sinclair/typebox").TObject<{
        profileId: import("@sinclair/typebox").TString;
    }>;
    body: import("@sinclair/typebox").TObject<{
        isMale: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        yearOfBirth: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        memberTypeId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
};

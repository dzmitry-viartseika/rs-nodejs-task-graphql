export declare const postFields: {
    id: import("@sinclair/typebox").TString;
    title: import("@sinclair/typebox").TString;
    content: import("@sinclair/typebox").TString;
    authorId: import("@sinclair/typebox").TString;
};
export declare const postSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    title: import("@sinclair/typebox").TString;
    content: import("@sinclair/typebox").TString;
    authorId: import("@sinclair/typebox").TString;
}>;
export declare const getPostByIdSchema: {
    params: import("@sinclair/typebox").TObject<{
        postId: import("@sinclair/typebox").TString;
    }>;
};
export declare const createPostSchema: {
    body: import("@sinclair/typebox").TObject<{
        title: import("@sinclair/typebox").TString;
        content: import("@sinclair/typebox").TString;
        authorId: import("@sinclair/typebox").TString;
    }>;
};
export declare const changePostByIdSchema: {
    params: import("@sinclair/typebox").TObject<{
        postId: import("@sinclair/typebox").TString;
    }>;
    body: import("@sinclair/typebox").TObject<{
        title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
};

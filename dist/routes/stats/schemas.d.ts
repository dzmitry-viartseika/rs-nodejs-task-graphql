export declare const prismaStatsSchema: import("@sinclair/typebox").TObject<{
    operationHistory: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        model: import("@sinclair/typebox").TString;
        operation: import("@sinclair/typebox").TString;
        args: import("@sinclair/typebox").TAny;
    }>>;
}>;

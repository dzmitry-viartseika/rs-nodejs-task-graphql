export declare const createPost: ({ dto }: {
    dto: any;
}) => Promise<import("@prisma/client/runtime/library.js").GetResult<{
    id: string;
    title: string;
    content: string;
    authorId: string;
}, unknown> & {}>;
export declare const createUser: ({ dto }: {
    dto: any;
}) => Promise<import("@prisma/client/runtime/library.js").GetResult<{
    id: string;
    name: string;
    balance: number;
}, unknown> & {}>;
export declare const createProfile: ({ dto }: {
    dto: any;
}) => Promise<import("@prisma/client/runtime/library.js").GetResult<{
    id: string;
    isMale: boolean;
    yearOfBirth: number;
    userId: string;
    memberTypeId: string;
}, unknown> & {}>;
export declare const deletePost: ({ id }: {
    id: any;
}) => Promise<boolean>;
export declare const deleteUser: ({ id }: {
    id: any;
}) => Promise<boolean>;
export declare const deleteProfile: ({ id }: {
    id: any;
}) => Promise<boolean>;
export declare const changePost: ({ dto, id }: {
    dto: any;
    id: any;
}) => Promise<import("@prisma/client/runtime/library.js").GetResult<{
    id: string;
    title: string;
    content: string;
    authorId: string;
}, unknown> & {}>;
export declare const changeUser: ({ dto, id }: {
    dto: any;
    id: any;
}) => Promise<import("@prisma/client/runtime/library.js").GetResult<{
    id: string;
    name: string;
    balance: number;
}, unknown> & {}>;
export declare const changeProfile: ({ dto, id }: {
    dto: any;
    id: any;
}) => Promise<import("@prisma/client/runtime/library.js").GetResult<{
    id: string;
    isMale: boolean;
    yearOfBirth: number;
    userId: string;
    memberTypeId: string;
}, unknown> & {}>;
export declare const subscribeToResolver: ({ userId, authorId }: {
    userId: any;
    authorId: any;
}) => Promise<import("@prisma/client/runtime/library.js").GetResult<{
    id: string;
    name: string;
    balance: number;
}, unknown> & {}>;
export declare const unsubscribeFromResolver: ({ userId, authorId }: {
    userId: any;
    authorId: any;
}) => Promise<boolean>;

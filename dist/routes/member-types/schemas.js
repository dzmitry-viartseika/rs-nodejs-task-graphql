import { Type } from '@fastify/type-provider-typebox';
export var MemberTypeId;
(function (MemberTypeId) {
    MemberTypeId["BASIC"] = "basic";
    MemberTypeId["BUSINESS"] = "business";
})(MemberTypeId || (MemberTypeId = {}));
export const memberTypeFields = {
    id: Type.String({
        pattern: Object.values(MemberTypeId).join('|'),
    }),
    discount: Type.Number(),
    postsLimitPerMonth: Type.Integer(),
};
export const memberTypeSchema = Type.Object({
    ...memberTypeFields,
});
export const getMemberTypeByIdSchema = {
    params: Type.Object({
        memberTypeId: memberTypeFields.id,
    }, {
        additionalProperties: false,
    }),
};
//# sourceMappingURL=schemas.js.map
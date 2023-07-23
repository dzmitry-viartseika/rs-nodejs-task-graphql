import { Static } from '@fastify/type-provider-typebox';
declare const schema: import("@sinclair/typebox").TObject<{
    FASTIFY_PORT: import("@sinclair/typebox").TInteger;
}>;
declare const _default: import("fastify").FastifyPluginAsync<import("fastify").FastifyPluginOptions, import("fastify").RawServerDefault, import("fastify").FastifyTypeProviderDefault>;
export default _default;
declare module 'fastify' {
    interface FastifyInstance {
        config: Static<typeof schema>;
    }
}

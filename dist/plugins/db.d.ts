import { PrismaClient } from '@prisma/client';
import { Static } from '@sinclair/typebox';
import { prismaStatsSchema } from '../routes/stats/schemas.js';
declare const _default: import("fastify").FastifyPluginAsync<import("fastify").FastifyPluginOptions, import("fastify").RawServerDefault, import("fastify").FastifyTypeProviderDefault>;
export default _default;
declare module 'fastify' {
    interface FastifyInstance {
        prisma: PrismaClient;
        prismaStats: Static<typeof prismaStatsSchema>;
    }
}

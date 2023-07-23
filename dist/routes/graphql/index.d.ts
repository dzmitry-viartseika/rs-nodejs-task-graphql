import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { PrismaClient } from '@prisma/client';
export declare let prisma: PrismaClient;
declare const plugin: FastifyPluginAsyncTypebox;
export default plugin;

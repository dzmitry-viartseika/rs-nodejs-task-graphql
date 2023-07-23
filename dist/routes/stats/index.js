import { prismaStatsSchema } from './schemas.js';
const plugin = async (fastify) => {
    fastify.route({
        url: '/prisma',
        method: 'GET',
        schema: {
            response: {
                200: prismaStatsSchema,
            },
        },
        async handler() {
            return fastify.prismaStats;
        },
    });
};
export default plugin;
//# sourceMappingURL=index.js.map
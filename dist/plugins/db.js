import fp from 'fastify-plugin';
import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError, PrismaClientRustPanicError, PrismaClientUnknownRequestError, PrismaClientValidationError, } from '@prisma/client/runtime/library.js';
import { HttpCompatibleError } from './handle-http-error.js';
export default fp(async (fastify) => {
    const prisma = new PrismaClient({
        log: ['warn', 'error'],
    }).$extends({
        query: {
            $allOperations: ({ model = '', operation, args, query }) => {
                fastify.prismaStats.operationHistory.push({
                    model,
                    operation,
                    args,
                });
                return query(args).catch(handlePrismaError);
            },
        },
    });
    fastify.decorate('prismaStats', {
        operationHistory: [],
    });
    fastify.decorate('prisma', prisma);
});
function handlePrismaError(error) {
    const info = {
        code: 502,
        mes: 'Unexpected database error.',
    };
    if (error instanceof PrismaClientKnownRequestError) {
        info.mes = error.message;
        info.code = 422;
    }
    if (error instanceof PrismaClientValidationError) {
        info.mes = error.message;
        info.code = 400;
    }
    if (error instanceof PrismaClientUnknownRequestError ||
        error instanceof PrismaClientRustPanicError) {
        info.mes = error.message;
        info.code = 502;
    }
    throw new HttpCompatibleError(info.code, info.mes);
}
//# sourceMappingURL=db.js.map
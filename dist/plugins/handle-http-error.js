import fp from 'fastify-plugin';
import { sensiblePluginTag } from './sensible.js';
export class HttpCompatibleError extends Error {
    httpCode;
    message;
    constructor(httpCode, message) {
        super();
        this.httpCode = httpCode;
        this.message = message;
    }
}
export default fp(async (fastify) => fastify.setErrorHandler((error) => {
    if (error instanceof HttpCompatibleError) {
        return fastify.httpErrors.getHttpError(error.httpCode, error.message);
    }
    return error;
}), {
    dependencies: [sensiblePluginTag],
});
//# sourceMappingURL=handle-http-error.js.map
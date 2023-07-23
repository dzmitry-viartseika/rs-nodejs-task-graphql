import { HttpErrorCodes } from '@fastify/sensible/lib/httpError.js';
export declare class HttpCompatibleError extends Error {
    httpCode: HttpErrorCodes;
    message: string;
    constructor(httpCode: HttpErrorCodes, message: string);
}
declare const _default: import("fastify").FastifyPluginCallback<import("fastify").FastifyPluginOptions, import("fastify").RawServerDefault, import("fastify").FastifyTypeProviderDefault>;
export default _default;

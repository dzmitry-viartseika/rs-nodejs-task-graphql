import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import AutoLoad from '@fastify/autoload';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const opts = {
    ignoreFilter: (path) => {
        const isFileNested = (path.match(new RegExp('/', 'g')) ?? []).length > 1;
        if (!isFileNested) {
            return false;
        }
        return !path.endsWith('index.js');
    },
    forceESM: true,
};
const app = async (fastify, _) => {
    void fastify.register(AutoLoad, {
        dir: join(__dirname, 'plugins'),
        ...opts,
    });
    void fastify.register(AutoLoad, {
        dir: join(__dirname, 'routes'),
        routeParams: true,
        ...opts,
    });
};
export default app;
//# sourceMappingURL=app.js.map
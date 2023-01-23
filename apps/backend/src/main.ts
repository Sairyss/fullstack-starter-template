import { serverConfig } from './configs/server.config';
import { createServer } from './server/server';

const server = createServer(serverConfig);

server.start();

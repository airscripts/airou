import { fastify, FastifyInstance } from 'fastify';

import configs from '../configs/index.js';
import routes from '../http/routes/index.js';
import CONSTANTS from '../constants/index.js';

export class Server {
  private port?: number;
  private message: string;
  private instance: FastifyInstance;

  public constructor() {
    this.instance = fastify();
    this.port = configs.http.port;
    this.message = CONSTANTS.http.server.message;
  }

  public get(): FastifyInstance {
    return this.instance;
  }

  public routes(): void {
    routes.ping.init();
    routes.telegram.init();
  }

  public start(): void {
    this.instance
      .listen({ port: this.port })
      .then(() => console.info(this.message));
  }
}

export const object: Server = new Server();
export const instance: FastifyInstance = object.get();

export default {
  object: object,
  instance: instance,
};

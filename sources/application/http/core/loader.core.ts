import { fastify, FastifyInstance } from 'fastify';

import routes from '../routes/index.js';
import configs from './configs.core.js';
import CONSTANTS from '../core/constants.core.js';

export class Http {
  private port?: number;
  private host?: string;
  private message: string;
  private instance: FastifyInstance;

  public constructor() {
    this.instance = fastify();
    this.port = configs.port;
    this.host = configs.host;
    this.message = CONSTANTS.server.message;
  }

  public get(): FastifyInstance {
    return this.instance;
  }

  public routes(): void {
    routes.ping.get();
    routes.telegram.post();
    routes.users.get();
    routes.users.post();
    routes.user.get();
    routes.user.patch();
    routes.user.delete();
  }

  public start(): void {
    this.instance
      .listen({ port: this.port, host: this.host })
      .then(() => console.log(this.message));
  }
}

export const object: Http = new Http();
export const instance: FastifyInstance = object.get();

export default {
  object: object,
  instance: instance,
};

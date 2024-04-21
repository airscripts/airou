import { fastify, FastifyInstance } from 'fastify';

import configs from '../../configs/index.js';
import CONSTANTS from '../../constants/index.js';
import routes from '../adapters/http/routes/index.js';

export class Http {
  private port?: number;
  private host?: string;
  private message: string;
  private instance: FastifyInstance;

  public constructor() {
    this.instance = fastify();
    this.port = configs.http.port;
    this.host = configs.http.host;
    this.message = CONSTANTS.infrastructure.http.server.message;
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
      .then(() => console.log(this.message, `@ ${this.host}:${this.port}`));
  }
}

export const object: Http = new Http();
export const instance: FastifyInstance = object.get();

export default {
  object: object,
  instance: instance,
};

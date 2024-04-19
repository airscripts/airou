import { fastify, FastifyInstance } from 'fastify';

import configs from '../configs/index.js';
import routes from '../http/routes/index.js';
import CONSTANTS from '../constants/index.js';

export class Http {
  private port?: number;
  private host?: string;
  private message: string;
  private instance: FastifyInstance;

  public constructor() {
    this.instance = fastify();
    this.port = configs.http.port;
    this.host = configs.http.host;
    this.message = CONSTANTS.http.server.message;
  }

  public get(): FastifyInstance {
    return this.instance;
  }

  public routes(): void {
    routes.ping.init();
    routes.telegram.init();

    routes.users.root.get();
    routes.users.root.post();

    routes.users.id.get();
    routes.users.id.patch();
    routes.users.id.delete();
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

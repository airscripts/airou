import { FastifyReply, FastifyRequest } from 'fastify';

import CONSTANTS from '../core/constants.core.js';
import services from '../../../domain/services/index.js';
import { instance as http } from '../core/loader.core.js';
import DOMAIN_CONSTANTS from '../../../domain/core/constants.core.js';
import { UserActionFactory } from '../../../domain/factories/user.action.factory.js';
import UserServiceInterface from '../../../domain/interfaces/user.service.interface.js';

import {
  UserHttpGet,
  UserHttpPatch,
  UserHttpDelete,
} from '../dtos/user.dto.js';

class UserRoute {
  private service: UserServiceInterface = services.locator.getService(
    DOMAIN_CONSTANTS.service.user,
  ) as UserServiceInterface;

  public get(): void {
    http.get(
      CONSTANTS.routes.user,
      async (request: FastifyRequest<UserHttpGet>, reply: FastifyReply) => {
        try {
          const { id } = request.params;
          const data = await this.service.findById(id);
          return reply.code(200).send({ data: data });
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }
      },
    );
  }

  public patch(): void {
    http.patch(
      CONSTANTS.routes.user,
      async (request: FastifyRequest<UserHttpPatch>, reply: FastifyReply) => {
        try {
          const { id } = request.params;
          const { name } = request.body;
          const { action } = request.query;
          const factory = new UserActionFactory(this.service);
          const data = await factory.action(action).execute(id, name);
          return reply.code(200).send({ data: data });
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }
      },
    );
  }

  public delete(): void {
    http.delete(
      CONSTANTS.routes.user,
      async (request: FastifyRequest<UserHttpDelete>, reply: FastifyReply) => {
        try {
          const { id } = request.params;
          const data = await this.service.remove(id);
          return reply.code(200).send({ data: data });
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }
      },
    );
  }
}

const instance = new UserRoute();

export default {
  instance: instance,
  UserRoute: UserRoute,
};

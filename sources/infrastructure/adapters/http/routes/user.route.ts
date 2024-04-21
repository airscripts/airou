import { FastifyReply, FastifyRequest } from 'fastify';

import CONSTANTS from '../../../../constants/index.js';
import services from '../../../../application/services/index.js';
import { instance as http } from '../../../configs/http.config.js';
import UserServicePort from '../../../../domain/ports/services/user.service.port.js';
import { UserActionFactory } from '../../../../application/factories/user.action.factory.js';

import {
  UserHttpGet,
  UserHttpPatch,
  UserHttpDelete,
} from '../../../../domain/models/user.model.js';

class UserRoute {
  private service: UserServicePort = services.locator.getService(
    CONSTANTS.application.service.user,
  );

  public get(): void {
    http.get(
      CONSTANTS.infrastructure.http.routes.user,
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
      CONSTANTS.infrastructure.http.routes.user,
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
      CONSTANTS.infrastructure.http.routes.user,
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

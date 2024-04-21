import { FastifyReply, FastifyRequest } from 'fastify';

import CONSTANTS from '../../../../constants/index.js';
import services from '../../../../application/services/index.js';
import { instance as http } from '../../../configs/http.config.js';
import UserServicePort from '../../../../domain/ports/services/user.service.port.js';
import { UserFindFactory } from '../../../../application/factories/user.find.factory.js';

import {
  UsersHttpGet,
  UsersHttpPost,
} from '../dtos/users.dto.js';

class UsersRoute {
  private service: UserServicePort = services.locator.getService(
    CONSTANTS.application.service.user,
  );

  public get(): void {
    http.get(
      CONSTANTS.infrastructure.http.routes.users,
      async (request: FastifyRequest<UsersHttpGet>, reply: FastifyReply) => {
        try {
          const { email, find } = request.query;
          const factory = new UserFindFactory(this.service);
          const data = await factory.find(find).execute(email);
          return reply.code(200).send({ data: data });
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }
      },
    );
  }

  public post(): void {
    http.post(
      CONSTANTS.infrastructure.http.routes.users,
      async (request: FastifyRequest<UsersHttpPost>, reply: FastifyReply) => {
        try {
          const { name, email } = request.body;
          const data = await this.service.create({ name: name, email: email });
          return reply.code(201).send({ data: data });
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }
      },
    );
  }
}

const instance = new UsersRoute();

export default {
  instance: instance,
  UsersRoute: UsersRoute,
};

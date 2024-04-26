import { FastifyReply, FastifyRequest } from 'fastify';

import CONSTANTS from '../core/constants.core.js';
import services from '../../../domain/services/index.js';
import { instance as http } from '../core/loader.core.js';
import { UsersHttpGet, UsersHttpPost } from '../dtos/users.dto.js';
import DOMAIN_CONSTANTS from '../../../domain/core/constants.core.js';
import { UserFindFactory } from '../../../domain/factories/user.find.factory.js';
import UserServiceInterface from '../../../domain/interfaces/user.service.interface.js';

class UsersRoute {
  private service: UserServiceInterface = services.locator.getService(
    DOMAIN_CONSTANTS.service.user,
  ) as UserServiceInterface;

  public get(): void {
    http.get(
      CONSTANTS.routes.users,
      async (request: FastifyRequest<UsersHttpGet>, reply: FastifyReply) => {
        try {
          const { email, find } = request.query;
          const factory = new UserFindFactory(this.service);
          const data = await factory.find(find).execute(email);
          return reply.code(200).send({ data: data });
        } catch (error) {
          return reply.code(500).send({ error: error });
        }
      },
    );
  }

  public post(): void {
    http.post(
      CONSTANTS.routes.users,
      async (request: FastifyRequest<UsersHttpPost>, reply: FastifyReply) => {
        try {
          const { name, email, username } = request.body || {};

          const data = await this.service.create({
            name: name,
            email: email,
            username: username,
          });

          return reply.code(201).send({ data: data });
        } catch (error) {
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

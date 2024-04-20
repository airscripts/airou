import { FastifyReply, FastifyRequest } from 'fastify';

import CONSTANTS from '../../../../constants/index.js';
import services from '../../../../application/services/index.js';
import { instance as http } from '../../../config/http.config.js';
import UsersService from '../../../../domain/ports/users.service.port.js';

import {
  UserHttpGet,
  UsersHttpGet,
  UsersHttpPost,
  UserHttpPatch,
  UserHttpDelete,
} from '../../../../domain/model/user.model.js';

class Users {
  private service: UsersService = services.locator.getService(
    CONSTANTS.application.services.users,
  );

  private async retrieve(payload: { email?: string } = {}) {
    const { email } = payload;
    if (email) return await this.service.retrieveByEmail(email);
    else return await this.service.retrieve();
  }

  public get(): void {
    http.get(
      CONSTANTS.http.routes.users,
      async (request: FastifyRequest<UsersHttpGet>, reply: FastifyReply) => {
        let data;

        try {
          const payload = { email: request.query.email };
          data = await this.retrieve(payload);
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }

        return reply.code(200).send({ data: data });
      },
    );
  }

  public post(): void {
    http.post(
      CONSTANTS.http.routes.users,
      async (request: FastifyRequest<UsersHttpPost>, reply: FastifyReply) => {
        let data;

        try {
          const { name, email } = request.body;
          data = await this.service.create({ name: name, email: email });
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }

        return reply.code(201).send({ data: data });
      },
    );
  }
}

class User {
  private service: UsersService = services.locator.getService(
    CONSTANTS.application.services.users,
  );

  public get(): void {
    http.get(
      CONSTANTS.http.routes.user,
      async (request: FastifyRequest<UserHttpGet>, reply: FastifyReply) => {
        let data;

        try {
          const { id } = request.params;
          data = await this.service.retrieveById(id);
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }

        return reply.code(200).send({ data: data });
      },
    );
  }

  public patch(): void {
    http.patch(
      CONSTANTS.http.routes.user,
      async (request: FastifyRequest<UserHttpPatch>, reply: FastifyReply) => {
        let data;

        try {
          const { id } = request.params;
          const { name } = request.body;
          data = await this.service.update({ id: id, name: name });
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }

        return reply.code(200).send({ data: data });
      },
    );
  }

  public delete(): void {
    http.delete(
      CONSTANTS.http.routes.user,
      async (request: FastifyRequest<UserHttpDelete>, reply: FastifyReply) => {
        let data;

        try {
          const { id } = request.params;
          data = await this.service.remove(id);
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }

        return reply.code(200).send({ data: data });
      },
    );
  }
}

const id = new User();
const root = new Users();

export default {
  id: id,
  root: root,
};

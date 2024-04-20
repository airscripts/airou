import { FastifyReply, FastifyRequest } from 'fastify';

import CONSTANTS from '../../../../constants/index.js';
import services from '../../../../application/services/index.js';
import { instance as http } from '../../../config/http.config.js';

import {
  UserHttpPost,
  UserHttpPatch,
  UserHttpDelete,
} from '../../../../domain/model/user.model.js';

class Users {
  private service: string = CONSTANTS.application.services.users;

  public get(): void {
    http.get(
      CONSTANTS.http.routes.users,
      async (
        request: FastifyRequest<{ Querystring: { email?: string } }>,
        reply: FastifyReply,
      ) => {
        let data;
        const { email } = request.query;
        const param = email || '';
        const method = email ? 'retrieveByEmail' : 'retrieve';

        try {
          data = await services.locator.getService(this.service)[method](param);
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
      async (
        request: FastifyRequest<{ Body: UserHttpPost }>,
        reply: FastifyReply,
      ) => {
        let data;
        const { name, email } = request.body;

        try {
          data = await services.locator.getService(this.service).create({
            name: name,
            email: email,
          });
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
  private service: string = CONSTANTS.application.services.users;

  public get(): void {
    http.get(
      CONSTANTS.http.routes.user,
      async (
        request: FastifyRequest<{ Params: { id: string } }>,
        reply: FastifyReply,
      ) => {
        let data;
        const { id } = request.params;

        try {
          data = await services.locator
            .getService(this.service)
            .retrieveById(id);
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
      async (
        request: FastifyRequest<{
          Body: UserHttpPatch;
          Params: { id: string };
        }>,
        reply: FastifyReply,
      ) => {
        let data;
        const { id } = request.params;
        const { name } = request.body;

        try {
          data = await services.locator.getService(this.service).update({
            id: id,
            name: name,
          });
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
      async (
        request: FastifyRequest<{
          Body: UserHttpDelete;
          Params: { id: string };
        }>,
        reply: FastifyReply,
      ) => {
        let data;
        const { id } = request.params;

        try {
          data = await services.locator.getService(this.service).remove(id);
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

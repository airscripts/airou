import { FastifyReply, FastifyRequest } from 'fastify';

import CONSTANTS from '../../../../constants/index.js';
import { instance as http } from '../../../config/http.config.js';
import services from '../../../../application/services/index.js';

import {
  UserHttpPost,
  UserHttpPatch,
  UserHttpDelete,
} from '../../../../domain/model/user.model.js';

class Users {
  public get(): void {
    http.get(
      CONSTANTS.http.routes.users,
      async (
        request: FastifyRequest<{ Querystring: { email?: string } }>,
        reply: FastifyReply,
      ) => {
        console.info('Executing route GET /users.');
        const { email } = request.query;
        const param = email || '';
        const method = email ? 'retrieveByEmail' : 'retrieve';
        let data = null;

        try {
          data = await services.users.instance[method](param);
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }

        console.info('Route GET /users executed successfully.');
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
        console.info('Executing route POST /users.');
        let data = null;

        try {
          data = await services.users.instance.create({
            name: request.body.name,
            email: request.body.email,
          });
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }

        console.info('Route POST /users executed successfully.');
        return reply.code(201).send({ data: data });
      },
    );
  }
}

class User {
  public get(): void {
    http.get(
      CONSTANTS.http.routes.user,
      async (
        request: FastifyRequest<{ Params: { id: string } }>,
        reply: FastifyReply,
      ) => {
        console.info('Executing route GET /users/:id.');
        let data = null;

        try {
          data = await services.users.instance.retrieveById(request.params.id);
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }

        console.info('Route GET /users/:id executed successfully.');
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
        console.info('Executing route PATCH /users.');
        let data = null;

        try {
          data = await services.users.instance.update({
            id: request.params.id,
            name: request.body.name,
          });
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }

        console.info('Route PATCH /users executed successfully.');
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
        console.info('Executing route DELETE /users.');
        let data = null;

        try {
          data = await services.users.instance.remove(request.params.id);
        } catch (error) {
          console.error(error);
          return reply.code(500).send({ error: error });
        }

        console.info('Route DELETE /users executed successfully.');
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

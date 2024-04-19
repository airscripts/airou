import { FastifyReply, FastifyRequest } from 'fastify';

import core from '../../core/index.js';
import CONSTANTS from '../../constants/index.js';
import { instance as http } from '../../application/http.js';
import { HttpPost, HttpPatch, HttpDelete } from '../../interfaces/users.js';

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
          data = await core.user[method](param);
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
        request: FastifyRequest<{ Body: HttpPost }>,
        reply: FastifyReply,
      ) => {
        console.info('Executing route POST /users.');
        let data = null;

        try {
          data = await core.user.create({
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
          data = await core.user.retrieveById(request.params.id);
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
        request: FastifyRequest<{ Body: HttpPatch, Params: { id: string } }>,
        reply: FastifyReply,
      ) => {
        console.info('Executing route PATCH /users.');
        let data = null;

        try {
          data = await core.user.update({
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
        request: FastifyRequest<{ Body: HttpDelete, Params: { id: string } }>,
        reply: FastifyReply,
      ) => {
        console.info('Executing route DELETE /users.');
        let data = null;

        try {
          data = await core.user.remove(request.params.id);
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

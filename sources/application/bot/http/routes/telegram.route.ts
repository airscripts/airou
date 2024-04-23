import { FastifyReply, FastifyRequest } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import { Update } from 'telegraf/typings/core/types/typegram';

import { webhook } from '../../core/loader.core.js';
import CONSTANTS from '../../core/constants.core.js';
import { instance as http } from '../../core/http.core.js';

class TelegramRoute {
  public post(): void {
    http.post(
      CONSTANTS.http.routes.telegram,
      async (request: FastifyRequest, reply: FastifyReply) => {
        type WebhookRequestBody = { body?: Update };
        type WebhookReply = ServerResponse<IncomingMessage>;
        type WebhookRequest = IncomingMessage & WebhookRequestBody;

        webhook(
          { ...request.raw, body: request.body } as WebhookRequest,
          reply.raw as WebhookReply,
        );
      },
    );
  }
}

const instance = new TelegramRoute();

export default {
  instance: instance,
};

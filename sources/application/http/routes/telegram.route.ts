import { FastifyReply, FastifyRequest } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import { Update } from 'telegraf/typings/core/types/typegram';

import CONSTANTS from '../core/constants.core.js';
import { instance as http } from '../core/loader.core.js';
import { object as bot } from '../../bot/core/loader.core.js';

class TelegramRoute {
  public post(): void {
    http.post(
      CONSTANTS.routes.telegram,
      async (request: FastifyRequest, reply: FastifyReply) => {
        const webhook = await bot.webhook();
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

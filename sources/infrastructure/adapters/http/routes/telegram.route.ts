import { FastifyReply, FastifyRequest } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import { Update } from 'telegraf/typings/core/types/typegram';

import CONSTANTS from '../../../../constants/index.js';
import { object as bot } from '../../../configs/bot.config.js';
import { instance as http } from '../../../configs/http.config.js';

class TelegramRoute {
  public post(): void {
    http.post(
      CONSTANTS.infrastructure.http.routes.telegram,
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

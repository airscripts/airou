import { FastifyReply, FastifyRequest } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import { Update } from 'telegraf/typings/core/types/typegram';

import CONSTANTS from '../../constants/index.js';
import { object as bot } from '../../loaders/bot.js';
import { instance as server } from '../../loaders/server.js';

export function init(): void {
  server.post(
    CONSTANTS.http.routes.telegram,
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

export default {
  init: init,
};

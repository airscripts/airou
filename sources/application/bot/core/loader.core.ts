import type { Update } from 'telegraf/types';
import { Telegraf, session, type Context } from 'telegraf';

import configs from './configs.core.js';
import commands from '../commands/index.js';
import CONSTANTS from '../core/constants.core.js';

interface BotContext<U extends Update = Update> extends Context<U> {
  session: { user: { id: string } };
}

export class Bot {
  private webhook;
  private token: string;
  private bot: Telegraf<BotContext>;

  public constructor() {
    this.token = configs.token;
    this.bot = this.setBot();
    this.webhook = this.setWebhook();

    process.once(CONSTANTS.signals.interrupt, () => {
      try {
        this.bot.stop(CONSTANTS.signals.interrupt);
      } finally {
        process.exit(0);
      }
    });

    process.once(CONSTANTS.signals.terminate, () => {
      try {
        this.bot.stop(CONSTANTS.signals.terminate);
      } finally {
        process.exit(0);
      }
    });
  }

  private setBot(): Telegraf<BotContext> {
    return new Telegraf<BotContext>(this.token, {
      telegram: { webhookReply: false },
    });
  }

  public setWebhook() {
    return this.bot.createWebhook({
      path: configs.webhook.path,
      domain: configs.webhook.domain,
    });
  }

  public getBot(): Telegraf<BotContext> {
    return this.bot;
  }

  public async getWebhook() {
    return await this.webhook;
  }

  public commands(): void {
    commands.ping.command();
  }

  public session(): void {
    this.bot.use(session({ defaultSession: () => configs.session }));
  }
}

export const object: Bot = new Bot();
export const instance: Telegraf<BotContext> = object.getBot();
export const webhook = await object.getWebhook();

export default {
  object: object,
  webhook: webhook,
  instance: instance,
};

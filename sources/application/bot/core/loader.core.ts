import type { Update } from 'telegraf/types';
import { Telegraf, session, type Context } from 'telegraf';

import configs from './configs.core.js';
import commands from '../commands/index.js';
import CONSTANTS from '../core/constants.core.js';

interface BotContext<U extends Update = Update> extends Context<U> {
  session: { user: { id: string } };
}

export class Bot {
  private token: string;
  private bot: Telegraf<BotContext>;

  public constructor() {
    this.token = configs.token;

    this.bot = new Telegraf<BotContext>(this.token, {
      telegram: { webhookReply: false },
    });

    process.once(CONSTANTS.signals.interrupt, () =>
      this.bot.stop(CONSTANTS.signals.interrupt),
    );

    process.once(CONSTANTS.signals.terminate, () =>
      this.bot.stop(CONSTANTS.signals.terminate),
    );
  }

  public async webhook() {
    return await this.bot.createWebhook({
      path: configs.webhook.path,
      domain: configs.webhook.domain,
    });
  }

  public get(): Telegraf<BotContext> {
    return this.bot;
  }

  public commands(): void {
    commands.ping.command();
  }

  public session(): void {
    this.bot.use(session({ defaultSession: () => configs.session }));
  }
}

export const object: Bot = new Bot();
export const instance: Telegraf<BotContext> = object.get();

export default {
  object: object,
  instance: instance,
};

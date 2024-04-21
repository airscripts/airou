import type { Update } from 'telegraf/types';
import { Telegraf, session, type Context } from 'telegraf';

import configs from '../../configs/index.js';
import CONSTANTS from '../../constants/index.js';
import commands from '../adapters/bot/commands/index.js';

interface BotContext<U extends Update = Update> extends Context<U> {
  session: { user: { id: string } };
}

export class Bot {
  private token: string;
  private bot: Telegraf<BotContext>;

  public constructor() {
    this.token = configs.bot.token;

    this.bot = new Telegraf<BotContext>(this.token, {
      telegram: { webhookReply: false },
    });

    process.once(CONSTANTS.infrastructure.bot.signals.interrupt, () =>
      this.bot.stop(CONSTANTS.infrastructure.bot.signals.interrupt),
    );

    process.once(CONSTANTS.infrastructure.bot.signals.terminate, () =>
      this.bot.stop(CONSTANTS.infrastructure.bot.signals.terminate),
    );
  }

  public async webhook() {
    return await this.bot.createWebhook({
      path: configs.bot.webhook.path,
      domain: configs.bot.webhook.domain,
    });
  }

  public get(): Telegraf<BotContext> {
    return this.bot;
  }

  public commands(): void {
    commands.ping.root.command();
  }

  public session(): void {
    this.bot.use(session({ defaultSession: () => configs.bot.session }));
  }
}

export const object: Bot = new Bot();
export const instance: Telegraf<BotContext> = object.get();

export default {
  object: object,
  instance: instance,
};
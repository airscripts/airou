import CONSTANTS from '../core/constants.core.js';
import services from '../../../domain/services/index.js';
import { instance as bot } from '../core/loader.core.js';
import DOMAIN_CONSTANTS from '../../../domain/core/constants.core.js';
import PingServiceInterface from '../../../domain/interfaces/ping.service.interface.js';

class PingCommand {
  private service: PingServiceInterface = services.locator.getService(
    DOMAIN_CONSTANTS.service.ping,
  ) as PingServiceInterface;

  public command(): void {
    bot.command(CONSTANTS.commands.ping, async (ctx, next) => {
      ctx.reply(this.service.send());
      if (next) return next();
    });
  }
}

const instance = new PingCommand();

export default {
  instance: instance,
};

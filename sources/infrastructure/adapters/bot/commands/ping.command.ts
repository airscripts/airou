import core from '../../database/index.js';
import CONSTANTS from '../../../../constants/index.js';
import { instance as bot } from '../../../configs/bot.config.js';

class PingCommand {
  public command(): void {
    bot.command(
      CONSTANTS.infrastructure.bot.commands.ping,
      async (ctx, next) => {
        ctx.reply(core.helpers.ping.send());
        if (next) return next();
      },
    );
  }
}

const root = new PingCommand();

export default {
  root: root,
};

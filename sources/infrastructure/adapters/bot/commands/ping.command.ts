import core from '../../core/index.js';
import CONSTANTS from '../../../../constants/index.js';
import { instance as bot } from '../../../config/bot.config.js';

class PingCommand {
  public command(): void {
    bot.command(CONSTANTS.bot.commands.ping, async (ctx, next) => {
      ctx.reply(core.helpers.ping.send());
      if (next) return next();
    });
  }
}

const root = new PingCommand();

export default {
  root: root,
};

import core from '../../core/index.js';
import CONSTANTS from '../../constants/index.js';
import { instance as bot } from '../../loaders/bot.js';

export function init() {
  bot.command(CONSTANTS.bot.commands.ping, async (ctx, next) => {
    ctx.reply(core.ping.send());
    if (next) return next();
  });
}

export default {
  init: init,
};

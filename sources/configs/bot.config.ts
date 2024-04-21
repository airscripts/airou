import CONSTANTS from '../constants/index.js';

export const botConfigs = {
  token: process.env.BOT_TOKEN || CONSTANTS.infrastructure.bot.token,

  webhook: {
    path: CONSTANTS.infrastructure.http.routes.telegram,

    domain:
      process.env.BOT_WEBHOOK_DOMAIN || CONSTANTS.infrastructure.bot.domain,
  },

  session: {
    user: {
      id: CONSTANTS.infrastructure.bot.nid,
    },
  },
};

export default botConfigs;

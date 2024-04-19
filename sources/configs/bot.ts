import CONSTANTS from '../constants/index.js';

export const botConfigs = {
  token: process.env.BOT_TOKEN || CONSTANTS.bot.token,

  webhook: {
    path: CONSTANTS.http.routes.telegram,
    domain: process.env.BOT_WEBHOOK_DOMAIN || CONSTANTS.bot.domain,
  },

  session: {
    user: {
      id: CONSTANTS.bot.nid,
    },
  },
};

export default botConfigs;

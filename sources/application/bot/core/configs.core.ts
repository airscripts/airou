import CONSTANTS from '../core/constants.core.js';

export default {
  token: process.env.BOT_TOKEN || CONSTANTS.token,

  http: {
    host: process.env.HOST || CONSTANTS.http.host,
    port: Number(process.env.PORT) || CONSTANTS.http.port,
  },

  webhook: {
    path: CONSTANTS.http.routes.telegram,

    domain:
      process.env.BOT_WEBHOOK_DOMAIN || CONSTANTS.domain,
  },

  session: {
    user: {
      id: CONSTANTS.nid,
    },
  },
};

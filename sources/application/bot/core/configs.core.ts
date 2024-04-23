import CONSTANTS from '../core/constants.core.js';
import HTTP_CONSTANTS from '../../http/core/constants.core.js';

export default {
  token: process.env.BOT_TOKEN || CONSTANTS.token,

  webhook: {
    path: HTTP_CONSTANTS.routes.telegram,

    domain:
      process.env.BOT_WEBHOOK_DOMAIN || CONSTANTS.domain,
  },

  session: {
    user: {
      id: CONSTANTS.nid,
    },
  },
};

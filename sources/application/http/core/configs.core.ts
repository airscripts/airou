import CONSTANTS from '../core/constants.core.js';

export default {
  host: process.env.HOST || CONSTANTS.server.host,
  port: Number(process.env.PORT) || CONSTANTS.server.port,
};

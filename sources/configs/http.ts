import CONSTANTS from '../constants/index.js';

export default {
  port: Number(process.env.PORT) || CONSTANTS.http.server.port,
};

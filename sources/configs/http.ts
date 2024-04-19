import CONSTANTS from '../constants/index.js';

export default {
  host: process.env.HOST || CONSTANTS.http.server.host,
  port: Number(process.env.PORT) || CONSTANTS.http.server.port,
};

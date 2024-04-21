import CONSTANTS from '../constants/index.js';

export const httpConfigs = {
  host: process.env.HOST || CONSTANTS.infrastructure.http.server.host,
  port: Number(process.env.PORT) || CONSTANTS.infrastructure.http.server.port,
};

export default httpConfigs;

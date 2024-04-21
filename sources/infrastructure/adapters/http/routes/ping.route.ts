import core from '../../database/index.js';
import CONSTANTS from '../../../../constants/index.js';
import { instance as http } from '../../../configs/http.config.js';

class PingRoute {
  public get(): void {
    http.get(CONSTANTS.infrastructure.http.routes.ping, async () => {
      return core.helpers.ping.send();
    });
  }
}

const instance = new PingRoute();

export default {
  instance: instance,
};

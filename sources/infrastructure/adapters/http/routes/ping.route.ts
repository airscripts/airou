import core from '../../core/index.js';
import CONSTANTS from '../../../../constants/index.js';
import { instance as http } from '../../../config/http.config.js';

class PingRoute {
  public get(): void {
    http.get(CONSTANTS.http.routes.ping, async () => {
      return core.helpers.ping.send();
    });
  }
}

const root = new PingRoute();

export default {
  root: root,
};

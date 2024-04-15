import core from '../../core/index.js';
import CONSTANTS from '../../constants/index.js';
import { instance as server } from '../../loaders/server.js';

export function init(): void {
  server.get(CONSTANTS.http.routes.ping, async () => {
    return core.ping.send();
  });
}

export default {
  init: init,
};

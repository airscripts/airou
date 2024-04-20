import core from '../../core/index.js';
import CONSTANTS from '../../../../constants/index.js';
import { instance as http } from '../../../config/http.config.js';

function init(): void {
  http.get(CONSTANTS.http.routes.ping, async () => {
    return core.ping.send();
  });
}

export default {
  init: init,
};

import CONSTANTS from '../core/constants.core.js';

class PingController {
  public send(): string {
    return CONSTANTS.ping;
  }
}

const instance = new PingController();

export default {
  instance: instance,
  PingController: PingController,
};

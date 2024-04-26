import CONSTANTS from '../core/constants.core.js';
import PingControllerInterface from '../interfaces/ping.controller.interface.js';

class PingController implements PingControllerInterface {
  public send(): string {
    return CONSTANTS.ping;
  }
}

const instance = new PingController();

export default {
  instance: instance,
  PingController: PingController,
};

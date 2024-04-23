import messages from '../errors/messages.error.js';
import errors from '../errors/exceptions.error.js';
import controllers from '../../infrastructure/local/controllers/index.js';
import PingServiceInterface from '../interfaces/ping.service.interface.js';
import INFRASTRUCTURE_CONSTANTS from '../../infrastructure/local/core/constants.core.js'
import PingControllerInterface from '../../infrastructure/local/interfaces/ping.controller.interface.js';

export class PingService implements PingServiceInterface {
  private controller: PingControllerInterface;

  constructor(
    controller: PingControllerInterface = controllers.locator.getController(
      INFRASTRUCTURE_CONSTANTS.controller.ping,
    ),
  ) {
    this.controller = controller;
  }

  public send(): string {
    try {
      return this.controller.send();
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }
}

export const instance = new PingService();

export default {
  instance: instance,
  PingService: PingService,
};

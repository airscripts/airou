import { ServiceDecorator } from '../core/decorators.core.js';
import controllers from '../../infrastructure/engine/controllers/index.js';
import PingServiceInterface from '../interfaces/ping.service.interface.js';
import INFRASTRUCTURE_CONSTANTS from '../../infrastructure/engine/core/constants.core.js'
import PingControllerInterface from '../../infrastructure/engine/interfaces/ping.controller.interface.js';

export class PingService implements PingServiceInterface {
  private controller: PingControllerInterface;

  constructor(
    controller: PingControllerInterface = controllers.locator.getController(
      INFRASTRUCTURE_CONSTANTS.controller.ping,
    ) as PingControllerInterface,
  ) {
    this.controller = controller;
  }

  @ServiceDecorator
  public send(): string {
    return this.controller.send();
  }
}

export const instance = new PingService();

export default {
  instance: instance,
  PingService: PingService,
};

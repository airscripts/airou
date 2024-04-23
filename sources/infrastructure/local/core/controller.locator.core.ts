import messages from '../errors/messages.error.js';
import errors from '../errors/exceptions.error.js';

import {
  ControllerInterface,
  ControllerLocatorInterface,
} from '../interfaces/controller.locator.core.interface.js';

class ControllerLocator<T> {
  private controllers: ControllerInterface<T> = {};

  public registerController(key: string, instance: T): void {
    this.controllers[key] = instance;
  }

  public getController(key: string): T {
    const controller = this.controllers[key];

    if (!controller)
      throw new errors.ControllerError(
        messages.controller.CONTROLLER_NOT_FOUND,
      );

    return controller;
  }
}

export const instance = new ControllerLocator<ControllerLocatorInterface>();

export default {
  instance: instance,
  ControllerLocator: ControllerLocator,
};

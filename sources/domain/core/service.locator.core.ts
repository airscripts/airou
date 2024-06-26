import messages from '../errors/messages.error.js';
import errors from '../errors/exceptions.error.js';

import {
  ServiceInterface,
  ServiceLocatorType,
} from '../interfaces/service.locator.core.interface.js';

class ServiceLocator<T> {
  private services: ServiceInterface<T> = {};

  public registerService(key: string, instance: T): void {
    this.services[key] = instance;
  }

  public getService(key: string): T {
    const service = this.services[key];

    if (!service)
      throw new errors.ServiceError(messages.service.SERVICE_NOT_FOUND);

    return service;
  }
}

export const locator = new ServiceLocator<ServiceLocatorType>();

export default {
  instance: locator,
  ServiceLocator: ServiceLocator,
};

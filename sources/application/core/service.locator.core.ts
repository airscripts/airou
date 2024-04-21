import messages from '../../errors/messages.error.js';
import errors from '../../errors/exceptions.error.js';

import {
  Service,
  ServiceLocatorPort,
} from '../../domain/ports/core/service.locator.core.port.js';

class ServiceLocator<T> {
  private services: Service<T> = {};

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

export const locator = new ServiceLocator<ServiceLocatorPort>();

export default {
  instance: locator,
  ServiceLocator: ServiceLocator,
};

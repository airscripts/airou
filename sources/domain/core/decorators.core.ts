import errors from '../errors/exceptions.error.js';
import { instance as log } from '../core/logger.core.js';

function ServiceDecorator(
  target: any,
  property: string,
  descriptor: PropertyDescriptor,
): any {
  const method = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    try {
      return await method.apply(this, args);
    } catch (error) {
      log.error(error);
      throw new errors.DomainError(error);
    }
  };

  return descriptor;
}

export { ServiceDecorator };

export default {
  ServiceDecorator: ServiceDecorator,
};

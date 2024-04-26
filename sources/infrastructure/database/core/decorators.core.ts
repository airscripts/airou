import { instance as log } from './logger.core.js';
import errors from '../errors/exceptions.error.js';

function RepositoryDecorator(
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
      throw new errors.DatabaseError(error);
    }
  };

  return descriptor;
}

export { RepositoryDecorator };

export default {
  RepositoryDecorator: RepositoryDecorator,
};

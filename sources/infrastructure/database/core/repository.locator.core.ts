import messages from '../errors/messages.error.js';
import errors from '../errors/exceptions.error.js';

import {
  RepositoryInterface,
  RepositoryLocatorType,
} from '../interfaces/repository.locator.core.interface.js';

class RepositoryLocator<T> {
  private repositories: RepositoryInterface<T> = {};

  public registerRepository(key: string, instance: T): void {
    this.repositories[key] = instance;
  }

  public getRepository(key: string): T {
    const repository = this.repositories[key];

    if (!repository)
      throw new errors.RepositoryError(
        messages.repository.REPOSITORY_NOT_FOUND,
      );

    return repository;
  }
}

export const instance = new RepositoryLocator<RepositoryLocatorType>();

export default {
  instance: instance,
  RepositoryLocator: RepositoryLocator,
};

import messages from '../../errors/messages.js';
import { UsersServiceType } from '../../domain/ports/users.js';
import errors, { assertIsError } from '../../errors/exceptions.js';
import repositories from '../../infrastructure/adapters/core/index.js';
import { UsersRepository } from '../../infrastructure/adapters/core/users.js';

import {
  UserServiceCreate,
  UserServiceUpdate,
} from '../../domain/model/user.js';

export class UsersService implements UsersServiceType {
  private repository: UsersRepository;

  constructor(
    repository: UsersRepository = new repositories.users.UsersRepository(),
  ) {
    this.repository = repository;
  }

  public async retrieve() {
    try {
      return await this.repository.retrieve();
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async create(user: UserServiceCreate) {
    try {
      if (!user.name)
        throw new errors.ServiceError(messages.service.MISSING_NAME.code);

      return await this.repository.create(user);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async update(user: UserServiceUpdate) {
    try {
      return await this.repository.update(user);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async remove(id: string) {
    try {
      return await this.repository.remove(id);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async retrieveById(id: string) {
    try {
      return await this.repository.retrieveById(id);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async retrieveByEmail(email: string) {
    try {
      return await this.repository.retrieveByEmail(email);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async disable(id: string) {
    try {
      return await this.repository.disable(id);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async enable(id: string) {
    try {
      return await this.repository.enable(id);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async deleteById(id: string) {
    try {
      return await this.repository.deleteById(id);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }
}

export const service = new UsersService();

export default {
  instance: service,
  UsersService: UsersService,
};

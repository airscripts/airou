import messages from '../../errors/messages.error.js';
import errors from '../../errors/exceptions.error.js';
import { UsersServiceType } from '../../domain/ports/users.service.port.js';
import repositories from '../../infrastructure/adapters/core/repositories/index.js';
import { UsersRepository } from '../../infrastructure/adapters/core/repositories/users.repository.js';

import {
  UserModel,
  UserServiceCreatePayload,
  UserServiceUpdatePayload,
  UserServiceRemovePayload,
  UserServiceEnablePayload,
  UserServiceDisablePayload,
  UserServiceDeleteByIdPayload,
  UserServiceRetrieveByIdPayload,
  UserServiceRetrieveByEmailPayload,
} from '../../domain/model/user.model.js';

export class UsersService implements UsersServiceType {
  private repository: UsersRepository;

  constructor(
    repository: UsersRepository = repositories.locator.getRepository('users'),
  ) {
    this.repository = repository;
  }

  public async retrieve(): Promise<UserModel[]> {
    try {
      return await this.repository.retrieve();
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async create(payload: UserServiceCreatePayload): Promise<UserModel> {
    try {
      if (!payload.name)
        throw new errors.ServiceError(messages.service.MISSING_NAME);

      return await this.repository.create(payload);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async update(payload: UserServiceUpdatePayload): Promise<UserModel> {
    try {
      return await this.repository.update(payload);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async remove(id: UserServiceRemovePayload): Promise<UserModel> {
    try {
      return await this.repository.remove(id);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async retrieveById(
    id: UserServiceRetrieveByIdPayload,
  ): Promise<UserModel | null> {
    try {
      return await this.repository.retrieveById(id);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async retrieveByEmail(
    email: UserServiceRetrieveByEmailPayload,
  ): Promise<UserModel | null> {
    try {
      return await this.repository.retrieveByEmail(email);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async disable(id: UserServiceDisablePayload): Promise<UserModel> {
    try {
      return await this.repository.disable(id);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async enable(id: UserServiceEnablePayload): Promise<UserModel> {
    try {
      return await this.repository.enable(id);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async deleteById(
    id: UserServiceDeleteByIdPayload,
  ): Promise<UserModel> {
    try {
      return await this.repository.deleteById(id);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }
}

export const service = new UsersService();

export default {
  instance: service,
  UsersService: UsersService,
};

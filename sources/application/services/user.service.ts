import messages from '../../errors/messages.error.js';
import errors from '../../errors/exceptions.error.js';
import repositories from '../../infrastructure/adapters/database/repositories/index.js';

import {
  UserServicePort,
  UserRepositoryPort,
} from '../../domain/ports/index.js';

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
} from '../../domain/models/user.model.js';

export class UserService implements UserServicePort {
  private repository: UserRepositoryPort;

  constructor(
    repository: UserRepositoryPort = repositories.locator.getRepository('user'),
  ) {
    this.repository = repository;
  }

  public async find(): Promise<UserModel[]> {
    try {
      return await this.repository.find();
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

  public async findById(
    id: UserServiceRetrieveByIdPayload,
  ): Promise<UserModel | null> {
    try {
      return await this.repository.findById(id);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async findByEmail(
    email: UserServiceRetrieveByEmailPayload,
  ): Promise<UserModel | null> {
    try {
      return await this.repository.findByEmail(email);
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

  public async removeById(
    id: UserServiceDeleteByIdPayload,
  ): Promise<UserModel> {
    try {
      return await this.repository.removeById(id);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }
}

export const instance = new UserService();

export default {
  instance: instance,
  UserService: UserService,
};

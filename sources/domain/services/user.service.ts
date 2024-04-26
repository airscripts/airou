import messages from '../errors/messages.error.js';
import errors from '../errors/exceptions.error.js';
import { UserModel } from '../../domain/models/user.model.js';
import controllers from '../../infrastructure/engine/controllers/index.js';
import repositories from '../../infrastructure/database/repositories/index.js';
import { UserServiceInterface } from '../interfaces/user.service.interface.js';
import INFRASTRUCTURE_ENGINE_CONSTANTS from '../../infrastructure/engine/core/constants.core.js';
import INFRASTRUCTURE_DATABASE_CONSTANTS from '../../infrastructure/database/core/constants.core.js';
import UserControllerInterface from '../../infrastructure/engine/interfaces/user.controller.interface.js';
import { UserRepositoryInterface } from '../../infrastructure/database/interfaces/user.repository.interface.js';

import {
  UserServiceCreatePayloadType,
  UserServiceUpdatePayloadType,
  UserServiceRemovePayloadType,
  UserServiceEnablePayloadType,
  UserServiceDisablePayloadType,
  UserServiceDeleteByIdPayloadType,
  UserServiceRetrieveByIdPayloadType,
  UserServiceRetrieveByEmailPayloadType,
} from '../interfaces/user.service.interface.js';

export class UserService implements UserServiceInterface {
  private repository: UserRepositoryInterface;
  private controller: UserControllerInterface;

  constructor(
    repository: UserRepositoryInterface = repositories.locator.getRepository(
      INFRASTRUCTURE_DATABASE_CONSTANTS.repository.user,
    ),
    controller: UserControllerInterface = controllers.locator.getController(
      INFRASTRUCTURE_ENGINE_CONSTANTS.controller.user.name,
    ) as UserControllerInterface,
  ) {
    this.repository = repository;
    this.controller = controller;
  }

  public async find(): Promise<UserModel[]> {
    try {
      return await this.repository.find();
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async create(
    payload: UserServiceCreatePayloadType,
  ): Promise<UserModel> {
    try {
      let data = { name: payload.name, email: payload.email };

      if (!data.name)
        data.name = this.controller.generate(
          INFRASTRUCTURE_ENGINE_CONSTANTS.controller.user.generate.name,
        );

      return await this.repository.create(data);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async update(
    payload: UserServiceUpdatePayloadType,
  ): Promise<UserModel> {
    try {
      return await this.repository.update(payload);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async remove(id: UserServiceRemovePayloadType): Promise<UserModel> {
    try {
      return await this.repository.remove(id);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async findById(
    id: UserServiceRetrieveByIdPayloadType,
  ): Promise<UserModel | null> {
    try {
      return await this.repository.findById(id);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async findByEmail(
    email: UserServiceRetrieveByEmailPayloadType,
  ): Promise<UserModel | null> {
    try {
      return await this.repository.findByEmail(email);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async disable(id: UserServiceDisablePayloadType): Promise<UserModel> {
    try {
      return await this.repository.disable(id);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async enable(id: UserServiceEnablePayloadType): Promise<UserModel> {
    try {
      return await this.repository.enable(id);
    } catch (error) {
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR);
    }
  }

  public async removeById(
    id: UserServiceDeleteByIdPayloadType,
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

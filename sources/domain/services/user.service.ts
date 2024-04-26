import { ServiceDecorator } from '../core/decorators.core.js';
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

  @ServiceDecorator
  public async find(): Promise<UserModel[]> {
    return await this.repository.find();
  }

  @ServiceDecorator
  public async create(
    payload: UserServiceCreatePayloadType,
  ): Promise<UserModel> {
    let data = {
      name: payload.name,
      email: payload.email,
      username: payload.username,
    };

    if (!data.name)
      data.name = this.controller.generate(
        INFRASTRUCTURE_ENGINE_CONSTANTS.controller.user.generate.name,
      );

    if (!data.username)
      data.username = this.controller.generate(
        INFRASTRUCTURE_ENGINE_CONSTANTS.controller.user.generate.username,
      );

    return await this.repository.create(data);
  }

  @ServiceDecorator
  public async update(
    payload: UserServiceUpdatePayloadType,
  ): Promise<UserModel> {
    const data = {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      username: payload.username,
    };

    return await this.repository.update(data);
  }

  @ServiceDecorator
  public async remove(id: UserServiceRemovePayloadType): Promise<UserModel> {
    return await this.repository.remove(id);
  }

  @ServiceDecorator
  public async findById(
    id: UserServiceRetrieveByIdPayloadType,
  ): Promise<UserModel | null> {
    return await this.repository.findById(id);
  }

  @ServiceDecorator
  public async findByEmail(
    email: UserServiceRetrieveByEmailPayloadType,
  ): Promise<UserModel | null> {
    return await this.repository.findByEmail(email);
  }

  @ServiceDecorator
  public async disable(id: UserServiceDisablePayloadType): Promise<UserModel> {
    return await this.repository.disable(id);
  }

  @ServiceDecorator
  public async enable(id: UserServiceEnablePayloadType): Promise<UserModel> {
    return await this.repository.enable(id);
  }

  @ServiceDecorator
  public async removeById(
    id: UserServiceDeleteByIdPayloadType,
  ): Promise<UserModel> {
    return await this.repository.removeById(id);
  }
}

export const instance = new UserService();

export default {
  instance: instance,
  UserService: UserService,
};

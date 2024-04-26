import { instance as database } from '../core/loader.core.js';
import { RepositoryDecorator } from '../core/decorators.core.js';
import { UserModel } from '../../../domain/models/user.model.js';

import {
  UserRepositoryInterface,
  UserRepositoryCreatePayloadType,
  UserRepositoryUpdatePayloadType,
  UserRepositoryRemovePayloadType,
  UserRepositoryEnablePayloadType,
  UserRepositoryDisablePayloadType,
  UserRepositoryDeleteByIdPayloadType,
  UserRepositoryRetrieveByIdPayloadType,
  UserRepositoryRetrieveByEmailPayloadType,
} from '../interfaces/user.repository.interface.js';

export class UserRepository implements UserRepositoryInterface {
  @RepositoryDecorator
  public async find(): Promise<UserModel[]> {
    return await database.user.findMany();
  }

  @RepositoryDecorator
  public async create(
    user: UserRepositoryCreatePayloadType,
  ): Promise<UserModel> {
    const payload = {
      name: user.name,
      email: user.email,
      username: user.username,
    };

    return await database.user.create({ data: payload });
  }

  @RepositoryDecorator
  public async update(
    user: UserRepositoryUpdatePayloadType,
  ): Promise<UserModel> {
    const conditions = { id: user.id };

    const payload = {
      name: user.name,
      email: user.email,
      username: user.username,
    };

    return await database.user.update({ where: conditions, data: payload });
  }

  @RepositoryDecorator
  public async remove(id: UserRepositoryRemovePayloadType): Promise<UserModel> {
    const conditions = { id: id };
    return await database.user.delete({ where: conditions });
  }

  @RepositoryDecorator
  public async findById(
    id: UserRepositoryRetrieveByIdPayloadType,
  ): Promise<UserModel | null> {
    const conditions = { id: id };
    return await database.user.findUnique({ where: conditions });
  }

  @RepositoryDecorator
  public async findByEmail(
    email: UserRepositoryRetrieveByEmailPayloadType,
  ): Promise<UserModel | null> {
    const conditions = { email: email };
    return await database.user.findUnique({ where: conditions });
  }

  @RepositoryDecorator
  public async disable(
    id: UserRepositoryDisablePayloadType,
  ): Promise<UserModel> {
    const conditions = { id: id };
    const payload = { isDisabled: true, disabledAt: new Date() };
    return await database.user.update({ where: conditions, data: payload });
  }

  @RepositoryDecorator
  public async enable(id: UserRepositoryEnablePayloadType): Promise<UserModel> {
    const conditions = { id: id };
    const payload = { isDisabled: false, disabledAt: null };
    return await database.user.update({ where: conditions, data: payload });
  }

  @RepositoryDecorator
  public async removeById(
    id: UserRepositoryDeleteByIdPayloadType,
  ): Promise<UserModel> {
    const conditions = { id: id };
    const payload = { isDeleted: true, deletedAt: new Date() };
    return await database.user.update({ where: conditions, data: payload });
  }
}

export const instance = new UserRepository();

export default {
  instance: instance,
  UserRepository: UserRepository,
};

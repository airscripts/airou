import messages from '../errors/messages.error.js';
import errors from '../errors/exceptions.error.js';
import { instance as database } from '../core/loader.core.js';
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
  public async find(): Promise<UserModel[]> {
    try {
      return await database.user.findMany();
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async create(
    user: UserRepositoryCreatePayloadType,
  ): Promise<UserModel> {
    try {
      const payload = { name: user.name, email: user.email };
      return await database.user.create({ data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async update(
    user: UserRepositoryUpdatePayloadType,
  ): Promise<UserModel> {
    try {
      const conditions = { id: user.id };
      const payload = { name: user.name };
      return await database.user.update({ where: conditions, data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.USER_NOT_FOUND);
    }
  }

  public async remove(id: UserRepositoryRemovePayloadType): Promise<UserModel> {
    try {
      const conditions = { id: id };
      return await database.user.delete({ where: conditions });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async findById(
    id: UserRepositoryRetrieveByIdPayloadType,
  ): Promise<UserModel | null> {
    try {
      const conditions = { id: id };
      return await database.user.findUnique({ where: conditions });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async findByEmail(
    email: UserRepositoryRetrieveByEmailPayloadType,
  ): Promise<UserModel | null> {
    try {
      const conditions = { email: email };
      return await database.user.findUnique({ where: conditions });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async disable(
    id: UserRepositoryDisablePayloadType,
  ): Promise<UserModel> {
    try {
      const conditions = { id: id };
      const payload = { isDisabled: true, disabledAt: new Date() };
      return await database.user.update({ where: conditions, data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async enable(id: UserRepositoryEnablePayloadType): Promise<UserModel> {
    try {
      const conditions = { id: id };
      const payload = { isDisabled: false, disabledAt: null };
      return await database.user.update({ where: conditions, data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async removeById(
    id: UserRepositoryDeleteByIdPayloadType,
  ): Promise<UserModel> {
    try {
      const conditions = { id: id };
      const payload = { isDeleted: true, deletedAt: new Date() };
      return await database.user.update({ where: conditions, data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }
}

export const instance = new UserRepository();

export default {
  instance: instance,
  UserRepository: UserRepository,
};

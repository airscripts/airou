import messages from '../../../../errors/messages.error.js';
import errors from '../../../../errors/exceptions.error.js';
import { UserModel } from '../../../../domain/models/user.model.js';
import { instance as database } from '../../../configs/database.config.js';

import {
  UserRepositoryPort,
  UserRepositoryCreatePayload,
  UserRepositoryUpdatePayload,
  UserRepositoryRemovePayload,
  UserRepositoryEnablePayload,
  UserRepositoryDisablePayload,
  UserRepositoryDeleteByIdPayload,
  UserRepositoryRetrieveByIdPayload,
  UserRepositoryRetrieveByEmailPayload,
} from '../../../../domain/ports/repositories/user.repository.port.js';

export class UserRepository implements UserRepositoryPort {
  public async find(): Promise<UserModel[]> {
    try {
      return await database.user.findMany();
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async create(user: UserRepositoryCreatePayload): Promise<UserModel> {
    try {
      const payload = { name: user.name, email: user.email };
      return await database.user.create({ data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async update(user: UserRepositoryUpdatePayload): Promise<UserModel> {
    try {
      const conditions = { id: user.id };
      const payload = { name: user.name };
      return await database.user.update({ where: conditions, data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.USER_NOT_FOUND);
    }
  }

  public async remove(id: UserRepositoryRemovePayload): Promise<UserModel> {
    try {
      const conditions = { id: id };
      return await database.user.delete({ where: conditions });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async findById(
    id: UserRepositoryRetrieveByIdPayload,
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
    email: UserRepositoryRetrieveByEmailPayload,
  ): Promise<UserModel | null> {
    try {
      const conditions = { email: email };
      return await database.user.findUnique({ where: conditions });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async disable(id: UserRepositoryDisablePayload): Promise<UserModel> {
    try {
      const conditions = { id: id };
      const payload = { isDisabled: true, disabledAt: new Date() };
      return await database.user.update({ where: conditions, data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async enable(id: UserRepositoryEnablePayload): Promise<UserModel> {
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
    id: UserRepositoryDeleteByIdPayload,
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

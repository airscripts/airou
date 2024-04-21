import messages from '../../../../errors/messages.error.js';
import errors from '../../../../errors/exceptions.error.js';
import { instance as database } from '../../../configs/database.config.js';
import { UsersRepositoryType } from '../../../../domain/ports/users.repository.port.js';

import {
  UserModel,
  UserRepositoryCreatePayload,
  UserRepositoryUpdatePayload,
  UserRepositoryRemovePayload,
  UserRepositoryEnablePayload,
  UserRepositoryDisablePayload,
  UserRepositoryDeleteByIdPayload,
  UserRepositoryRetrieveByIdPayload,
  UserRepositoryRetrieveByEmailPayload,
} from '../../../../domain/model/user.model.js';

export class UsersRepository implements UsersRepositoryType {
  public async retrieve(): Promise<UserModel[]> {
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

  public async retrieveById(
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

  public async retrieveByEmail(
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
      const payload = { isDisabled: true };
      return await database.user.update({ where: conditions, data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async enable(id: UserRepositoryEnablePayload): Promise<UserModel> {
    try {
      const conditions = { id: id };
      const payload = { isDisabled: false };
      return await database.user.update({ where: conditions, data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async deleteById(
    id: UserRepositoryDeleteByIdPayload,
  ): Promise<UserModel> {
    try {
      const conditions = { id: id };
      const payload = { isDeleted: true };
      return await database.user.update({ where: conditions, data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }
}

export const usersRepository = new UsersRepository();

export default {
  instance: usersRepository,
  UsersRepository: UsersRepository,
};

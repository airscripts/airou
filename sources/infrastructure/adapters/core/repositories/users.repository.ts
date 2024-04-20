import messages from '../../../../errors/messages.error.js';
import errors from '../../../../errors/exceptions.error.js';
import { instance as database } from '../../../config/database.config.js';
import { UsersRepositoryType } from '../../../../domain/ports/users.repository.interface.js';

import {
  UserRepositoryCreate,
  UserRepositoryUpdate,
} from '../../../../domain/model/user.model.js';

export class UsersRepository implements UsersRepositoryType {
  public async retrieve() {
    try {
      return await database.user.findMany();
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async create(user: UserRepositoryCreate) {
    try {
      const payload = { name: user.name, email: user.email };
      return await database.user.create({ data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async update(user: UserRepositoryUpdate) {
    try {
      const conditions = { id: user.id };
      const payload = { name: user.name };
      return await database.user.update({ where: conditions, data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.USER_NOT_FOUND);
    }
  }

  public async remove(id: string) {
    try {
      const conditions = { id: id };
      return await database.user.delete({ where: conditions });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async retrieveById(id: string) {
    try {
      const conditions = { id: id };
      return await database.user.findUnique({ where: conditions });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async retrieveByEmail(email: string) {
    try {
      const conditions = { email: email };
      return await database.user.findUnique({ where: conditions });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async disable(id: string) {
    try {
      const conditions = { id: id };
      const payload = { isDisabled: true };
      return await database.user.update({ where: conditions, data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async enable(id: string) {
    try {
      const conditions = { id: id };
      const payload = { isDisabled: false };
      return await database.user.update({ where: conditions, data: payload });
    } catch (error) {
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async deleteById(id: string) {
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
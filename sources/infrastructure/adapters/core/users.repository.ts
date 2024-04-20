import messages from '../../../errors/messages.error.js';
import { instance as database } from '../../config/database.config.js';
import errors, { assertIsError } from '../../../errors/exceptions.error.js';
import { UsersRepositoryType } from '../../../domain/ports/users.repository.interface.js';

import {
  UserRepositoryCreate,
  UserRepositoryUpdate,
} from '../../../domain/model/user.model.js';

export class UsersRepository implements UsersRepositoryType {
  public async retrieve() {
    try {
      return await database.user.findMany();
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async create(user: UserRepositoryCreate) {
    try {
      return await database.user.create({
        data: { name: user.name, email: user.email },
      });
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async update(user: UserRepositoryUpdate) {
    try {
      return await database.user.update({
        where: { id: user.id },
        data: { name: user.name },
      });
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.RepositoryError(messages.repository.USER_NOT_FOUND);
    }
  }

  public async remove(id: string) {
    try {
      return await database.user.delete({
        where: { id: id },
      });
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async retrieveById(id: string) {
    try {
      return await database.user.findUnique({
        where: { id: id },
      });
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async retrieveByEmail(email: string) {
    try {
      return await database.user.findUnique({
        where: { email: email },
      });
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async disable(id: string) {
    try {
      return await database.user.update({
        where: { id: id },
        data: { isDisabled: true },
      });
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async enable(id: string) {
    try {
      return await database.user.update({
        where: { id: id },
        data: { isDisabled: false },
      });
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.RepositoryError(messages.repository.DATABASE_ERROR);
    }
  }

  public async deleteById(id: string) {
    try {
      return await database.user.update({
        where: { id: id },
        data: { isDeleted: true },
      });
    } catch (error) {
      assertIsError(error);
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

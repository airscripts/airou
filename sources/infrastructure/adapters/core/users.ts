import messages from '../../../errors/messages.js';
import { instance as database } from '../../config/database.js';
import errors, { assertIsError } from '../../../errors/exceptions.js';

import {
  UserRepositoryCreate,
  UserRepositoryUpdate,
} from '../../../domain/model/user.js';

export class UsersRepository {
  public async retrieve() {
    try {
      return await database.user.findMany();
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
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
      throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
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
      throw new errors.DatabaseError(messages.database.USER_NOT_FOUND.code);
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
      throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
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
      throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
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
      throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
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
      throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
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
      throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
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
      throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
    }
  }
}

export const usersRepository = new UsersRepository();

export default {
  instance: usersRepository,
  UsersRepository: UsersRepository,
};

import messages from '../application/messages.js';
import errors, { assertIsError } from '../application/errors.js';
import { instance as database } from '../application/database.js';
import { DatabaseCreate, DatabaseUpdate } from '../interfaces/users.js';

async function retrieve() {
  try {
    return await database.user.findMany();
  } catch (error) {
    assertIsError(error);
    console.error(error);
    throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
  }
}

async function create(user: DatabaseCreate) {
  try {
    return await database.user.create({
      data: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    assertIsError(error);
    console.error(error);
    throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
  }
}

async function update(user: DatabaseUpdate) {
  try {
    return await database.user.update({
      where: {
        id: user.id,
      },

      data: {
        name: user.name,
      },
    });
  } catch (error) {
    assertIsError(error);
    console.error(error);
    throw new errors.DatabaseError(messages.database.USER_NOT_FOUND.code);
  }
}

async function remove(id: string) {
  try {
    return await database.user.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    assertIsError(error);
    console.error(error);
    throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
  }
}

async function retrieveById(id: string) {
  try {
    return await database.user.findUnique({
      where: {
        id: id,
      },
    });
  } catch (error) {
    assertIsError(error);
    console.error(error);
    throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
  }
}

async function retrieveByEmail(email: string) {
  try {
    return await database.user.findUnique({
      where: {
        email: email,
      },
    });
  } catch (error) {
    assertIsError(error);
    console.error(error);
    throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
  }
}

async function disable(id: string) {
  try {
    return await database.user.update({
      where: {
        id: id,
      },

      data: {
        isDisabled: true,
      },
    });
  } catch (error) {
    assertIsError(error);
    console.error(error);
    throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
  }
}

async function enable(id: string) {
  try {
    return await database.user.update({
      where: {
        id: id,
      },

      data: {
        isDisabled: false,
      },
    });
  } catch (error) {
    assertIsError(error);
    console.error(error);
    throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
  }
}

async function deleteById(id: string) {
  try {
    return await database.user.update({
      where: {
        id: id,
      },

      data: {
        isDeleted: true,
      },
    });
  } catch (error) {
    assertIsError(error);
    console.error(error);
    throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
  }
}

export default {
  create: create,
  update: update,
  remove: remove,
  enable: enable,
  disable: disable,
  retrieve: retrieve,
  deleteById: deleteById,
  retrieveById: retrieveById,
  retrieveByEmail: retrieveByEmail,
};

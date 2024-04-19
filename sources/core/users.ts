import messages from '../application/messages.js';
import errors, { assertIsError } from '../application/errors.js';
import { instance as database } from '../application/database.js';

import {
  ServiceCreate,
  ServiceUpdate,
  RepositoryCreate,
  RepositoryUpdate,
} from '../interfaces/users.js';

class Service {
  private repository: Repository;

  constructor(repository: Repository = new Repository()) {
    this.repository = repository;
  }

  public async retrieve() {
    try {
      return await this.repository.retrieve();
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async create(user: ServiceCreate) {
    try {
      if (!user.name)
        throw new errors.ServiceError(messages.service.MISSING_NAME.code);

      return await this.repository.create(user);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async update(user: ServiceUpdate) {
    try {
      return await this.repository.update(user);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async remove(id: string) {
    try {
      return await this.repository.remove(id);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async retrieveById(id: string) {
    try {
      return await this.repository.retrieveById(id);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async retrieveByEmail(email: string) {
    try {
      return await this.repository.retrieveByEmail(email);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async disable(id: string) {
    try {
      return await this.repository.disable(id);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async enable(id: string) {
    try {
      return await this.repository.enable(id);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }

  public async deleteById(id: string) {
    try {
      return await this.repository.deleteById(id);
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.ServiceError(messages.service.SERVICE_ERROR.code);
    }
  }
}

class Repository {
  public async retrieve() {
    try {
      return await database.user.findMany();
    } catch (error) {
      assertIsError(error);
      console.error(error);
      throw new errors.DatabaseError(messages.database.DATABASE_ERROR.code);
    }
  }

  public async create(user: RepositoryCreate) {
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

  public async update(user: RepositoryUpdate) {
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

const service = new Service();
const repository = new Repository();

export default {
  service: service,
  repository: repository,
};

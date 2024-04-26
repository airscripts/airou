import { Prisma } from '@prisma/client';

import messages from './messages.error.js';
import CONSTANTS from '../core/constants.core.js';

import {
  RepositoryErrorInterface,
  DatabaseErrorInterface,
} from '../interfaces/exceptions.error.interface.js';

class DatabaseError implements DatabaseErrorInterface {
  constructor(public error: unknown) {
    this.generate(error);
  }

  private generate(error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case CONSTANTS.error.repository.system.code.uniqueConstraintFailed:
          throw new RepositoryError({
            code: messages.repository.UNIQUE_CONSTRAINT_FAILED.code,
            message: messages.repository.UNIQUE_CONSTRAINT_FAILED.message,
            meta: { field: (error.meta as { target: string[] })?.target },
          });

        default:
          throw new RepositoryError({
            code: messages.repository.REPOSITORY_ERROR.code,
            message: messages.repository.REPOSITORY_ERROR.message,
          });
      }
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

class RepositoryError extends Error implements RepositoryErrorInterface {
  public code: string;
  public message: string;
  public meta?: Record<string, any>;

  constructor(
    public error: {
      code: string;
      message: string;
      meta?: Record<string, any>;
    },
  ) {
    super(error.message);
    this.code = error.code;
    this.meta = error.meta;
    this.message = error.message;
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  public toJSON() {
    return {
      meta: this.meta,
      code: this.code,
      message: this.message,
    };
  }
}

export { RepositoryError, DatabaseError };

export default {
  RepositoryError: RepositoryError,
  DatabaseError: DatabaseError,
};

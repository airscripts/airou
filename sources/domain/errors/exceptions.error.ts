import messages from './messages.error.js';
import CONSTANTS from '../core/constants.core.js';
import { RepositoryError } from '../../infrastructure/database/errors/exceptions.error.js';

class DomainError {
  constructor(public error: unknown) {
    console.error(error);
    this.generate(error);
  }

  private generate(error: unknown) {
    if (error instanceof RepositoryError) {
      switch (error.code) {
        case CONSTANTS.error.system.repository.code.uniqueConstraintFailed:
          throw new ServiceError({
            meta: { field: error.meta?.field },
            code: messages.service.UNIQUE_CONSTRAINT_FAILED.code,
            message: messages.service.UNIQUE_CONSTRAINT_FAILED.message,
          });

        default:
          throw new ServiceError({
            code: messages.service.SERVICE_ERROR.code,
            message: messages.service.SERVICE_ERROR.message,
          });
      }
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

class ServiceError extends Error {
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

  toJSON() {
    return {
      code: this.code,
      meta: this.meta,
      message: this.message,
    };
  }
}

export { DomainError, ServiceError };

export default {
  DomainError: DomainError,
  ServiceError: ServiceError,
};

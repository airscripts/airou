import messages from './messages.error.js';
import { Message } from '../domain/model/application.model.js';

class RepositoryError extends Error {
  constructor(public error: Message) {
    super(error.message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  
  toJSON() {
    return {
      code: this.error.code,
      message: this.error.message,
    };
  }
}

class ServiceError extends Error {
  constructor(public error: Message) {
    super(error.message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  
  toJSON() {
    return {
      code: this.error.code,
      message: this.error.message,
    };
  }
}

class NetworkError extends Error {
  constructor(public error: Message) {
    super(error.message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      code: this.error.code,
      message: this.error.message,
    };
  }
}

class ApplicationError extends Error {
  constructor(public error: Message) {
    super(error.message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      code: this.error.code,
      message: this.error.message,
    };
  }
}

class ValidationError extends Error {
  constructor(public error: Message) {
    super(error.message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  
  toJSON() {
    return {
      code: this.error.code,
      message: this.error.message,
    };
  }
}

class BotError extends Error {
  constructor(public error: Message) {
    super(error.message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      code: this.error.code,
      message: this.error.message,
    };
  }
}

export function assertIsError(error: unknown): asserts error is Error {
  if (!(error instanceof Error)) {
    throw error;
  }
}

export default {
  BotError: BotError,
  ServiceError: ServiceError,
  NetworkError: NetworkError,
  RepositoryError: RepositoryError,
  ValidationError: ValidationError,
  ApplicationError: ApplicationError,
};

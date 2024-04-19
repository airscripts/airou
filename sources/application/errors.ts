import messages from './messages.js';

class DatabaseError extends Error {
  constructor(public code: string) {
    super(messages.database[code].message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  
  toJSON() {
    return {
      code: this.code,
      message: this.message,
    };
  }
}

class ServiceError extends Error {
  constructor(public code: string) {
    super(messages.service[code].message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  
  toJSON() {
    return {
      code: this.code,
      message: this.message,
    };
  }
}

class NetworkError extends Error {
  constructor(public code: string) {
    super(messages.network[code].message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
    };
  }
}

class ApplicationError extends Error {
  constructor(public code: string) {
    super(messages.application[code].message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
    };
  }
}

class ValidationError extends Error {
  constructor(public code: string) {
    super(messages.validation[code].message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  
  toJSON() {
    return {
      code: this.code,
      message: this.message,
    };
  }
}

class BotError extends Error {
  constructor(public code: string) {
    super(messages.bot[code].message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
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
  DatabaseError: DatabaseError,
  ValidationError: ValidationError,
  ApplicationError: ApplicationError,
};

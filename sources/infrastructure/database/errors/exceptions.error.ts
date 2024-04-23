import { MessageInterface } from '../interfaces/message.interface.js';

class RepositoryError extends Error {
  constructor(public error: MessageInterface) {
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

export default {
  RepositoryError: RepositoryError,
};

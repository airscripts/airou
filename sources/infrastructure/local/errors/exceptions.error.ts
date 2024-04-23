import { Message } from '../interfaces/message.interface.js';

class ControllerError extends Error {
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

export default {
  ControllerError: ControllerError,
};

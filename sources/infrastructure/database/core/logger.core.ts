import pino from 'pino';
import CONSTANTS from './constants.core.js';

const configs = {
  timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
};

const file = pino.transport({
  targets: [
    {
      target: 'pino/file',
      options: { destination: 1 },
    },

    {
      target: 'pino/file',
      options: { destination: CONSTANTS.log.destination[0], mkdir: true },
    },
  ],
});

class Logger {
  private logger: pino.Logger;

  constructor(logger: pino.Logger = pino(configs, file)) {
    this.logger = logger;
  }

  public get(): pino.Logger {
    return this.logger;
  }
}

const object: Logger = new Logger();
const instance: pino.Logger = object.get();
export { object, instance };

export default {
  object: object,
  instance: instance,
};

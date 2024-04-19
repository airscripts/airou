import translations from './translations.js';
import CONSTANTS from '../constants/index.js';
import { Message } from '../interfaces/application.js';

const database: Message = {
  DATABASE_ERROR: {
    code: CONSTANTS.application.errors.database.codes.databaseError,
    message: translations.en.errors.database.messages.databaseError,
  },

  USER_NOT_FOUND: {
    code: CONSTANTS.application.errors.database.codes.userNotFound,
    message: translations.en.errors.database.messages.userNotFound,
  },

  USER_ALREADY_EXISTS: {
    code: CONSTANTS.application.errors.database.codes.userAlreadyExists,
    message: translations.en.errors.database.messages.userAlreadyExists,
  },

  USER_IS_DISABLED: {
    code: CONSTANTS.application.errors.database.codes.userIsDisabled,
    message: translations.en.errors.database.messages.userIsDisabled,
  },

  USER_IS_DELETED: {
    code: CONSTANTS.application.errors.database.codes.userIsDeleted,
    message: translations.en.errors.database.messages.userIsDeleted,
  },

  USER_IS_NOT_DISABLED: {
    code: CONSTANTS.application.errors.database.codes.userisNotDisabled,
    message: translations.en.errors.database.messages.userIsNotDisabled,
  },

  USER_IS_NOT_DELETED: {
    code: CONSTANTS.application.errors.database.codes.userIsNotDeleted,
    message: translations.en.errors.database.messages.userIsNotDeleted,
  },
};

const bot: Message = {};
const network: Message = {};
const validation: Message = {};
const application: Message = {};

export default {
  bot: bot,
  network: network,
  database: database,
  validation: validation,
  application: application,
};

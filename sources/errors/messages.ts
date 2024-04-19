import CONSTANTS from '../constants/index.js';
import translations from '../translations/index.js';
import { Message } from '../domain/model/application.js';

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

const service: Message = {
  SERVICE_ERROR: {
    code: CONSTANTS.application.errors.service.codes.serviceError,
    message: translations.en.errors.service.messages.serviceError,
  },

  MISSING_USER_NAME: {
    code: CONSTANTS.application.errors.service.codes.missingUserName,
    message: translations.en.errors.service.messages.missingUserName,
  },
};

const bot: Message = {};
const network: Message = {};
const validation: Message = {};
const application: Message = {};

export default {
  bot: bot,
  service: service,
  network: network,
  database: database,
  validation: validation,
  application: application,
};

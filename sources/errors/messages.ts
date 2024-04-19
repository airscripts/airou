import CONSTANTS from '../constants/index.js';
import translations from '../translations/index.js';
import { Message } from '../domain/model/application.js';

const repository: Message = {
  DATABASE_ERROR: {
    code: CONSTANTS.application.errors.repository.codes.databaseError,
    message: translations.en.errors.repository.messages.databaseError,
  },

  USER_NOT_FOUND: {
    code: CONSTANTS.application.errors.repository.codes.userNotFound,
    message: translations.en.errors.repository.messages.userNotFound,
  },

  USER_ALREADY_EXISTS: {
    code: CONSTANTS.application.errors.repository.codes.userAlreadyExists,
    message: translations.en.errors.repository.messages.userAlreadyExists,
  },

  USER_IS_DISABLED: {
    code: CONSTANTS.application.errors.repository.codes.userIsDisabled,
    message: translations.en.errors.repository.messages.userIsDisabled,
  },

  USER_IS_DELETED: {
    code: CONSTANTS.application.errors.repository.codes.userIsDeleted,
    message: translations.en.errors.repository.messages.userIsDeleted,
  },

  USER_IS_NOT_DISABLED: {
    code: CONSTANTS.application.errors.repository.codes.userisNotDisabled,
    message: translations.en.errors.repository.messages.userIsNotDisabled,
  },

  USER_IS_NOT_DELETED: {
    code: CONSTANTS.application.errors.repository.codes.userIsNotDeleted,
    message: translations.en.errors.repository.messages.userIsNotDeleted,
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
  repository: repository,
  validation: validation,
  application: application,
};

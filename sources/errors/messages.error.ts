import CONSTANTS from '../constants/index.js';
import translations from '../translations/index.js';
import MessageModel from '../domain/models/message.model.js';

const repository: MessageModel = {
  DATABASE_ERROR: {
    code: CONSTANTS.error.repository.code.databaseError,
    message: translations.en.errors.repository.messages.databaseError,
  },

  REPOSITORY_NOT_FOUND: {
    code: CONSTANTS.error.repository.code.repositoryNotFound,
    message: translations.en.errors.repository.messages.repositoryNotFound,
  },

  USER_NOT_FOUND: {
    code: CONSTANTS.error.repository.code.userNotFound,
    message: translations.en.errors.repository.messages.userNotFound,
  },

  USER_ALREADY_EXISTS: {
    code: CONSTANTS.error.repository.code.userAlreadyExists,
    message: translations.en.errors.repository.messages.userAlreadyExists,
  },

  USER_IS_DISABLED: {
    code: CONSTANTS.error.repository.code.userIsDisabled,
    message: translations.en.errors.repository.messages.userIsDisabled,
  },

  USER_IS_DELETED: {
    code: CONSTANTS.error.repository.code.userIsDeleted,
    message: translations.en.errors.repository.messages.userIsDeleted,
  },

  USER_IS_NOT_DISABLED: {
    code: CONSTANTS.error.repository.code.userisNotDisabled,
    message: translations.en.errors.repository.messages.userIsNotDisabled,
  },

  USER_IS_NOT_DELETED: {
    code: CONSTANTS.error.repository.code.userIsNotDeleted,
    message: translations.en.errors.repository.messages.userIsNotDeleted,
  },
};

const service: MessageModel = {
  SERVICE_ERROR: {
    code: CONSTANTS.error.service.code.serviceError,
    message: translations.en.errors.service.messages.serviceError,
  },

  SERVICE_NOT_FOUND: {
    code: CONSTANTS.error.service.code.serviceNotFound,
    message: translations.en.errors.service.messages.serviceNotFound,
  },

  MISSING_USER_NAME: {
    code: CONSTANTS.error.service.code.missingUserName,
    message: translations.en.errors.service.messages.missingUserName,
  },
};

const bot: MessageModel = {};
const network: MessageModel = {};
const validation: MessageModel = {};
const application: MessageModel = {};

export default {
  bot: bot,
  service: service,
  network: network,
  repository: repository,
  validation: validation,
  application: application,
};

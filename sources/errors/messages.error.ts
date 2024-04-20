import CONSTANTS from '../constants/index.js';
import translations from '../translations/index.js';
import MessageMap from '../domain/model/message.model.js';

const repository: MessageMap = {
  DATABASE_ERROR: {
    code: CONSTANTS.application.errors.repository.codes.databaseError,
    message: translations.en.errors.repository.messages.databaseError,
  },

  REPOSITORY_NOT_FOUND: {
    code: CONSTANTS.application.errors.repository.codes.repositoryNotFound,
    message: translations.en.errors.repository.messages.repositoryNotFound,
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

const service: MessageMap = {
  SERVICE_ERROR: {
    code: CONSTANTS.application.errors.service.codes.serviceError,
    message: translations.en.errors.service.messages.serviceError,
  },

  SERVICE_NOT_FOUND: {
    code: CONSTANTS.application.errors.service.codes.serviceNotFound,
    message: translations.en.errors.service.messages.serviceNotFound,
  },

  MISSING_USER_NAME: {
    code: CONSTANTS.application.errors.service.codes.missingUserName,
    message: translations.en.errors.service.messages.missingUserName,
  },
};

const bot: MessageMap = {};
const network: MessageMap = {};
const validation: MessageMap = {};
const application: MessageMap = {};

export default {
  bot: bot,
  service: service,
  network: network,
  repository: repository,
  validation: validation,
  application: application,
};

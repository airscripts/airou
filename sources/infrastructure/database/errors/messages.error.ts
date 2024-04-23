import CONSTANTS from '../core/constants.core.js';
import translations from '../translations/index.js';
import MessageMapInterface from '../interfaces/message.interface.js';

const repository: MessageMapInterface = {
  DATABASE_ERROR: {
    code: CONSTANTS.error.repository.code.databaseError,
    message: translations.en.error.repository.message.databaseError,
  },

  REPOSITORY_NOT_FOUND: {
    code: CONSTANTS.error.repository.code.repositoryNotFound,
    message: translations.en.error.repository.message.repositoryNotFound,
  },

  USER_NOT_FOUND: {
    code: CONSTANTS.error.repository.code.userNotFound,
    message: translations.en.error.repository.message.userNotFound,
  },

  USER_ALREADY_EXISTS: {
    code: CONSTANTS.error.repository.code.userAlreadyExists,
    message: translations.en.error.repository.message.userAlreadyExists,
  },

  USER_IS_DISABLED: {
    code: CONSTANTS.error.repository.code.userIsDisabled,
    message: translations.en.error.repository.message.userIsDisabled,
  },

  USER_IS_DELETED: {
    code: CONSTANTS.error.repository.code.userIsDeleted,
    message: translations.en.error.repository.message.userIsDeleted,
  },

  USER_IS_NOT_DISABLED: {
    code: CONSTANTS.error.repository.code.userisNotDisabled,
    message: translations.en.error.repository.message.userIsNotDisabled,
  },

  USER_IS_NOT_DELETED: {
    code: CONSTANTS.error.repository.code.userIsNotDeleted,
    message: translations.en.error.repository.message.userIsNotDeleted,
  },
};

export default {
  repository: repository,
};

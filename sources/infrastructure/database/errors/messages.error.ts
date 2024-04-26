import CONSTANTS from '../core/constants.core.js';
import translations from '../translations/index.js';
import MessageMapInterface from '../interfaces/message.interface.js';

const database: MessageMapInterface = {
  DATABASE_ERROR: {
    code: CONSTANTS.error.database.code.databaseError,
    message: translations.en.error.database.message.databaseError,
  },
};

const repository: MessageMapInterface = {
  REPOSITORY_ERROR: {
    code: CONSTANTS.error.repository.code.repositoryError,
    message: translations.en.error.repository.message.repositoryError,
  },

  UNIQUE_CONSTRAINT_FAILED: {
    code: CONSTANTS.error.repository.code.uniqueConstraintFailed,
    message: translations.en.error.repository.message.uniqueConstraintFailed,
  },
};

export default {
  repository: repository,
  database: database,
};

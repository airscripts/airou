import CONSTANTS from '../core/constants.core.js';
import translations from '../translations/index.js';
import MessageMapInterface from '../interfaces/message.interface.js';

const service: MessageMapInterface = {
  SERVICE_ERROR: {
    code: CONSTANTS.error.service.code.serviceError,
    message: translations.en.error.service.message.serviceError,
  },

  SERVICE_NOT_FOUND: {
    code: CONSTANTS.error.service.code.serviceNotFound,
    message: translations.en.error.service.message.serviceNotFound,
  },

  MISSING_USER_NAME: {
    code: CONSTANTS.error.service.code.missingUserName,
    message: translations.en.error.service.message.missingUserName,
  },

  UNIQUE_CONSTRAINT_FAILED: {
    code: CONSTANTS.error.service.code.uniqueConstraintFailed,
    message: translations.en.error.service.message.uniqueConstraintFailed,
  },
};

export default {
  service: service,
};

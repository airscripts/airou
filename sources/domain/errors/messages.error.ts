import CONSTANTS from '../core/constants.core.js';
import translations from '../translations/index.js';
import MessageModel from '../models/message.model.js';

const service: MessageModel = {
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
};

export default {
  service: service,
};

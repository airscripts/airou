import CONSTANTS from '../core/constants.core.js';
import translations from '../translations/index.js';
import MessageMapInterface from '../interfaces/message.interface.js';

const controller: MessageMapInterface = {
  CONTROLLER_ERROR: {
    code: CONSTANTS.error.controller.code.controllerError,
    message: translations.en.error.controller.message.controllerError,
  },

  CONTROLLER_NOT_FOUND: {
    code: CONSTANTS.error.controller.code.controllerNotFound,
    message: translations.en.error.controller.message.controllerNotFound,
  },
};

export default {
  controller: controller,
};

import users from './users.service.js';
import locator from './locator.service.js';
import CONSTANTS from '../../constants/index.js';

locator.instance.registerService(
  CONSTANTS.application.services.users,
  users.instance,
);

export default {
  locator: locator.instance,
};

import users from './users.repository.js';
import locator from './locator.repository.js';
import CONSTANTS from '../../../../constants/index.js';

locator.instance.registerRepository(
  CONSTANTS.application.repositories.users,
  users.instance,
);

export default {
  locator: locator.instance,
};

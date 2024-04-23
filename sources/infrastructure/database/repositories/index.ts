import core from '../core/index.js';
import user from './user.repository.js';
import CONSTANTS from '../core/constants.core.js';

core.locator.instance.registerRepository(
  CONSTANTS.repository.user,
  user.instance,
);

export default {
  locator: core.locator.instance,
};

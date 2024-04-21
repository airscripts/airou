import user from './user.repository.js';
import core from '../core/index.js';
import CONSTANTS from '../../../../constants/index.js';

core.locator.instance.registerRepository(
  CONSTANTS.infrastructure.core.repository.user,
  user.instance,
);

export default {
  locator: core.locator.instance,
};

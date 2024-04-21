import user from './user.service.js';
import core from '../core/index.js';
import CONSTANTS from '../../constants/index.js';

core.locator.instance.registerService(
  CONSTANTS.application.service.user,
  user.instance,
);

export default {
  locator: core.locator.instance,
};

import core from '../core/index.js';
import user from './user.service.js';
import ping from './ping.service.js';
import CONSTANTS from '../core/constants.core.js';

core.locator.instance.registerService(
  CONSTANTS.service.user,
  user.instance,
);

core.locator.instance.registerService(
  CONSTANTS.service.ping,
  ping.instance,
);

export default {
  locator: core.locator.instance,
};

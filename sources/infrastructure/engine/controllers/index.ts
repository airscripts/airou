import core from '../core/index.js';
import user from './user.controller.js';
import ping from './ping.controller.js';
import CONSTANTS from '../core/constants.core.js';

core.locator.instance.registerController(
  CONSTANTS.controller.ping,
  ping.instance,
);

core.locator.instance.registerController(
  CONSTANTS.controller.user.name,
  user.instance,
);

export default {
  locator: core.locator.instance,
};

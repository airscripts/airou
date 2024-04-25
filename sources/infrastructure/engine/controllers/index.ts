import core from '../core/index.js';
import ping from './ping.controller.js';
import CONSTANTS from '../core/constants.core.js';

core.locator.instance.registerController(
  CONSTANTS.controller.ping,
  ping.instance,
);

export default {
  locator: core.locator.instance,
};

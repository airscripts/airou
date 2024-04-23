import CONSTANTS from '../../core/constants.core.js';
import { instance as http } from '../../core/http.core.js';
import services from '../../../../domain/services/index.js';
import DOMAIN_CONSTANTS from '../../../../domain/core/constants.core.js';
import PingServiceInterface from '../../../../domain/interfaces/ping.service.interface.js';

class PingRoute {
  private service: PingServiceInterface = services.locator.getService(
    DOMAIN_CONSTANTS.service.ping,
  ) as PingServiceInterface;

  public get(): void {
    http.get(CONSTANTS.http.routes.ping, async () => {
      return this.service.send();
    });
  }
}

const instance = new PingRoute();

export default {
  instance: instance,
};

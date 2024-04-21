import UserServicePort from '../services/user.service.port.js';

type ServiceLocatorPort = UserServicePort;

interface Service<T> {
  [key: string]: T;
}

export { ServiceLocatorPort, Service };
export default ServiceLocatorPort;

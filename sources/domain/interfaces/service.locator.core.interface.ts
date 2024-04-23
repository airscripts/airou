import UserServiceInterface from './user.service.interface.js';
import PingServiceInterface from './ping.service.interface.js';

type ServiceLocatorType = UserServiceInterface | PingServiceInterface;

interface ServiceInterface<T> {
  [key: string]: T;
}

export { ServiceLocatorType, ServiceInterface };
export default ServiceLocatorType;

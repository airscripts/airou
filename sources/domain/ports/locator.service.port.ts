import UsersService from './users.service.port.js';

type ServiceLocatorType = UsersService;

interface Service<T> {
  [key: string]: T;
}

export { ServiceLocatorType, Service };
export default ServiceLocatorType;

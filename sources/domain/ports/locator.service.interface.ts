import UsersService from './users.service.interface.js';

type ServiceLocatorType = UsersService;

interface Service<T> {
  [key: string]: T;
}

export { ServiceLocatorType, Service };
export default ServiceLocatorType;

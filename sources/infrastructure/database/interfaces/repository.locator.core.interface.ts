import UserRepositoryInterface from './user.repository.interface.js';

type RepositoryLocatorType = UserRepositoryInterface;

interface RepositoryInterface<T> {
  [key: string]: T;
}

export { RepositoryLocatorType, RepositoryInterface };
export default RepositoryLocatorType;

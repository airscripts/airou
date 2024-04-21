import UserRepositoryPort from '../repositories/user.repository.port.js';

type RepositoryLocatorPort = UserRepositoryPort;

interface Repository<T> {
  [key: string]: T;
}

export { RepositoryLocatorPort, Repository };
export default RepositoryLocatorPort;

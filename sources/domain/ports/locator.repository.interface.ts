import UsersRepository from './users.repository.interface.js';

type RepositoryLocatorType = UsersRepository;

interface Repository<T> {
  [key: string]: T;
}

export { RepositoryLocatorType, Repository };
export default RepositoryLocatorType;

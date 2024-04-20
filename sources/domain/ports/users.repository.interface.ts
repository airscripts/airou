import {
  User,
  UserRepositoryCreate,
  UserRepositoryUpdate,
} from '../model/user.model.js';

type UsersRepositoryType = UsersRepository;

interface UsersRepository {
  retrieve(): Promise<User[]>;
  remove(id: string): Promise<User>;
  enable(id: string): Promise<User>;
  disable(id: string): Promise<User>;
  deleteById(id: string): Promise<User>;
  retrieveById(id: string): Promise<User | null>;
  create(user: UserRepositoryCreate): Promise<User>;
  update(user: UserRepositoryUpdate): Promise<User>;
  retrieveByEmail(email: string): Promise<User | null>;
}

export { UsersRepository, UsersRepositoryType };
export default UsersRepository;

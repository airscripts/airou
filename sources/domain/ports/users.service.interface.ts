import {
  User,
  UserServiceCreate,
  UserServiceUpdate,
} from '../model/user.model.js';

type UsersServiceType = UsersService;
export { UsersService, UsersServiceType };

export default interface UsersService {
  retrieve(): Promise<User[]>;
  remove(id: string): Promise<User>;
  enable(id: string): Promise<User>;
  disable(id: string): Promise<User>;
  deleteById(id: string): Promise<User>;
  create(user: UserServiceCreate): Promise<User>;
  update(user: UserServiceUpdate): Promise<User>;
  retrieveById(id: string): Promise<User | null>;
  retrieveByEmail(email: string): Promise<User | null>;
}

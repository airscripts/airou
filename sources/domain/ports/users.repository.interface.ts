import {
  User,
  UserRepositoryCreatePayload,
  UserRepositoryUpdatePayload,
  UserRepositoryRemovePayload,
  UserRepositoryEnablePayload,
  UserRepositoryDisablePayload,
  UserRepositoryDeleteByIdPayload,
  UserRepositoryRetrieveByIdPayload,
  UserRepositoryRetrieveByEmailPayload,
} from '../model/user.model.js';

type UsersRepositoryType = UsersRepository;

interface UsersRepository {
  retrieve(): Promise<User[]>;
  remove(id: UserRepositoryRemovePayload): Promise<User>;
  enable(id: UserRepositoryEnablePayload): Promise<User>;
  disable(id: UserRepositoryDisablePayload): Promise<User>;
  create(user: UserRepositoryCreatePayload): Promise<User>;
  update(user: UserRepositoryUpdatePayload): Promise<User>;
  deleteById(id: UserRepositoryDeleteByIdPayload): Promise<User>;
  retrieveById(id: UserRepositoryRetrieveByIdPayload): Promise<User | null>;

  retrieveByEmail(
    email: UserRepositoryRetrieveByEmailPayload,
  ): Promise<User | null>;
}

export { UsersRepository, UsersRepositoryType };
export default UsersRepository;

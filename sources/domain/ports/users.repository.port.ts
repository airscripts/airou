import {
  UserModel,
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
  retrieve(): Promise<UserModel[]>;
  remove(id: UserRepositoryRemovePayload): Promise<UserModel>;
  enable(id: UserRepositoryEnablePayload): Promise<UserModel>;
  disable(id: UserRepositoryDisablePayload): Promise<UserModel>;
  create(user: UserRepositoryCreatePayload): Promise<UserModel>;
  update(user: UserRepositoryUpdatePayload): Promise<UserModel>;
  deleteById(id: UserRepositoryDeleteByIdPayload): Promise<UserModel>;

  retrieveById(
    id: UserRepositoryRetrieveByIdPayload,
  ): Promise<UserModel | null>;

  retrieveByEmail(
    email: UserRepositoryRetrieveByEmailPayload,
  ): Promise<UserModel | null>;
}

export { UsersRepository, UsersRepositoryType };
export default UsersRepository;

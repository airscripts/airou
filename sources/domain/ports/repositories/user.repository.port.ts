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
} from '../../models/user.model.js';

interface UserRepositoryPort {
  find(): Promise<UserModel[]>;
  remove(id: UserRepositoryRemovePayload): Promise<UserModel>;
  enable(id: UserRepositoryEnablePayload): Promise<UserModel>;
  disable(id: UserRepositoryDisablePayload): Promise<UserModel>;
  create(user: UserRepositoryCreatePayload): Promise<UserModel>;
  update(user: UserRepositoryUpdatePayload): Promise<UserModel>;
  removeById(id: UserRepositoryDeleteByIdPayload): Promise<UserModel>;

  findById(
    id: UserRepositoryRetrieveByIdPayload,
  ): Promise<UserModel | null>;

  findByEmail(
    email: UserRepositoryRetrieveByEmailPayload,
  ): Promise<UserModel | null>;
}

export { UserRepositoryPort };
export default UserRepositoryPort;

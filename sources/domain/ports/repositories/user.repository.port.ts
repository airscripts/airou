import {
  UserModel,
  UserModelId,
  UserModelName,
  UserModelEmail,
} from '../../models/user.model.js';

type UserRepositoryRemovePayload = UserModel[UserModelId];
type UserRepositoryEnablePayload = UserModel[UserModelId];
type UserRepositoryDisablePayload = UserModel[UserModelId];
type UserRepositoryDeleteByIdPayload = UserModel[UserModelId];
type UserRepositoryRetrieveByIdPayload = UserModel[UserModelId];

type UserRepositoryRetrieveByEmailPayload = Exclude<
  UserModel[UserModelEmail],
  null
>;

interface UserRepositoryCreatePayload {
  name: UserModel[UserModelName];
  email?: UserModel[UserModelEmail];
}

interface UserRepositoryUpdatePayload {
  id: UserModel[UserModelId];
  name?: UserModel[UserModelName];
}

interface UserRepositoryPort {
  find(): Promise<UserModel[]>;
  remove(id: UserRepositoryRemovePayload): Promise<UserModel>;
  enable(id: UserRepositoryEnablePayload): Promise<UserModel>;
  disable(id: UserRepositoryDisablePayload): Promise<UserModel>;
  create(user: UserRepositoryCreatePayload): Promise<UserModel>;
  update(user: UserRepositoryUpdatePayload): Promise<UserModel>;
  removeById(id: UserRepositoryDeleteByIdPayload): Promise<UserModel>;

  findById(id: UserRepositoryRetrieveByIdPayload): Promise<UserModel | null>;

  findByEmail(
    email: UserRepositoryRetrieveByEmailPayload,
  ): Promise<UserModel | null>;
}

export { UserRepositoryPort };

export {
  UserRepositoryCreatePayload,
  UserRepositoryUpdatePayload,
  UserRepositoryRemovePayload,
  UserRepositoryEnablePayload,
  UserRepositoryDisablePayload,
  UserRepositoryDeleteByIdPayload,
  UserRepositoryRetrieveByIdPayload,
  UserRepositoryRetrieveByEmailPayload,
};

export default UserRepositoryPort;

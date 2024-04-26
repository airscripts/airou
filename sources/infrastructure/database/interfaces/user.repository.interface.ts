import {
  UserModel,
  UserModelId,
  UserModelName,
  UserModelEmail,
} from '../../../domain/models/user.model.js';

type UserRepositoryRemovePayloadType = UserModel[UserModelId];
type UserRepositoryEnablePayloadType = UserModel[UserModelId];
type UserRepositoryDisablePayloadType = UserModel[UserModelId];
type UserRepositoryDeleteByIdPayloadType = UserModel[UserModelId];
type UserRepositoryRetrieveByIdPayloadType = UserModel[UserModelId];

type UserRepositoryRetrieveByEmailPayloadType = Exclude<
  UserModel[UserModelEmail],
  null
>;

interface UserRepositoryCreatePayloadType {
  name?: UserModel[UserModelName];
  email?: UserModel[UserModelEmail];
}

interface UserRepositoryUpdatePayloadType {
  id: UserModel[UserModelId];
  name?: UserModel[UserModelName];
}

interface UserRepositoryInterface {
  find(): Promise<UserModel[]>;
  remove(id: UserRepositoryRemovePayloadType): Promise<UserModel>;
  enable(id: UserRepositoryEnablePayloadType): Promise<UserModel>;
  disable(id: UserRepositoryDisablePayloadType): Promise<UserModel>;
  create(user: UserRepositoryCreatePayloadType): Promise<UserModel>;
  update(user: UserRepositoryUpdatePayloadType): Promise<UserModel>;
  removeById(id: UserRepositoryDeleteByIdPayloadType): Promise<UserModel>;

  findById(
    id: UserRepositoryRetrieveByIdPayloadType,
  ): Promise<UserModel | null>;

  findByEmail(
    email: UserRepositoryRetrieveByEmailPayloadType,
  ): Promise<UserModel | null>;
}

export { UserRepositoryInterface };

export {
  UserRepositoryCreatePayloadType,
  UserRepositoryUpdatePayloadType,
  UserRepositoryRemovePayloadType,
  UserRepositoryEnablePayloadType,
  UserRepositoryDisablePayloadType,
  UserRepositoryDeleteByIdPayloadType,
  UserRepositoryRetrieveByIdPayloadType,
  UserRepositoryRetrieveByEmailPayloadType,
};

export default UserRepositoryInterface;

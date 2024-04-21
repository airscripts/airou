import {
  UserModel,
  UserModelId,
  UserModelName,
  UserModelEmail,
} from '../../models/user.model.js';

type UserServiceRemovePayload = UserModel[UserModelId];
type UserServiceEnablePayload = UserModel[UserModelId];
type UserServiceDisablePayload = UserModel[UserModelId];
type UserServiceDeleteByIdPayload = UserModel[UserModelId];
type UserServiceRetrieveByIdPayload = UserModel[UserModelId];

type UserServiceRetrieveByEmailPayload = Exclude<
  UserModel[UserModelEmail],
  null
>;

interface UserServiceCreatePayload {
  name: UserModel[UserModelName];
  email?: UserModel[UserModelEmail];
}

interface UserServiceUpdatePayload {
  id: UserModel[UserModelId];
  name?: UserModel[UserModelName];
}

interface UserServicePort {
  find(): Promise<UserModel[]>;
  remove(id: UserServiceRemovePayload): Promise<UserModel>;
  enable(id: UserServiceEnablePayload): Promise<UserModel>;
  disable(id: UserServiceDisablePayload): Promise<UserModel>;
  create(user: UserServiceCreatePayload): Promise<UserModel>;
  update(user: UserServiceUpdatePayload): Promise<UserModel>;
  removeById(id: UserServiceDeleteByIdPayload): Promise<UserModel>;
  findById(id: UserServiceRetrieveByIdPayload): Promise<UserModel | null>;

  findByEmail(
    email: UserServiceRetrieveByEmailPayload,
  ): Promise<UserModel | null>;
}

export { UserServicePort };

export {
  UserServiceCreatePayload,
  UserServiceUpdatePayload,
  UserServiceRemovePayload,
  UserServiceEnablePayload,
  UserServiceDisablePayload,
  UserServiceDeleteByIdPayload,
  UserServiceRetrieveByIdPayload,
  UserServiceRetrieveByEmailPayload,
};

export default UserServicePort;

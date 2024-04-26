import {
  UserModel,
  UserModelId,
  UserModelName,
  UserModelEmail,
} from '../models/user.model.js';

type UserServiceRemovePayloadType = UserModel[UserModelId];
type UserServiceEnablePayloadType = UserModel[UserModelId];
type UserServiceDisablePayloadType = UserModel[UserModelId];
type UserServiceDeleteByIdPayloadType = UserModel[UserModelId];
type UserServiceRetrieveByIdPayloadType = UserModel[UserModelId];

type UserServiceRetrieveByEmailPayloadType = Exclude<
  UserModel[UserModelEmail],
  null
>;

interface UserServiceCreatePayloadType {
  name?: UserModel[UserModelName];
  email?: UserModel[UserModelEmail];
}

interface UserServiceUpdatePayloadType {
  id: UserModel[UserModelId];
  name?: UserModel[UserModelName];
}

interface UserServiceInterface {
  find(): Promise<UserModel[]>;
  remove(id: UserServiceRemovePayloadType): Promise<UserModel>;
  enable(id: UserServiceEnablePayloadType): Promise<UserModel>;
  disable(id: UserServiceDisablePayloadType): Promise<UserModel>;
  create(user: UserServiceCreatePayloadType): Promise<UserModel>;
  update(user: UserServiceUpdatePayloadType): Promise<UserModel>;
  removeById(id: UserServiceDeleteByIdPayloadType): Promise<UserModel>;
  findById(id: UserServiceRetrieveByIdPayloadType): Promise<UserModel | null>;

  findByEmail(
    email: UserServiceRetrieveByEmailPayloadType,
  ): Promise<UserModel | null>;
}

export { UserServiceInterface };

export {
  UserServiceCreatePayloadType,
  UserServiceUpdatePayloadType,
  UserServiceRemovePayloadType,
  UserServiceEnablePayloadType,
  UserServiceDisablePayloadType,
  UserServiceDeleteByIdPayloadType,
  UserServiceRetrieveByIdPayloadType,
  UserServiceRetrieveByEmailPayloadType,
};

export default UserServiceInterface;

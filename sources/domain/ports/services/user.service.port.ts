import {
  UserModel,
  UserServiceCreatePayload,
  UserServiceUpdatePayload,
  UserServiceRemovePayload,
  UserServiceEnablePayload,
  UserServiceDisablePayload,
  UserServiceDeleteByIdPayload,
  UserServiceRetrieveByIdPayload,
  UserServiceRetrieveByEmailPayload,
} from '../../models/user.model.js';

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
export default UserServicePort;

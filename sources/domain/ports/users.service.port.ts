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
} from '../model/user.model.js';

type UsersServiceType = UsersService;

interface UsersService {
  retrieve(): Promise<UserModel[]>;
  remove(id: UserServiceRemovePayload): Promise<UserModel>;
  enable(id: UserServiceEnablePayload): Promise<UserModel>;
  disable(id: UserServiceDisablePayload): Promise<UserModel>;
  create(user: UserServiceCreatePayload): Promise<UserModel>;
  update(user: UserServiceUpdatePayload): Promise<UserModel>;
  deleteById(id: UserServiceDeleteByIdPayload): Promise<UserModel>;
  retrieveById(id: UserServiceRetrieveByIdPayload): Promise<UserModel | null>;

  retrieveByEmail(
    email: UserServiceRetrieveByEmailPayload,
  ): Promise<UserModel | null>;
}

export { UsersService, UsersServiceType };
export default UsersService;

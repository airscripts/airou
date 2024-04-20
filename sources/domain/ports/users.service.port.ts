import {
  User,
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
  retrieve(): Promise<User[]>;
  remove(id: UserServiceRemovePayload): Promise<User>;
  enable(id: UserServiceEnablePayload): Promise<User>;
  disable(id: UserServiceDisablePayload): Promise<User>;
  create(user: UserServiceCreatePayload): Promise<User>;
  update(user: UserServiceUpdatePayload): Promise<User>;
  deleteById(id: UserServiceDeleteByIdPayload): Promise<User>;
  retrieveById(id: UserServiceRetrieveByIdPayload): Promise<User | null>;

  retrieveByEmail(
    email: UserServiceRetrieveByEmailPayload,
  ): Promise<User | null>;
}

export { UsersService, UsersServiceType };
export default UsersService;

type id = 'id';
type name = 'name';
type email = 'email';
type patch = 'patch'; 
type femail = 'email';
type enable = 'enable';
type remove = 'remove';
type disable = 'disable';
type standard = 'standard';

type UserServiceRemovePayload = UserModel[id];
type UserServiceEnablePayload = UserModel[id];
type UserServiceDisablePayload = UserModel[id];
type UserServiceDeleteByIdPayload = UserModel[id];
type UserServiceRetrieveByIdPayload = UserModel[id];
type UserServiceRetrieveByEmailPayload = Exclude<UserModel[email], null>;

type UserRepositoryRemovePayload = UserModel[id];
type UserRepositoryEnablePayload = UserModel[id];
type UserRepositoryDisablePayload = UserModel[id];
type UserRepositoryDeleteByIdPayload = UserModel[id];
type UserRepositoryRetrieveByIdPayload = UserModel[id];
type UserRepositoryRetrieveByEmailPayload = Exclude<UserModel[email], null>;

interface UserServiceCreatePayload {
  name: UserModel[name];
  email?: UserModel[email];
}

interface UserServiceUpdatePayload {
  id: UserModel[id];
  name?: UserModel[name];
}

interface UserRepositoryCreatePayload {
  name: UserModel[name];
  email?: UserModel[email];
}

interface UserRepositoryUpdatePayload {
  id: UserModel[id];
  name?: UserModel[name];
}

interface UsersHttpGet {
  Querystring: {
    find?: standard | femail;
    email?: Exclude<UserModel[email], null>;
  };
}

interface UsersHttpPost {
  Body: {
    name: UserModel[name];
    email?: UserModel[email];
  };
}

interface UserHttpGet {
  Params: {
    id: UserModel[id];
  };
}

interface UserHttpPatch {
  Body: {
    id: UserModel[id];
    name?: UserModel[name];
  };

  Querystring: {
    action?: enable | disable | remove | patch;
  };

  Params: {
    id: UserModel[id];
  };
}

interface UserHttpDelete {
  Body: {
    id: UserModel[id];
  };

  Params: {
    id: UserModel[id];
  };
}

interface UserModel {
  id: string;
  name: string;
  updatedAt: Date;
  createdAt: Date;
  isDeleted: boolean;
  isDisabled: boolean;
  email: string | null;
  deletedAt: Date | null;
  disabledAt: Date | null;
}

export { UserModel };

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

export {
  UserHttpGet,
  UsersHttpGet,
  UsersHttpPost,
  UserHttpPatch,
  UserHttpDelete,
};

export default UserModel;

type id = 'id';
type name = 'name';
type email = 'email';

type UserServiceRemovePayload = User[id];
type UserServiceEnablePayload = User[id];
type UserServiceDisablePayload = User[id];
type UserServiceDeleteByIdPayload = User[id];
type UserServiceRetrieveByIdPayload = User[id];
type UserServiceRetrieveByEmailPayload = Exclude<User[email], null>;

type UserRepositoryRemovePayload = User[id];
type UserRepositoryEnablePayload = User[id];
type UserRepositoryDisablePayload = User[id];
type UserRepositoryDeleteByIdPayload = User[id];
type UserRepositoryRetrieveByIdPayload = User[id];
type UserRepositoryRetrieveByEmailPayload = Exclude<User[email], null>;

interface UserServiceCreatePayload {
  name: User[name];
  email?: User[email];
}

interface UserServiceUpdatePayload {
  id: User[id];
  name?: User[name];
}

interface UserRepositoryCreatePayload {
  name: User[name];
  email?: User[email];
}

interface UserRepositoryUpdatePayload {
  id: User[id];
  name?: User[name];
}

interface UsersHttpGet {
  Querystring: {
    email?: Exclude<User[email], null>;
  };
}

interface UsersHttpPost {
  Body: {
    name: User[name];
    email?: User[email];
  };
}

interface UserHttpGet {
  Params: {
    id: User[id];
  };
}

interface UserHttpPatch {
  Body: {
    id: User[id];
    name?: User[name];
  };

  Params: {
    id: User[id];
  };
}

interface UserHttpDelete {
  Body: {
    id: User[id];
  };

  Params: {
    id: User[id];
  };
}

interface User {
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

export { User };

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

export default User;

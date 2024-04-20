type id = 'id';
type name = 'name';
type email = 'email';

interface UserHttpDelete extends Pick<User, id> {}

interface UserHttpPost extends Pick<User, name> {
  email?: User[email];
}

interface UserServiceCreate extends Pick<User, name> {
  email?: User[email];
}

interface UserRepositoryCreate extends Pick<User, name> {
  email?: User[email];
}

interface UserServiceUpdate extends Pick<User, id> {
  name?: User[name];
}

interface UserRepositoryUpdate extends Pick<User, id> {
  name?: User[name];
}

interface UserHttpPatch extends Pick<User, id> {
  name?: User[name];
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

export {
  User,
  UserHttpPost,
  UserHttpPatch,
  UserHttpDelete,
  UserServiceCreate,
  UserServiceUpdate,
  UserRepositoryCreate,
  UserRepositoryUpdate,
}

export default User;

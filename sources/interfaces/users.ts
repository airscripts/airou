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

interface HttpDelete extends Pick<User, 'id'> {}
interface HttpPost extends Pick<User, 'name' | 'email'> {}
interface DatabaseCreate extends Pick<User, 'name' | 'email'> {}

interface DatabaseUpdate extends Pick<User, 'id'> {
  name?: User['name'];
}

interface HttpPatch extends Pick<User, 'id'> {
  name?: User['name'];
}

export {
  User,
  HttpPost,
  HttpPatch,
  HttpDelete,
  DatabaseCreate,
  DatabaseUpdate,
}

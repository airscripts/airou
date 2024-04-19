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

interface HttpPost extends Pick<User, 'name'> {
  email?: User['email'];
}

interface ServiceCreate extends Pick<User, 'name'> {
  email?: User['email'];
}

interface RepositoryCreate extends Pick<User, 'name'> {
  email?: User['email'];
}

interface ServiceUpdate extends Pick<User, 'id'> {
  name?: User['name'];
}

interface RepositoryUpdate extends Pick<User, 'id'> {
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
  ServiceCreate,
  ServiceUpdate,
  RepositoryCreate,
  RepositoryUpdate,
}

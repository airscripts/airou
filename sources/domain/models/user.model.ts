type UserModelId = 'id';
type UserModelName = 'name';
type UserModelEmail = 'email';
type UserModelUsername = 'username';

interface UserModel {
  id: string;
  updatedAt: Date;
  createdAt: Date;
  isDeleted: boolean;
  isDisabled: boolean;
  name: string | null;
  email: string | null;
  deletedAt: Date | null;
  username: string | null;
  disabledAt: Date | null;
}

export { UserModel };
export { UserModelId, UserModelName, UserModelEmail, UserModelUsername };

export default UserModel;

type UserModelId = 'id';
type UserModelName = 'name';
type UserModelEmail = 'email';

interface UserModel {
  id: string;
  updatedAt: Date;
  createdAt: Date;
  isDeleted: boolean;
  isDisabled: boolean;
  name: string | null;
  email: string | null;
  deletedAt: Date | null;
  disabledAt: Date | null;
}

export { UserModel };
export { UserModelId, UserModelName, UserModelEmail };

export default UserModel;

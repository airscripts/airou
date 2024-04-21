type UserModelId = 'id';
type UserModelName = 'name';
type UserModelEmail = 'email';

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
export { UserModelId, UserModelName, UserModelEmail };

export default UserModel;

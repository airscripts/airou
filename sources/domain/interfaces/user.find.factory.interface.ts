import { UserModel } from '../models/user.model.js';

type UserFindEmailType = 'email';
type UserFindStandardType = 'standard';

type UserFindType = undefined | UserFindEmailType | UserFindStandardType;

interface UserFindInterface {
  execute(email?: string): Promise<UserModel | UserModel[] | null>;
}

export {
  UserFindType,
  UserFindInterface,
  UserFindEmailType,
  UserFindStandardType,
};

export default UserFindInterface;

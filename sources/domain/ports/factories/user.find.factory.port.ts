import { UserModel } from '../../models/user.model.js';

type UserEmailFind = 'email';
type UserStandardFind = 'standard';

type UserFindType = undefined | UserEmailFind | UserStandardFind;

interface UserFindPort {
  execute(email?: string): Promise<UserModel | UserModel[] | null>;
}

export { UserFindPort, UserFindType, UserEmailFind, UserStandardFind };
export default UserFindPort;

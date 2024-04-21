import { UserModel } from '../../models/user.model.js';

type UserFindEmail = 'email';
type UserFindStandard = 'standard';

type UserFindType = undefined | UserFindEmail | UserFindStandard;

interface UserFindPort {
  execute(email?: string): Promise<UserModel | UserModel[] | null>;
}

export { UserFindPort, UserFindType, UserFindEmail, UserFindStandard };
export default UserFindPort;

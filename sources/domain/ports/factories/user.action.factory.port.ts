import { UserModel } from '../../models/user.model.js';

type UserActionPatch = 'patch';
type userActionRemove = 'remove';
type UserActionEnable = 'enable';
type UserActionDisable = 'disable';

type UserActionType =
  | undefined
  | UserActionPatch
  | userActionRemove
  | UserActionEnable
  | UserActionDisable;

interface UserActionPort {
  execute(id: string, name?: string): Promise<UserModel>;
}

export {
  UserActionPort,
  UserActionType,
  UserActionPatch,
  UserActionEnable,
  userActionRemove,
  UserActionDisable,
};

export default UserActionPort;

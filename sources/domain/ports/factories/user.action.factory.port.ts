import { UserModel } from '../../models/user.model.js';

type UserPatchAction = 'patch';
type UserRemoveAction = 'remove';
type UserEnableAction = 'enable';
type UserDisableAction = 'disable';

type UserActionType =
  | undefined
  | UserPatchAction
  | UserRemoveAction
  | UserEnableAction
  | UserDisableAction;

interface UserActionPort {
  execute(id: string, name?: string): Promise<UserModel>;
}

export {
  UserActionPort,
  UserActionType,
  UserPatchAction,
  UserEnableAction,
  UserRemoveAction,
  UserDisableAction,
};

export default UserActionPort;

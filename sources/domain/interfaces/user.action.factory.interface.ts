import { UserModel } from '../models/user.model.js';

type UserActionPatchType = 'patch';
type userActionRemoveType = 'remove';
type UserActionEnableType = 'enable';
type UserActionDisableType = 'disable';

type UserActionType =
  | undefined
  | UserActionPatchType
  | userActionRemoveType
  | UserActionEnableType
  | UserActionDisableType;

interface UserActionInterface {
  execute(
    id: string,
    name?: string | null,
    email?: string | null,
    username?: string | null,
  ): Promise<UserModel>;
}

export {
  UserActionType,
  UserActionInterface,
  UserActionPatchType,
  UserActionEnableType,
  userActionRemoveType,
  UserActionDisableType,
};

export default UserActionInterface;

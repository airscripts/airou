import CONSTANTS from '../core/constants.core.js';
import { UserModel } from '../../domain/models/user.model.js';
import { UserServiceInterface } from '../interfaces/user.service.interface.js';

import {
  UserActionType,
  UserActionInterface,
} from '../interfaces/user.action.factory.interface.js';

class UserActionFactory {
  constructor(private service: UserServiceInterface) {}

  action(type: UserActionType): UserActionInterface {
    switch (type) {
      case CONSTANTS.factory.user.action.enable:
        return new UserEnableAction(this.service);

      case CONSTANTS.factory.user.action.disable:
        return new UserDisableAction(this.service);

      case CONSTANTS.factory.user.action.delete:
        return new UserRemoveAction(this.service);

      case CONSTANTS.factory.user.action.patch:
        return new UserPatchAction(this.service);

      default:
        return new UserPatchAction(this.service);
    }
  }
}

class UserEnableAction implements UserActionInterface {
  constructor(private service: UserServiceInterface) {}

  async execute(id: string): Promise<UserModel> {
    return await this.service.enable(id);
  }
}

class UserDisableAction implements UserActionInterface {
  constructor(private service: UserServiceInterface) {}

  async execute(id: string): Promise<UserModel> {
    return await this.service.disable(id);
  }
}

class UserRemoveAction implements UserActionInterface {
  constructor(private service: UserServiceInterface) {}

  async execute(id: string): Promise<UserModel> {
    return await this.service.remove(id);
  }
}

class UserPatchAction implements UserActionInterface {
  constructor(private service: UserServiceInterface) {}

  async execute(
    id: string,
    name?: string | null,
    email?: string | null,
    username?: string | null,
  ): Promise<UserModel> {
    return await this.service.update({
      id: id,
      name: name,
      email: email,
      username: username,
    });
  }
}

export {
  UserPatchAction,
  UserEnableAction,
  UserRemoveAction,
  UserActionFactory,
  UserDisableAction,
};

export default {
  patch: UserPatchAction,
  enable: UserEnableAction,
  remove: UserRemoveAction,
  factory: UserActionFactory,
  disable: UserDisableAction,
};

import CONSTANTS from '../../constants/index.js';
import { UserModel } from '../../domain/models/user.model.js';
import { UserServicePort } from '../../domain/ports/services/user.service.port.js';

import {
  UserActionPort,
  UserActionType,
} from '../../domain/ports/factories/user.action.factory.port.js';

class UserActionFactory {
  constructor(private service: UserServicePort) {}

  action(type: UserActionType): UserActionPort {
    switch (type) {
      case CONSTANTS.application.factory.user.action.enable:
        return new UserEnableAction(this.service);

      case CONSTANTS.application.factory.user.action.disable:
        return new UserDisableAction(this.service);

      case CONSTANTS.application.factory.user.action.delete:
        return new UserRemoveAction(this.service);

      case CONSTANTS.application.factory.user.action.patch:
        return new UserPatchAction(this.service);

      default:
        return new UserPatchAction(this.service);
    }
  }
}

class UserEnableAction implements UserActionPort {
  constructor(private service: UserServicePort) {}

  async execute(id: string): Promise<UserModel> {
    return await this.service.enable(id);
  }
}

class UserDisableAction implements UserActionPort {
  constructor(private service: UserServicePort) {}

  async execute(id: string): Promise<UserModel> {
    return await this.service.disable(id);
  }
}

class UserRemoveAction implements UserActionPort {
  constructor(private service: UserServicePort) {}

  async execute(id: string): Promise<UserModel> {
    return await this.service.remove(id);
  }
}

class UserPatchAction implements UserActionPort {
  constructor(private service: UserServicePort) {}

  async execute(id: string, name: string): Promise<UserModel> {
    return await this.service.update({ id: id, name: name });
  }
}

export {
  UserPatchAction,
  UserEnableAction,
  UserRemoveAction,
  UserActionFactory,
  UserDisableAction,
}

export default {
  patch: UserPatchAction,
  enable: UserEnableAction,
  remove: UserRemoveAction,
  factory: UserActionFactory,
  disable: UserDisableAction,
};

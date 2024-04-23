import CONSTANTS from '../core/constants.core.js';
import { UserModel } from '../../domain/models/user.model.js';
import { UserServiceInterface } from '../interfaces/user.service.interface.js';

import {
  UserFindType,
  UserFindInterface,
} from '../interfaces/user.find.factory.interface.js';

class UserFindFactory {
  constructor(private service: UserServiceInterface) {}

  find(type: UserFindType): UserFindInterface {
    switch (type) {
      case CONSTANTS.factory.user.find.standard:
        return new UserStandardFind(this.service);

      case CONSTANTS.factory.user.find.email:
        return new UserEmailFind(this.service);

      default:
        return new UserStandardFind(this.service);
    }
  }
}

class UserStandardFind implements UserFindInterface {
  constructor(private service: UserServiceInterface) {}

  async execute(): Promise<UserModel[]> {
    return await this.service.find();
  }
}

class UserEmailFind implements UserFindInterface {
  constructor(private service: UserServiceInterface) {}

  async execute(email?: string): Promise<UserModel | null> {
    if (!email) throw new Error('Email is required');
    return await this.service.findByEmail(email);
  }
}

export { UserEmailFind, UserStandardFind, UserFindFactory };

export default {
  email: UserEmailFind,
  factory: UserFindFactory,
  standard: UserStandardFind,
};

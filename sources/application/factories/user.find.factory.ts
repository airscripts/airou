import CONSTANTS from '../../constants/index.js';
import { UserModel } from '../../domain/models/user.model.js';
import { UserServicePort } from '../../domain/ports/services/user.service.port.js';

import {
  UserFindPort,
  UserFindType,
} from '../../domain/ports/factories/user.find.factory.port.js';

class UserFindFactory {
  constructor(private service: UserServicePort) {}

  find(type: UserFindType): UserFindPort {
    switch (type) {
      case CONSTANTS.application.factory.user.find.standard:
        return new UserStandardFind(this.service);

      case CONSTANTS.application.factory.user.find.email:
        return new UserEmailFind(this.service);

      default:
        return new UserStandardFind(this.service);
    }
  }
}

class UserStandardFind implements UserFindPort {
  constructor(private service: UserServicePort) {}

  async execute(): Promise<UserModel[]> {
    return await this.service.find();
  }
}

class UserEmailFind implements UserFindPort {
  constructor(private service: UserServicePort) {}

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

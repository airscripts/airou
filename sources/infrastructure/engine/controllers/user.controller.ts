import { faker } from '@faker-js/faker';
import CONSTANTS from '../core/constants.core.js';

import {
  UserControllerInterface,
  UserNameControllerInterface,
  UserEmailControllerInterface,
  UserUsernameControllerInterface,
} from '../interfaces/user.controller.interface.js';

class UserController implements UserControllerInterface {
  public generate(field: string): string | null {
    switch (field) {
      case CONSTANTS.controller.user.generate.email:
        return new UserEmailController().generate();

      case CONSTANTS.controller.user.generate.name:
        return new UserNameController().generate();

      case CONSTANTS.controller.user.generate.username:
        return new UserUsernameController().generate();

      default:
        return null;
    }
  }
}

class UserEmailController implements UserEmailControllerInterface {
  public generate(): string {
    return faker.internet.email();
  }
}

class UserNameController implements UserNameControllerInterface {
  public generate(): string {
    return faker.person.fullName();
  }
}

class UserUsernameController implements UserUsernameControllerInterface {
  public generate(): string {
    return faker.internet.userName();
  }
}

const instance = new UserController();

export default {
  instance: instance,
  UserController: UserController,
  UserNameController: UserNameController,
  UserEmailController: UserEmailController,
  UserUsernameController: UserUsernameController,
};

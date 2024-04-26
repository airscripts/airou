import { v4 as uuid } from 'uuid';
import CONSTANTS from '../core/constants.core.js';

import {
  UserControllerInterface,
  UserNameControllerInterface,
  UserUsernameControllerInterface,
} from '../interfaces/user.controller.interface.js';

class UserController implements UserControllerInterface {
  public generate(field: string): string | null {
    const chaos = Math.floor(Math.random() * CONSTANTS.random.user.length);

    switch (field) {
      case CONSTANTS.controller.user.generate.name:
        return new UserNameController().generate(chaos);

      case CONSTANTS.controller.user.generate.username:
        return new UserUsernameController().generate(chaos);

      default:
        return null;
    }
  }
}

class UserNameController implements UserNameControllerInterface {
  public generate(chaos: number): string {
    return CONSTANTS.random.user[chaos].name;
  }
}

class UserUsernameController implements UserUsernameControllerInterface {
  public generate(chaos: number): string {
    return `${CONSTANTS.random.user[chaos].username}.${uuid()}`;
  }
}

const instance = new UserController();

export default {
  instance: instance,
  UserController: UserController,
  UserNameController: UserNameController,
  UserUsernameController: UserUsernameController,
};

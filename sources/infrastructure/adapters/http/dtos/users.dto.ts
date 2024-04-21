import {
  UserModel,
  UserModelName,
  UserModelEmail,
} from '../../../../domain/models/user.model.js';

import {
  UserFindEmail,
  UserFindStandard,
} from '../../../../domain/ports/factories/user.find.factory.port.js';

interface UsersHttpGet {
  Querystring: {
    find?: UserFindStandard | UserFindEmail;
    email?: Exclude<UserModel[UserModelEmail], null>;
  };
}

interface UsersHttpPost {
  Body: {
    name: UserModel[UserModelName];
    email?: UserModel[UserModelEmail];
  };
}

export { UsersHttpGet, UsersHttpPost };

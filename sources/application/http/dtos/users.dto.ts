import {
  UserModel,
  UserModelName,
  UserModelEmail,
} from '../../../domain/models/user.model.js';

import {
  UserFindEmailType,
  UserFindStandardType,
} from '../../../domain/interfaces/user.find.factory.interface.js';

interface UsersHttpGet {
  Querystring: {
    find?: UserFindStandardType | UserFindEmailType;
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

import {
  UserModel,
  UserModelId,
  UserModelName,
} from '../../../../domain/models/user.model.js';

import {
  UserActionPatch,
  UserActionEnable,
  userActionRemove,
  UserActionDisable,
} from '../../../../domain/ports/factories/user.action.factory.port.js';

interface UserHttpGet {
  Params: {
    id: UserModel[UserModelId];
  };
}

interface UserHttpPatch {
  Body: {
    id: UserModel[UserModelId];
    name?: UserModel[UserModelName];
  };

  Querystring: {
    action?:
      | UserActionPatch
      | userActionRemove
      | UserActionEnable
      | UserActionDisable;
  };

  Params: {
    id: UserModel[UserModelId];
  };
}

interface UserHttpDelete {
  Body: {
    id: UserModel[UserModelId];
  };

  Params: {
    id: UserModel[UserModelId];
  };
}

export { UserHttpGet, UserHttpPatch, UserHttpDelete };

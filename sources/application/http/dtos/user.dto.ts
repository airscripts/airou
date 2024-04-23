import {
  UserModel,
  UserModelId,
  UserModelName,
} from '../../../domain/models/user.model.js';

import {
  UserActionPatchType,
  UserActionEnableType,
  userActionRemoveType,
  UserActionDisableType,
} from '../../../domain/interfaces/user.action.factory.interface.js';

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
      | UserActionPatchType
      | userActionRemoveType
      | UserActionEnableType
      | UserActionDisableType;
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

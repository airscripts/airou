import UserFind from './user.find.factory.js';
import UserAction from './user.action.factory.js';

export default {
  user: {
    action: {
      patch: UserAction.patch,
      enable: UserAction.enable,
      remove: UserAction.remove,
      factory: UserAction.factory,
      disable: UserAction.disable,
    },

    find: {
      email: UserFind.email,
      factory: UserFind.factory,
      standard: UserFind.standard,
    },
  },
};

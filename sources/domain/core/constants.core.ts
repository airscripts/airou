export default {
  service: {
    user: 'user',
    ping: 'ping',
  },

  factory: {
    user: {
      action: {
        patch: 'patch',
        enable: 'enable',
        delete: 'delete',
        disable: 'disable',
      },

      find: {
        email: 'email',
        standard: 'standard',
      },
    },
  },

  error: {
    service: {
      code: {
        serviceError: 'S0000',
        missingUserName: 'S0001',
        serviceNotFound: 'S0002',
      },
    },
  },
};

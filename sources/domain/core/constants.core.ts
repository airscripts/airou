export default {
  log: {
    destination: ['./.logs/domain/nexus.log'],
  },

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
    system: {
      repository: {
        code: {
          uniqueConstraintFailed: 'R0001',
        },
      },
    },

    service: {
      code: {
        serviceError: 'S0000',
        missingUserName: 'S0001',
        serviceNotFound: 'S0002',
        uniqueConstraintFailed: 'S0003',
      },
    },
  },
};

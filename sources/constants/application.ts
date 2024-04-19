export const APPLICATION_CONSTANTS = {
  messages: {
    ping: 'pong',
  },

  errors: {
    repository: {
      codes: {
        userNotFound: 'D0001',
        databaseError: 'D0000',
        userIsDeleted: 'D0004',
        userIsDisabled: 'D0003',
        userIsNotDeleted: 'D0006',
        userAlreadyExists: 'D0002',
        userisNotDisabled: 'D0005',
      }
    },

    service: {
      codes: {
        serviceError: 'S0000',
        missingUserName: 'S0001',
      }
    },

    bot: {},
    network: {},
    validation: {},
    application: {},
  },
};

export default APPLICATION_CONSTANTS;

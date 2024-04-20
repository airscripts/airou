export const APPLICATION_CONSTANTS = {
  messages: {
    ping: 'pong',
  },

  errors: {
    repository: {
      codes: {
        userNotFound: 'R0001',
        databaseError: 'R0000',
        userIsDeleted: 'R0004',
        userIsDisabled: 'R0003',
        userIsNotDeleted: 'R0006',
        userAlreadyExists: 'R0002',
        userisNotDisabled: 'R0005',
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

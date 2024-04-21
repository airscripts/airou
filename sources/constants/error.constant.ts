const error = {
  repository: {
    code: {
      userNotFound: 'R0001',
      databaseError: 'R0000',
      userIsDeleted: 'R0004',
      userIsDisabled: 'R0003',
      userIsNotDeleted: 'R0006',
      userAlreadyExists: 'R0002',
      userisNotDisabled: 'R0005',
      repositoryNotFound: 'R0007',
    },
  },

  service: {
    code: {
      serviceError: 'S0000',
      missingUserName: 'S0001',
      serviceNotFound: 'S0002',
    },
  },

  bot: {},
  network: {},
  validation: {},
  application: {},
};

export { error };
export default error;

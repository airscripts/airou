export default {
  log: {
    destination: ['./.logs/infrastructure/database.log'],
  },

  repository: {
    user: 'user',
  },

  error: {
    database: {
      code: {
        databaseError: 'D0000',
      },
    },

    repository: {
      system: {
        code: {
          uniqueConstraintFailed: 'P2002',
        },
      },

      code: {
        repositoryError: 'R0000',
        uniqueConstraintFailed: 'R0001',
      },
    },
  },
};

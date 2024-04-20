export const TESTS_CONSTANTS = {
  integration: {
    describes: {
      users: {
        repository: 'users.repository',
      },
    },

    it: {
      users: {
        create: 'should create user',
        update: 'should update user',
        enable: 'should enable user',
        remove: 'should remove user',
        disable: 'should disable user',
        retrieve: 'should retrieve users',
        deleteById: 'should delete user by id',
        retrieveById: 'should retrieve user by id',
        retrieveByEmail: 'should retrieve user by email',
      },
    },
  },

  unit: {
    describes: {
      foo: 'foo',

      users: {
        service: 'users.service',
      },
    },

    it: {
      foo: 'should do something',

      users: {
        create: 'should create user',
        update: 'should update user',
        enable: 'should enable user',
        remove: 'should remove user',
        disable: 'should disable user',
        retrieve: 'should retrieve users',
        deleteById: 'should delete user by id',
        retrieveById: 'should retrieve user by id',
        retrieveByEmail: 'should retrieve user by email',
      },
    },
  },
};

export default TESTS_CONSTANTS;

export const tests = {
  integration: {
    describe: {
      user: {
        repository: 'user.repository',
      },
    },

    it: {
      user: {
        find: 'should find users',
        create: 'should create user',
        update: 'should update user',
        enable: 'should enable user',
        remove: 'should remove user',
        disable: 'should disable user',
        findById: 'should find user by id',
        removeById: 'should remove user by id',
        findByEmail: 'should find user by email',
      },
    },
  },

  unit: {
    describe: {
      foo: 'foo',

      user: {
        service: 'user.service',
      },
    },

    it: {
      foo: 'should do something',

      user: {
        find: 'should find users',
        create: 'should create user',
        update: 'should update user',
        enable: 'should enable user',
        remove: 'should remove user',
        disable: 'should disable user',
        findById: 'should find user by id',
        removeById: 'should remove user by id',
        findByEmail: 'should find user by email',
      },
    },
  },
};

export default tests;

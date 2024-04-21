import { describe, it, mock, before } from 'node:test';
import { deepStrictEqual, notStrictEqual, strictEqual } from 'node:assert';

import mocks from '../env/mocks.env.js';
import CONSTANTS from '../constants/index.js';
import services from '../../sources/application/services/index.js';
import { UserServicePort } from '../../sources/domain/ports/index.js';

describe(CONSTANTS.test.unit.describe.user.service, () => {
  const users = mocks.users;
  const service = services.locator.getService('user');

  before(() => {
    type MockUserServicePort = keyof UserServicePort;

    mock.method(
      service,
      CONSTANTS.user.mocks.methods.find as MockUserServicePort,
      () => users,
    );

    mock.method(
      service,
      CONSTANTS.user.mocks.methods.create as MockUserServicePort,
      () => users[1],
    );

    mock.method(
      service,
      CONSTANTS.user.mocks.methods.removeById as MockUserServicePort,
      () => users[1],
    );

    mock.method(
      service,
      CONSTANTS.user.mocks.methods.disable as MockUserServicePort,
      () => users[1],
    );

    mock.method(
      service,
      CONSTANTS.user.mocks.methods.enable as MockUserServicePort,
      () => users[0],
    );

    mock.method(
      service,
      CONSTANTS.user.mocks.methods.remove as MockUserServicePort,
      () => users[1],
    );

    mock.method(
      service,
      CONSTANTS.user.mocks.methods.findByEmail as MockUserServicePort,
      () => users[0],
    );

    mock.method(
      service,
      CONSTANTS.user.mocks.methods.findById as MockUserServicePort,
      () => users[0],
    );

    mock.method(
      service,
      CONSTANTS.user.mocks.methods.update as MockUserServicePort,
      () => users[0],
    );
  });

  it(CONSTANTS.test.unit.it.user.find, async () => {
    const data = await service.find();
    deepStrictEqual(data, users);
  });

  it(CONSTANTS.test.unit.it.user.findById, async () => {
    const user = users[0];
    const data = await service.findById(user.id);
    deepStrictEqual(data, user);
  });

  it(CONSTANTS.test.unit.it.user.findByEmail, async () => {
    const user = users[0];
    const data = await service.findByEmail(user.email);
    deepStrictEqual(data, user);
  });

  it(CONSTANTS.test.unit.it.user.create, async () => {
    const user = { name: users[1].name, email: users[1].email };
    const data = await service.create(user);
    strictEqual(data.name, user.name);
    strictEqual(data.email, user.email);
  });

  it(CONSTANTS.test.unit.it.user.update, async () => {
    const user = users[0];
    const payload = { id: user.id, name: user.name };
    const data = await service.update(payload);
    strictEqual(data.name, user.name);
  });

  it(CONSTANTS.test.unit.it.user.disable, async () => {
    const id = users[0].id;
    const data = await service.disable(id);
    strictEqual(data.isDisabled, true);
    notStrictEqual(data.disabledAt, null);
  });

  it(CONSTANTS.test.unit.it.user.enable, async () => {
    const id = users[0].id;
    const data = await service.enable(id);
    strictEqual(data.disabledAt, null);
    strictEqual(data.isDisabled, false);
  });

  it(CONSTANTS.test.unit.it.user.removeById, async () => {
    const id = users[0].id;
    const data = await service.removeById(id);
    strictEqual(data.isDeleted, true);
    notStrictEqual(data.deletedAt, null);
  });

  it(CONSTANTS.test.unit.it.user.remove, async () => {
    const id = users[0].id;
    const data = await service.remove(id);
    deepStrictEqual(data, users[1]);
  });
});

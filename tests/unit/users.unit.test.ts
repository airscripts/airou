import { describe, it, mock, before } from 'node:test';
import { deepStrictEqual, notDeepStrictEqual } from 'node:assert';

import mocks from '../env/mocks.env.js';
import CONSTANTS from '../constants/index.js';
import services from '../../sources/application/services/index.js';
import { UsersService } from '../../sources/domain/ports/index.js';

describe(CONSTANTS.tests.unit.describes.users.service, () => {
  const users = mocks.users;
  const service = services.locator.getService('users');

  before(() => {
    type MockUsersService = keyof UsersService;

    mock.method(
      service,
      CONSTANTS.users.mocks.methods.retrieve as MockUsersService,
      () => users,
    );

    mock.method(
      service,
      CONSTANTS.users.mocks.methods.create as MockUsersService,
      () => users[1],
    );

    mock.method(
      service,
      CONSTANTS.users.mocks.methods.deleteById as MockUsersService,
      () => users[1],
    );

    mock.method(
      service,
      CONSTANTS.users.mocks.methods.disable as MockUsersService,
      () => users[1],
    );

    mock.method(
      service,
      CONSTANTS.users.mocks.methods.enable as MockUsersService,
      () => users[0],
    );

    mock.method(
      service,
      CONSTANTS.users.mocks.methods.remove as MockUsersService,
      () => users[1],
    );

    mock.method(
      service,
      CONSTANTS.users.mocks.methods.retrieveByEmail as MockUsersService,
      () => users[0],
    );

    mock.method(
      service,
      CONSTANTS.users.mocks.methods.retrieveById as MockUsersService,
      () => users[0],
    );

    mock.method(
      service,
      CONSTANTS.users.mocks.methods.update as MockUsersService,
      () => users[0],
    );
  });

  it(CONSTANTS.tests.unit.it.users.retrieve, async () => {
    const data = await service.retrieve();
    deepStrictEqual(data, users);
    notDeepStrictEqual(data, []);
  });

  it(CONSTANTS.tests.unit.it.users.retrieveById, async () => {
    const user = users[0];
    const data = await service.retrieveById(user.id);
    deepStrictEqual(data, user);
  });

  it(CONSTANTS.tests.unit.it.users.retrieveByEmail, async () => {
    const user = users[0];
    const data = await service.retrieveByEmail(user.email);
    deepStrictEqual(data, user);
  });

  it(CONSTANTS.tests.unit.it.users.create, async () => {
    const user = { name: users[1].name, email: users[1].email };
    const data = await service.create(user);
    deepStrictEqual(data.name, user.name);
    deepStrictEqual(data.email, user.email);
  });

  it(CONSTANTS.tests.unit.it.users.update, async () => {
    const user = users[0];
    const payload = { id: user.id, name: user.name };
    const data = await service.update(payload);
    deepStrictEqual(data.name, user.name);
  });

  it(CONSTANTS.tests.unit.it.users.disable, async () => {
    const id = users[0].id;
    const data = await service.disable(id);
    deepStrictEqual(data.isDisabled, true);
  });

  it(CONSTANTS.tests.unit.it.users.deleteById, async () => {
    const id = users[0].id;
    const data = await service.deleteById(id);
    deepStrictEqual(data.isDeleted, true);
  });

  it(CONSTANTS.tests.unit.it.users.remove, async () => {
    const id = users[0].id;
    const data = await service.remove(id);
    deepStrictEqual(data, users[1]);
  });
});

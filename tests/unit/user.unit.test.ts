import { describe, it, mock, before } from 'node:test';
import { deepStrictEqual, notStrictEqual, strictEqual } from 'node:assert';

import mocks from '../env/mocks.env.js';
import CONSTANTS from '../constants/index.js';
import services from '../../sources/domain/services/index.js';
import { UserServiceInterface } from '../../sources/domain/interfaces/user.service.interface.js';

type MockUserServiceInterface = keyof UserServiceInterface;

describe(CONSTANTS.test.unit.describe.user.service, () => {
  const users = mocks.users;

  const service: UserServiceInterface = services.locator.getService(
    CONSTANTS.user.service,
  ) as UserServiceInterface;

  it(CONSTANTS.test.unit.it.user.find, async () => {
    mock.method(
      service,
      CONSTANTS.user.mocks.methods.find as MockUserServiceInterface,
      () => users,
    );

    const data = await service.find();
    deepStrictEqual(data, users);
  });

  it(CONSTANTS.test.unit.it.user.findById, async () => {
    mock.method(
      service,
      CONSTANTS.user.mocks.methods.findById as MockUserServiceInterface,
      () => users[0],
    );

    const user = users[0];
    const data = await service.findById(user.id);
    deepStrictEqual(data, user);
  });

  it(CONSTANTS.test.unit.it.user.findByEmail, async () => {
    mock.method(
      service,
      CONSTANTS.user.mocks.methods.findByEmail as MockUserServiceInterface,
      () => users[0],
    );

    const user = users[0];
    const data = await service.findByEmail(user.email);
    deepStrictEqual(data, user);
  });

  it(CONSTANTS.test.unit.it.user.create, async () => {
    mock.method(
      service,
      CONSTANTS.user.mocks.methods.create as MockUserServiceInterface,
      () => users[1],
    );

    const user = { name: users[1].name, email: users[1].email };
    const data = await service.create(user);
    strictEqual(data.name, user.name);
    strictEqual(data.email, user.email);
  });

  it(CONSTANTS.test.unit.it.user.update, async () => {
    mock.method(
      service,
      CONSTANTS.user.mocks.methods.update as MockUserServiceInterface,
      () => users[0],
    );

    const user = users[0];
    const payload = { id: user.id, name: user.name };
    const data = await service.update(payload);
    strictEqual(data.name, user.name);
  });

  it(CONSTANTS.test.unit.it.user.disable, async () => {
    mock.method(
      service,
      CONSTANTS.user.mocks.methods.disable as MockUserServiceInterface,
      () => users[1],
    );

    const id = users[0].id;
    const data = await service.disable(id);
    strictEqual(data.isDisabled, true);
    notStrictEqual(data.disabledAt, null);
  });

  it(CONSTANTS.test.unit.it.user.enable, async () => {
    mock.method(
      service,
      CONSTANTS.user.mocks.methods.enable as MockUserServiceInterface,
      () => users[0],
    );

    const id = users[0].id;
    const data = await service.enable(id);
    strictEqual(data.disabledAt, null);
    strictEqual(data.isDisabled, false);
  });

  it(CONSTANTS.test.unit.it.user.removeById, async () => {
    mock.method(
      service,
      CONSTANTS.user.mocks.methods.removeById as MockUserServiceInterface,
      () => users[1],
    );

    const id = users[0].id;
    const data = await service.removeById(id);
    strictEqual(data.isDeleted, true);
    notStrictEqual(data.deletedAt, null);
  });

  it(CONSTANTS.test.unit.it.user.remove, async () => {
    mock.method(
      service,
      CONSTANTS.user.mocks.methods.remove as MockUserServiceInterface,
      () => users[1],
    );

    const id = users[0].id;
    const data = await service.remove(id);
    deepStrictEqual(data, users[1]);
  });
});

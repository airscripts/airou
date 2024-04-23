import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { describe, it, beforeEach, after, before } from 'node:test';
import { strictEqual, notStrictEqual, deepStrictEqual } from 'node:assert';

import seeding from '../env/seeding.env.js';
import CONSTANTS from '../constants/index.js';
import repositories from '../../sources/infrastructure/database/repositories/index.js';

const database = new PrismaClient();

describe(CONSTANTS.test.integration.describe.user.repository, () => {
  const users = seeding.users;
  const repository = repositories.locator.getRepository('user');

  before(async () => {
    await database.$connect();
  });

  beforeEach(async () => {
    await database.user.deleteMany();
    await database.user.createMany({ data: users });
  });

  it(CONSTANTS.test.integration.it.user.find, async () => {
    const data = await repository.find();
    deepStrictEqual(data, users);
  });

  it(CONSTANTS.test.integration.it.user.findById, async () => {
    const user = users[0];
    const data = await repository.findById(user.id);
    deepStrictEqual(data, user);
  });

  it(CONSTANTS.test.integration.it.user.findByEmail, async () => {
    const user = users[0];
    const data = await repository.findByEmail(user.email);
    deepStrictEqual(data, user);
  });

  it(CONSTANTS.test.integration.it.user.create, async () => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
    };

    const data = await repository.create(user);
    strictEqual(data.name, user.name);
    strictEqual(data.email, user.email);
  });

  it(CONSTANTS.test.integration.it.user.update, async () => {
    const user = { id: users[0].id, name: faker.person.fullName() };
    const payload = { id: user.id, name: user.name };
    const data = await repository.update(payload);
    strictEqual(data.name, user.name);
  });

  it(CONSTANTS.test.integration.it.user.disable, async () => {
    const id = users[0].id;
    const data = await repository.disable(id);
    strictEqual(data.isDisabled, true);
    notStrictEqual(data.disabledAt, null);
  });

  it(CONSTANTS.test.integration.it.user.enable, async () => {
    const id = users[0].id;
    const data = await repository.enable(id);
    strictEqual(data.disabledAt, null);
    strictEqual(data.isDisabled, false);
  });

  it(CONSTANTS.test.integration.it.user.removeById, async () => {
    const id = users[0].id;
    const data = await repository.removeById(id);
    notStrictEqual(data.deletedAt, null);
    deepStrictEqual(data.isDeleted, true);
  });

  it(CONSTANTS.test.integration.it.user.remove, async () => {
    const id = users[0].id;
    const data = await repository.remove(id);
    deepStrictEqual(data, users[0]);
  });

  after(async () => {
    await database.$disconnect();
  });
});

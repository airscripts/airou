import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { deepStrictEqual, notDeepStrictEqual } from 'node:assert';
import { describe, it, beforeEach, after, before } from 'node:test';

import seeding from '../env/seeding.env.js';
import CONSTANTS from '../constants/index.js';
import { usersRepository } from '../../sources/infrastructure/adapters/core/users.repository.js';

const database = new PrismaClient();

describe(CONSTANTS.tests.integration.describes.users.repository, () => {
  const users = seeding.users;

  before(async () => {
    await database.$connect();
  });

  beforeEach(async () => {
    await database.user.deleteMany();
    await database.user.createMany({ data: users });
  });

  it(CONSTANTS.tests.integration.it.users.retrieve, async () => {
    const data = await usersRepository.retrieve();
    deepStrictEqual(data, users);
    notDeepStrictEqual(data, []);
  });

  it(CONSTANTS.tests.integration.it.users.retrieveById, async () => {
    const user = users[0];
    const data = await usersRepository.retrieveById(user.id);
    deepStrictEqual(data, user);
  });

  it(CONSTANTS.tests.integration.it.users.retrieveByEmail, async () => {
    const user = users[0];
    const data = await usersRepository.retrieveByEmail(user.email);
    deepStrictEqual(data, user);
  });

  it(CONSTANTS.tests.integration.it.users.create, async () => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
    };

    const data = await usersRepository.create(user);
    deepStrictEqual(data.name, user.name);
    deepStrictEqual(data.email, user.email);
  });

  it(CONSTANTS.tests.integration.it.users.update, async () => {
    const user = { id: users[0].id, name: faker.person.fullName() };
    const payload = { id: user.id, name: user.name };
    const data = await usersRepository.update(payload);
    deepStrictEqual(data.name, user.name);
  });

  it(CONSTANTS.tests.integration.it.users.disable, async () => {
    const id = users[0].id;
    const data = await usersRepository.disable(id);
    deepStrictEqual(data.isDisabled, true);
  });

  it(CONSTANTS.tests.integration.it.users.deleteById, async () => {
    const id = users[0].id;
    const data = await usersRepository.deleteById(id);
    deepStrictEqual(data.isDeleted, true);
  });

  it(CONSTANTS.tests.integration.it.users.remove, async () => {
    const id = users[0].id;
    const data = await usersRepository.remove(id);
    deepStrictEqual(data, seeding.users[0]);
  });

  after(async () => {
    await database.$disconnect();
  });
});

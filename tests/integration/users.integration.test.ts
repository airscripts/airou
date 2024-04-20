import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { deepStrictEqual, notDeepStrictEqual } from 'node:assert';
import { describe, it, beforeEach, after, before } from 'node:test';

import seeding from '../env/seeding.env.js';
import { usersRepository } from '../../sources/infrastructure/adapters/core/users.repository.js';

const database = new PrismaClient();

describe('users.repository', () => {
  const users = seeding.users;

  before(async () => {
    await database.$connect();
  });

  beforeEach(async () => {
    await database.user.deleteMany();
    await database.user.createMany({ data: users });
  });

  it('should retrieve users', async () => {
    const data = await usersRepository.retrieve();
    deepStrictEqual(data, users);
    notDeepStrictEqual(data, []);
  });

  it('should retrieve a user', async () => {
    const user = users[0];
    const data = await usersRepository.retrieveById(user.id);
    deepStrictEqual(data, user);
  });

  it('should retrieve a user by email', async () => {
    const user = users[0];
    const data = await usersRepository.retrieveByEmail(user.email);
    deepStrictEqual(data, user);
  });

  it('should create a new user', async () => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
    };

    const data = await usersRepository.create(user);
    deepStrictEqual(data.name, user.name);
    deepStrictEqual(data.email, user.email);
  });

  it('should update a user', async () => {
    const user = { id: users[0].id, name: faker.person.fullName() };
    const payload = { id: user.id, name: user.name };
    const data = await usersRepository.update(payload);
    deepStrictEqual(data.name, user.name);
  });

  it('should disable a user', async () => {
    const id = users[0].id;
    const data = await usersRepository.disable(id);
    deepStrictEqual(data.isDisabled, true);
  });

  it('should delete logically a user', async () => {
    const id = users[0].id;
    const data = await usersRepository.deleteById(id);
    deepStrictEqual(data.isDeleted, true);
  });

  it('should delete a user', async () => {
    const id = users[0].id;
    const data = await usersRepository.remove(id);
    deepStrictEqual(data, seeding.users[0]);
  });

  after(async () => {
    await database.$disconnect();
  });
});
